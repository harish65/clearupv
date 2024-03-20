jQuery(document).ready(function($) {
    if (window.VcAccordionView && !$('body.compose-mode').length) {
        window.UncodeHeroSectionView = window.VcAccordionView.extend({
            render: function() {
                window.UncodeHeroSectionView.__super__.render.call(this);
                this.$content.sortable({
                    axis: "y",
                    handle: "h3",
                    stop: function(event, ui) {
                        // IE doesn't register the blur when sorting
                        // so trigger focusout handlers to remove .ui-state-focus
                        ui.item.prev().triggerHandler("focusout");
                        $(this).find('> .wpb_sortable').each(function() {
                            var shortcode = $(this).data('model');
                            shortcode.save({
                                'order': $(this).index()
                            }); // Optimize
                        });
                    }
                });
                return this;
            },
            addTab: function(e) {
                this.adding_new_tab = true;
                e.preventDefault();
                var row = vc.shortcodes.create({
                    shortcode: 'clearvue_hero_section_slide',
                    params: {
                        "title":"Title",
                        "subtitle":"Subtitle",
                        "button_text":"Button",
                        "button_link":"url:"
                    },
                    parent_id: this.model.id
                });
            },
        });
    }
});