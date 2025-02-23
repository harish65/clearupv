/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2023 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start
window.vc_iframe = {
    scripts_to_wait: 0,
    time_to_call: !1,
    ajax: !1,
    activities_list: [],
    scripts_to_load: !1,
    loaded_script: {},
    loaded_styles: {},
    inline_scripts: [],
    inline_scripts_body: []
},
function($) {
    "use strict";
    window.vc_iframe.showNoContent = function(show) {
        var $vc_no_content_helper_el = $("#vc_no-content-helper");
        !1 === show ? ($vc_no_content_helper_el.addClass("vc_not-empty"), $("#vc_navbar").addClass("vc_not-empty")) : ($vc_no_content_helper_el.removeClass("vc_not-empty"), $("#vc_navbar").removeClass("vc_not-empty"))
    }, window.vc_iframe.scrollTo = function(id) {
        var el_height, position, window_height = $(window).height(),
            window_scroll_top = $(window).scrollTop();
        if (id && (id = $("[data-model-id=" + id + "]"))) {
            if (!1 === (position = !!(position = id.offset()) && position.top)) return !1;
            el_height = id.height(), (window_scroll_top + window_height < position || position + el_height < window_scroll_top) && $.scrollTo(id, 500, {
                offset: -50
            })
        }
    }, window.vc_iframe.startSorting = function() {
        $("body").addClass("vc_sorting")
    }, window.vc_iframe.stopSorting = function() {
        $("body").removeClass("vc_sorting")
        // START UNCODE EDIT	
        if (typeof event !== 'undefined' && typeof ui !== 'undefined') {	
            $(window).trigger("stopSorting", ui);	
        }	
        $('.vc_element[style*="display:"]').each(function() {	
            $(this)[0].style.display = null;	
        });	
        // END UNCODE EDIT	
    }, window.vc_iframe.initDroppable = function() {
        $("body").addClass("vc_dragging"), $(".vc_container-block").on("mouseenter.vcDraggable", function() {
            $(this).addClass("vc_catcher")
        }).on("mouseout.vcDraggable", function() {
            $(this).removeClass("vc_catcher")
        })
    }, window.vc_iframe.killDroppable = function() {
        $("body").removeClass("vc_dragging"), $(".vc_container-block").off("mouseover.vcDraggable mouseleave.vcDraggable")
    }, window.vc_iframe.addActivity = function(callback) {
        this.activities_list.push(callback)
    }, window.vc_iframe.renderPlaceholder = function(event, element) {
        var element = $(element).data("tag"),
            is_container = parent.vc.map[element] === Object(parent.vc.map[element]) && ((!0 === parent.vc.map[element].is_container || !1 === parent.vc.map[element].is_container || "[object Boolean]" === toString.call(parent.vc.map[element].is_container)) && !0 === parent.vc.map[element].is_container || null != parent.vc.map[element].as_parent && "[object Array]" === Object.prototype.toString.call(parent.vc.map[element].as_parent) && 0 != parent.vc.map[element].as_parent);
        return $('<div class="vc_helper vc_helper-' + element + '"><i class="vc_general vc_element-icon' + (parent.vc.map[element].icon ? " " + parent.vc.map[element].icon : "") + '"' + (is_container ? ' data-is-container="true"' : "") + "></i> " + parent.vc.map[element].name + "</div>").prependTo("body")
    }, window.vc_iframe.setSortable = function(app) {
        var setSectionSortable, setRowSortable, setElementsSortable, $rowSortable, $elementsSortable, $sectionSortables, _this = window.vc_iframe,
            $main = (parent.vc.$page.addClass("vc-main-sortable-container"), $(parent.vc.$page));
        $main.sortable({
            forcePlaceholderSize: !1,
            connectWith: !1,
            items: " > .wpb-content-wrapper > [data-tag=vc_row], > .wpb-content-wrapper > [data-tag=vc_section]",
            // START UNCODE EDIT	
            // handle: " > .vc_row .vc_move-vc_row, > .vc_controls .vc_element-move",	
            handle: ".vc_row .vc_move-vc_row, .vc_controls .vc_element-move",	
            appendTo: document.body,	
            // END UNCODE EDIT	
            cursor: "move",
            cursorAt: {
                top: 20,
                left: 16
            },
            placeholder: "vc_placeholder-row",
            cancel: ".vc-non-draggable-row",
            helper: _this.renderPlaceholder,
            start: function(event, ui) {
                window.vc_iframe.startSorting(), ui.placeholder.height(30), "vc_section" === ui.item.data("tag") ? ($sectionSortables && $sectionSortables.sortable("destroy"), $rowSortable && $rowSortable.sortable("destroy"), $elementsSortable && $elementsSortable.sortable("destroy"), $main.sortable("option", "connectWith", !1)) : $main.sortable("option", "connectWith", ['[data-tag="vc_section"] > .vc_element-container']), $main.sortable("refresh")
            },
            stop: function(event, ui) {
                var tag, vc_map, parent_tag, trig_changed, allowed_container_element;
                _this.stopSorting(), "vc_section" === (tag = ui.item.data("tag")) && (setSectionSortable(), setRowSortable(), setElementsSortable()), $main.sortable("option", "connectWith", !1), $main.sortable("refresh"), vc_map = window.parent.vc.map || !1, trig_changed = !0, (parent_tag = ui.item.parents("[data-tag]:first").data("tag")) && (allowed_container_element = vc_map[parent_tag].allowed_container_element || !0, window.parent.vc.checkRelevance(parent_tag, tag) || (ui.placeholder.removeClass("vc_hidden-placeholder"), $(this).sortable("cancel"), trig_changed = !1), vc_map[tag] === Object(vc_map[tag])) && ((!0 === vc_map[tag].is_container || !1 === vc_map[tag].is_container || "[object Boolean]" === toString.call(vc_map[tag].is_container)) && !0 === vc_map[tag].is_container || null != vc_map[tag].as_parent && "[object Array]" === Object.prototype.toString.call(vc_map[tag].as_parent) && 0 != vc_map[tag].as_parent) && !0 !== allowed_container_element && allowed_container_element !== tag.replace(/_inner$/, "") && (ui.placeholder.removeClass("vc_hidden-placeholder"), $(this).sortable("cancel"), trig_changed = !1), trig_changed && parent.vc.shortcodes.get(ui.item.data("modelId")).view.parentChanged()
            },
            tolerance: "pointer",
            update: function(event, ui) {
                parent.vc.app.saveRowOrder(event, ui)
            }
        }), setElementsSortable = function() {
            $elementsSortable = $(".vc_element-container:not(.vc_section)").sortable({
                forcePlaceholderSize: !0,
                helper: _this.renderPlaceholder,
                distance: 3,
                scroll: !0,
                scrollSensitivity: 70,
                cursor: "move",
                cursorAt: {
                    top: 20,
                    left: 16
                },
                connectWith: ".vc_element-container:not(.vc_section)",
                items: "> [data-model-id]",
                cancel: ".vc-non-draggable",
                handle: ".vc_element-move",
                // START UNCODE EDIT	
                appendTo: document.body,	
                // END UNCODE EDIT	
                start: function(event, ui) {	
                    _this.startSorting	
                    // START UNCODE EDIT	
                    if (!$(this).find('> .vc_element:visible').length) {	
                        $(this).closest('.vc_element').addClass('vc_empty').find('> *').addClass('vc_empty-element');	
                    }	
                    // END UNCODE EDIT	
                },
                update: app.saveElementOrder,
                change: function(event, ui) {
                    ui.placeholder.height(30), ui.placeholder.width(ui.placeholder.parent().width())
                },
                placeholder: "vc_placeholder",
                tolerance: "pointer",
                over: function(event, ui) {
                    // START UNCODE EDIT	
                    $(".vc_row[data-parent]").removeClass('uncode_vc_move_over');	
                    ui.placeholder.closest(".vc_row[data-parent]").addClass('uncode_vc_move_over');	
                    // END UNCODE EDIT	
                    var tag = ui.item.data("tag"),
                        vc_map = window.parent.vc.map || !1,
                        parent_tag = ui.placeholder.closest("[data-tag]").data("tag"),
                        allowed_container_element = void 0 === vc_map[parent_tag].allowed_container_element || vc_map[parent_tag].allowed_container_element;
                    ui.placeholder.removeClass("vc_hidden-placeholder"), ui.placeholder.css({
                        maxWidth: ui.placeholder.parent().width()
                    }), tag && vc_map && (window.parent.vc.checkRelevance(parent_tag, tag) || ui.placeholder.addClass("vc_hidden-placeholder"), ui.sender && (parent_tag = ui.sender.closest(".vc_element").removeClass("vc_sorting-over")).find(".vc_element").length < 1 && parent_tag.addClass("vc_empty"), ui.placeholder.closest(".vc_element").addClass("vc_sorting-over"), vc_map[tag] === Object(vc_map[tag])) && ((!0 === vc_map[tag].is_container || !1 === vc_map[tag].is_container || "[object Boolean]" === toString.call(vc_map[tag].is_container)) && !0 === vc_map[tag].is_container || null != vc_map[tag].as_parent && "[object Array]" === Object.prototype.toString.call(vc_map[tag].as_parent) && 0 != vc_map[tag].as_parent) && !0 !== allowed_container_element && allowed_container_element !== tag.replace(/_inner$/, "") && ui.placeholder.addClass("vc_hidden-placeholder")
                },
                out: function(event, ui) {
                    ui.placeholder.removeClass("vc_hidden-placeholder"), ui.placeholder.closest(".vc_element").removeClass("vc_sorting-over")
                },
                stop: function(event, ui) {
                    // START UNCODE EDIT	
                    $(".vc_row[data-parent]").removeClass('uncode_vc_move_over');	
                    if ($(this).find('> .vc_element:visible').length) {	
                        $(this).closest('.vc_element').removeClass('vc_empty').find('> *').removeClass('vc_empty-element');	
                    }	
                    // END UNCODE EDIT	
                    var tag = ui.item.data("tag"),
                        vc_map = window.parent.vc.map || !1,
                        parent_tag = ui.item.parents("[data-tag]:first").data("tag"),
                        // START UNCODE EDIT	
                        allowed_container_element = void 0 === vc_map[parent_tag].allowed_container_element || vc_map[parent_tag].allowed_container_element,	
                        // allowed_container_element = vc_map[parent_tag].allowed_container_element || !0,	
                        // END UNCODE EDIT	
                         trig_changed = !0;
                    window.parent.vc.checkRelevance(parent_tag, tag) || (ui.placeholder.removeClass("vc_hidden-placeholder"), $(this).sortable("cancel"), trig_changed = !1), vc_map[tag] === Object(vc_map[tag]) && ((!0 === vc_map[tag].is_container || !1 === vc_map[tag].is_container || "[object Boolean]" === toString.call(vc_map[tag].is_container)) && !0 === vc_map[tag].is_container || null != vc_map[tag].as_parent && "[object Array]" === Object.prototype.toString.call(vc_map[tag].as_parent) && 0 != vc_map[tag].as_parent) && !0 !== allowed_container_element && allowed_container_element !== tag.replace(/_inner$/, "") && (ui.placeholder.removeClass("vc_hidden-placeholder"), $(this).sortable("cancel"), trig_changed = !1), trig_changed && parent.vc.shortcodes.get(ui.item.data("modelId")).view.parentChanged(), window.vc_iframe.stopSorting()
                }
            })
        }, setRowSortable = function() {
            $rowSortable = $(".wpb_row").sortable({	
                forcePlaceholderSize: !0,	
                tolerance: "pointer",	
                items: "> [data-tag=vc_column], > [data-tag=vc_column_inner]",	
                handle: "> .vc_controls .vc_move-vc_column",	
                // START UNCODE EDIT	
                appendTo: document.body,	
                // END UNCODE EDIT	
                start: function(event, ui) {	
                    window.vc_iframe.startSorting();	
                        // START UNCODE EDIT	
                    var id = ui.item.data("modelId"),	
                        model = parent.vc.shortcodes.get(id),	
                        css_class = '',	
                        prev_class = model.view.$el.attr('class'),	
                        rx_class_widths = /(?:^|\s)((col-lg-|col-md-|col-sm-)[0-9]\w*)/gi,	
                        rx_class_widths_results = prev_class.match(rx_class_widths),	
                        i_rx;	
                    for (i_rx = 0; i_rx < rx_class_widths_results.length; i_rx++) {	
                        css_class += ' ' + rx_class_widths_results[i_rx];	
                    }	
                    // END UNCODE EDIT
                    ui.item.appendTo(ui.item.parent().parent()), ui.placeholder.addClass(id), ui.placeholder.width(ui.placeholder.width() - 4)
                },
                cursor: "move",
                cursorAt: {
                    top: 20,
                    left: 16
                },
                stop: function(event, ui) {
                    window.vc_iframe.stopSorting(event, ui)
                },
                update: app.saveColumnOrder,
                placeholder: "vc_placeholder-column",
                helper: _this.renderPlaceholder
            })
        }, (setSectionSortable = function() {
            $sectionSortables = $('[data-tag="vc_section"] > .vc_element-container').sortable({
                forcePlaceholderSize: !1,
                connectWith: [".vc-main-sortable-container", '[data-tag="vc_section"] > .vc_element-container'],
                items: '[data-tag="vc_row"]',
                handle: "> .vc_row .vc_move-vc_row",
                cursor: "move",
                cursorAt: {
                    top: 20,
                    left: 16
                },
                placeholder: "vc_placeholder-row",
                cancel: ".vc-non-draggable-row",
                helper: _this.renderPlaceholder,
                // START UNCODE EDIT	
                appendTo: document.body,	
                // END UNCODE EDIT	
                start: function(event, ui) {
                    window.vc_iframe.startSorting(), ui.placeholder.height(30)
                },
                stop: function(event, ui) {
                    var allowed_container_element, tag = ui.item.data("tag"),
                        vc_map = window.parent.vc.map || !1,
                        parent_tag = ui.item.parents("[data-tag]:first").data("tag"),
                        trig_changed = !0;
                    parent_tag && (allowed_container_element = vc_map[parent_tag].allowed_container_element || !0, window.parent.vc.checkRelevance(parent_tag, tag) || (ui.placeholder.removeClass("vc_hidden-placeholder"), $(this).sortable("cancel"), trig_changed = !1), vc_map[tag] === Object(vc_map[tag])) && ((!0 === vc_map[tag].is_container || !1 === vc_map[tag].is_container || "[object Boolean]" === toString.call(vc_map[tag].is_container)) && !0 === vc_map[tag].is_container || null != vc_map[tag].as_parent && "[object Array]" === Object.prototype.toString.call(vc_map[tag].as_parent) && 0 != vc_map[tag].as_parent) && !0 !== allowed_container_element && allowed_container_element !== tag.replace(/_inner$/, "") && (ui.placeholder.removeClass("vc_hidden-placeholder"), $(this).sortable("cancel"), trig_changed = !1), trig_changed && parent.vc.shortcodes.get(ui.item.data("modelId")).view.parentChanged(), _this.stopSorting()
                },
                tolerance: "pointer",
                update: function(event, ui) {
                    parent.vc.app.saveRowOrder(event, ui)
                },
                over: function(event, ui) {
                    var tag = ui.item.data("tag"),
                        vc_map = window.parent.vc.map || !1,
                        parent_tag = ui.placeholder.closest("[data-tag]").data("tag"),
                        allowed_container_element = void 0 === vc_map[parent_tag].allowed_container_element || vc_map[parent_tag].allowed_container_element;
                    ui.placeholder.removeClass("vc_hidden-placeholder"), ui.placeholder.css({
                        maxWidth: ui.placeholder.parent().width()
                    }), tag && vc_map && (window.parent.vc.checkRelevance(parent_tag, tag) || ui.placeholder.addClass("vc_hidden-placeholder"), ui.sender && (parent_tag = ui.sender.closest(".vc_element").removeClass("vc_sorting-over")).find(".vc_element").length < 1 && parent_tag.addClass("vc_empty"), ui.placeholder.closest(".vc_element").addClass("vc_sorting-over"), vc_map[tag] === Object(vc_map[tag])) && ((!0 === vc_map[tag].is_container || !1 === vc_map[tag].is_container || "[object Boolean]" === toString.call(vc_map[tag].is_container)) && !0 === vc_map[tag].is_container || null != vc_map[tag].as_parent && "[object Array]" === Object.prototype.toString.call(vc_map[tag].as_parent) && 0 != vc_map[tag].as_parent) && !0 !== allowed_container_element && allowed_container_element !== tag.replace(/_inner$/, "") && ui.placeholder.addClass("vc_hidden-placeholder")
                },
                out: function(event, ui) {
                    ui.placeholder.removeClass("vc_hidden-placeholder"), ui.placeholder.closest(".vc_element").removeClass("vc_sorting-over")
                }
            })
        })(), setElementsSortable(), setRowSortable(), $main.disableSelection(), $main.on("mouseenter", "select", function() {
            $main.enableSelection()
        }), $main.on("mouseleave", "select", function() {
            $main.disableSelection()
        }), $main.on("focus", 'input[type="text"],textarea', function() {
            $main.enableSelection()
        }), $main.on("blur", 'input[type="text"],textarea', function() {
            $main.disableSelection()
        }), app.setFrameSize(), $("#vc_load-new-js-block").appendTo("body")
    }, window.vc_iframe.loadCustomCss = function(css) {
        vc_iframe.$custom_style || ($("[data-type=vc_custom-css]").remove(), window.vc_iframe.$custom_style = $('<style class="vc_post_custom_css_style"></style>').appendTo("body")), window.vc_iframe.$custom_style.html(css.replace(/(<([^>]+)>)/gi, ""))
    }, window.vc_iframe.loadCustomJsHeader = function(html) {
        var header_wrapper = $("[data-type=vc_custom-js-header]");
        header_wrapper.length && html ? (header_wrapper.empty(), header_wrapper.html(html)) : html ? window.vc_iframe.$custom_js_footer = $('<script data-type="vc_custom-js-header">' + html + "<\/script>").appendTo("head") : header_wrapper.remove()
    }, window.vc_iframe.loadCustomJsFooter = function(html) {
        var footer_wrapper = $("[data-type=vc_custom-js-footer]");
        footer_wrapper.length ? (footer_wrapper.empty(), footer_wrapper.html(html)) : html ? window.vc_iframe.$custom_js_footer = $('<script data-type="vc_custom-js-footer">' + html + "<\/script>").appendTo("body") : footer_wrapper.remove()
    }, window.vc_iframe.setCustomShortcodeCss = function(css) {
        this.$shortcodes_custom_css = $("body > [data-type=vc_shortcodes-custom-css]"), this.$shortcodes_custom_css.length || (this.$shortcodes_custom_css = $('<style data-type="vc_shortcodes-custom-css"></style>').prependTo("body")), this.$shortcodes_custom_css.append(css)
    }, window.vc_iframe.addInlineScript = function(script) {
        return this.inline_scripts.push(script) - 1
    }, window.vc_iframe.addInlineScriptBody = function(script) {
        return this.inline_scripts_body.push(script) - 1
    }, window.vc_iframe.loadInlineScripts = function() {
        for (var i = 0; this.inline_scripts[i];) $(this.inline_scripts[i]).insertAfter(".js_placeholder_" + i), $(".js_placeholder_" + i).remove(), i++;
        this.inline_scripts = []
    }, window.vc_iframe.loadInlineScriptsBody = function() {
        for (var i = 0; this.inline_scripts_body[i];) $(this.inline_scripts_body[i]).insertAfter(".js_placeholder_inline_" + i), $(".js_placeholder_inline_" + i).remove(), i++;
        this.inline_scripts_body = []
    }, window.vc_iframe.allowedLoadScript = function(src) {
        var i, scripts_string, ls_rc, scripts = [],
            scripts_to_add = [];
        if (src.match(/load\-scripts\.php/)) {
            for (i in scripts = (scripts_string = src.match(/load%5B%5D=([^&]+)/)[1]) ? scripts_string.split(",") : scripts) ls_rc = "load-script:" + scripts[i], vc_iframe.loaded_script[window.parent.vc_globalHashCode(ls_rc)] || (window.vc_iframe.loaded_script[window.parent.vc_globalHashCode(ls_rc)] = ls_rc, scripts_to_add.push(scripts[i]));
            return !!scripts_to_add.length && src.replace(/load%5B%5D=[^&]+/, "load%5B%5D=" + scripts_to_add.join(","))
        }
        return !vc_iframe.loaded_script[window.parent.vc_globalHashCode(src)] && ((0 < src.indexOf("wp-includes/js/") || 0 < src.indexOf("wp-content/themes/")) && (window.vc_iframe.loaded_script[window.parent.vc_globalHashCode(src)] = src), src)
    }, window.vc_iframe.collectScriptsData = function() {
        $("script[src]").each(function() {
            var src = $(this).attr("src");
            window.vc_iframe.loaded_script[window.parent.vc_globalHashCode(src)] = src
        }), $("link[href]").each(function() {
            var href = $(this).attr("href");
            window.vc_iframe.loaded_styles[window.parent.vc_globalHashCode(href)] = href
        })
    }, $("body").removeClass("admin-bar"), $(document).ready(function() {
        $("#wpadminbar").hide(), $(".edit-link").hide(), window.parent.vc && !window.parent.vc.loaded && window.parent.vc.build && window.parent.vc.build()
    }), window.vc_iframe.reload = function() {
        for (var i in window.vc_iframe.reload_safety_call = !1, $("a:not(.control-btn),form").each(function() {
                $(this).attr("target", "_blank")
            }), this.collectScriptsData(), this.loadInlineScripts(), this.loadInlineScriptsBody(), this.activities_list) this.activities_list[i].call(window);
        return this.activities_list = [], window.setTimeout(function() {
            window.vc_teaserGrid(), window.vc_carouselBehaviour(), window.vc_prettyPhoto(), window.vc_googleplus(), window.vc_pinterest(), window.vc_progress_bar(), window.vc_rowBehaviour(), window.vc_waypoints(), window.vc_gridBehaviour(), window.vc_googleMapsPointer(), $(window).trigger("vc_reload"), $(window).trigger("resize")
        }, 10), !0
    }, window.vc_iframe.addScripts = function($elements) {
        window.vc_iframe.scripts_to_wait = $elements.length, window.vc_iframe.scripts_to_load = $elements
    }, window.vc_iframe.addStyles = function($elements) {
        window.jQuery("body").append($elements)
    }, window.vc_iframe.loadScripts = function() {
        vc_iframe.scripts_to_wait && vc_iframe.scripts_to_load ? (window.vc_iframe.scripts_to_load.each(function() {
            var $element = $(this);
            if (window.vc_iframe.reload_safety_call = !0, $element.is("script")) {
                var src = $element.attr("src");
                if (src)(src = vc_iframe.allowedLoadScript(src)) ? $.getScript(src, function() {
                    --window.vc_iframe.scripts_to_wait, vc_iframe.scripts_to_wait < 1 && window.vc_iframe.reload()
                }) : (--window.vc_iframe.scripts_to_wait, vc_iframe.scripts_to_wait < 1 && window.vc_iframe.reload());
                else {
                    try {
                        window.jQuery("body").append($element)
                    } catch (err) {
                        window.console && window.console.warn && window.console.warn("loadScripts error", err)
                    }--window.vc_iframe.scripts_to_wait, vc_iframe.scripts_to_wait < 1 && vc_iframe.reload()
                }
            } else {
                src = $element.attr("href");
                src && !vc_iframe.loaded_styles[window.parent.vc_globalHashCode(src)] && window.jQuery("body").append($element), --window.vc_iframe.scripts_to_wait, vc_iframe.scripts_to_wait < 1 && window.vc_iframe.reload()
            }
        }), window.vc_iframe.scripts_to_load = !1, $(document).ajaxComplete(function(e) {
            $(e.currentTarget).off("ajaxComplete"), window.vc_iframe.scripts_to_wait || vc_iframe.reload()
        }), window.setTimeout(function() {
            !0 === vc_iframe.reload_safety_call && vc_iframe.reload()
        }, 14e3)) : window.vc_iframe.reload()
    }, window.vc_iframe.destroyTabs = function($tabs) {
        $tabs.each(function() {
            $(this).find(".wpb_tour_tabs_wrapper").tabs("destroy")
        })
    }, window.vc_iframe.buildTabs = function($tab, active) {
        var ver = $.ui.version.split("."),
            old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
        return $tab.each(function(index) {
            $(this).attr("data-interval");
            var $tabs, tabs_array = [],
                $wrapper = $(this).find(".wpb_tour_tabs_wrapper");
            $wrapper.hasClass("ui-widget") ? (active = !1 !== active ? active : $wrapper.tabs("option", "active"), $tabs = $wrapper.tabs("refresh"), $wrapper.tabs("option", "active", active)) : $tabs = $(this).find(".wpb_tour_tabs_wrapper").tabs({
                active: 0,
                show: function(event, ui) {
                    wpb_prepare_tab_content(event, ui)
                },
                activate: function(event, ui) {
                    wpb_prepare_tab_content(event, ui)
                }
            }), $(this).find(".vc_element").each(function() {
                tabs_array.push(this.id)
            }), $(this).find(".wpb_prev_slide a, .wpb_next_slide a").off("click").on("click", function(e) {
                var index;
                e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), $(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), e = $tabs.find(".wpb_tab").length, index = $(this).parent().hasClass("wpb_next_slide") ? e <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? e - 1 : index - 1, $tabs.tabs("option", "active", index))
            })
        }), !0
    }, window.vc_iframe.setActiveTab = function($tabs, index) {
        // START UNCODE EDIT	
        var $active_tab = $($tabs.context).find("[data-tab-id]:eq(" + index + ")").addClass('active'),	
            active_id = $active_tab.attr('data-tab-id'),	
            $axtive_panel = $($tabs.context).find("#" + active_id).addClass('active').addClass('in');	
        // END UNCODE EDIT	
        $tabs.each(function() {
            $(this).find(".wpb_tour_tabs_wrapper").tabs("refresh"), $(this).find(".wpb_tour_tabs_wrapper").tabs("option", "active", index)
        })
    }, window.vc_iframe.setTabsSorting = function(view) {
        var $controls = $(view.tabsControls().get(0));
        // START UNCODE EDIT	
        var params = view.model.get("params")	
        var offsetFix = true;	
        // END UNCODE EDIT	
        $controls.hasClass("ui-sortable") && $controls.sortable("destroy"), $controls.sortable({
            // START UNCODE EDIT	
            // axis: "vc_tour" === view.model.get("shortcode") ? "y" : "x",	
            appendTo: document.body,	
            axis: "yes" === params.vertical ? "y" : "x",	
            // END UNCODE EDIT	
            update: view.stopSorting,
            items: "> li:not(.add_tab_block)"
            // START UNCODE EDIT	
            // }), navigator.userAgent.toLowerCase().match(/firefox/) && ($controls.bind("sortstart", function(event, ui) {	
            }), "yes" === params.vertical && ($controls.bind("sortstart", function(event, ui) {	
            // END UNCODE EDIT	
            ui.helper.css("margin-top", $(window).scrollTop())
        }), $controls.bind("sortbeforestop", function(event, ui) {
            ui.helper.css("margin-top", 0)
        }))
    }, window.vc_iframe.buildAccordion = function($el, active) {
        $el.each(function(index) {
            var $this = $(this),
                $wrapper = $this.find(".wpb_accordion_wrapper"),
                active_tab = ($this.attr("data-interval"), !isNaN($this.data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
	            // START UNCODE EDIT	
	            var $panel_group = $this.closest('.panel-group'),	
	            	groupId = $panel_group.attr('id');	
	            $this.find('[data-parent]').each(function(){	
	            	$(this).attr('data-parent', '#' + groupId);	
	            });	
            $wrapper.hasClass("ui-widget") ? (!1 === active && (active = $wrapper.accordion("option", "active")), $wrapper.accordion("refresh"), $wrapper.accordion("option", "active", active)) : $this.find(".wpb_accordion_wrapper").accordion({
                create: function(event, ui) {
                    ui.panel.parent().parent().addClass("vc_active-accordion-tab")
                },
                header: "> .vc_element > div > h3",
                autoHeight: !1,
                heightStyle: "content",
                active: active_tab,
                collapsible: collapsible,
                navigation: !0,
                activate: function(event, ui) {
                    vc_accordionActivate(event, ui), ui.oldPanel.parent().parent().removeClass("vc_active-accordion-tab"), ui.newPanel.parent().parent().addClass("vc_active-accordion-tab")
                },
                change: function(event, ui) {
                    void 0 !== $.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), window.vc_carouselBehaviour()
                }
            })
        })
    }, window.vc_iframe.setAccordionSorting = function(view) {
        $(view.$accordion.find("> .wpb_accordion_wrapper").get(0)).sortable({
            handle: ".vc_move-vc_accordion_tab",
            update: view.stopSorting
        })
    }, window.vc_iframe.vc_imageCarousel = function(model_id) {
        var $el = $("[data-model-id=" + model_id + "]"),
            $el = ($el.find("img").length, $el.find('[data-ride="vc_carousel"]'));
        !$el.find("img:first").length || $el.find("img:first").prop("complete") ? $el.carousel($el.data()) : window.setTimeout(function() {
            window.vc_iframe.vc_imageCarousel(model_id)
        }, 500)
    }, window.vc_iframe.vc_gallery = function(model_id) {
        var $gallery = $("[data-model-id=" + model_id + "]").find(".wpb_gallery_slides");
        $gallery.find("img:first").prop("complete") ? this.gallerySlider($gallery) : window.setTimeout(function() {
            window.vc_iframe.vc_gallery(model_id)
        }, 500)
    }, window.vc_iframe.vc_postsSlider = function(model_id) {
        model_id = $("[data-model-id=" + model_id + "]").find(".wpb_gallery_slides");
        this.gallerySlider(model_id)
    }, window.vc_iframe.gallerySlider = function($gallery) {
        var sliderTimeout, sliderFx, slideshow, $imagesGrid;
        $gallery.hasClass("wpb_flexslider") ? (sliderTimeout = 1e3 * parseInt($gallery.attr("data-interval"), 10), sliderFx = $gallery.attr("data-flex_fx"), slideshow = !0, $gallery.flexslider({
            animation: sliderFx,
            slideshow: slideshow = 0 === sliderTimeout ? !1 : slideshow,
            slideshowSpeed: sliderTimeout,
            sliderSpeed: 800,
            smoothHeight: !0
        }), $gallery.addClass("loaded")) : $gallery.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * $gallery.attr("data-interval")) && (sliderTimeout = 9999999999), $gallery.find(".nivoSlider").nivoSlider({
            effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 800,
            pauseTime: sliderTimeout,
            startSlide: 0,
            directionNav: !0,
            directionNavHide: !0,
            controlNav: !0,
            keyboardNav: !1,
            pauseOnHover: !0,
            manualAdvance: !1,
            prevText: "Prev",
            nextText: "Next"
        })) : $gallery.hasClass("wpb_image_grid") && ($.fn.imagesLoaded ? $imagesGrid = $gallery.find(".wpb_image_grid_ul").imagesLoaded(function() {
            $imagesGrid.isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
            })
        }) : $gallery.find(".wpb_image_grid_ul").isotope({
            itemSelector: ".isotope-item",
            layoutMode: "fitRows"
        }))
    }, window.vc_iframe.vc_toggle = function(model_id) {
        model_id = $("[data-model-id=" + model_id + "]");
        window.vc_toggleBehaviour(model_id)
    }, window.vc_iframe.vc_tta_toggle = function(model_id) {
        model_id = $("[data-model-id=" + model_id + "]");
        window.vc_ttaToggleBehaviour(model_id)
    }, window.vc_iframe.gridInit = function(model_id) {
        var vcGrid, model_id = $("[data-model-id=" + model_id + "] [data-vc-grid-settings]");
        model_id.find(".vc_grid-loading:visible").length || ((vcGrid = model_id.data("vcGrid")) ? (model_id.empty(), vcGrid.init()) : model_id.vcGrid())
    }, window.vc_iframe.updateChildGrids = function(model_id) {
        $("[data-model-id=" + model_id + "] [data-vc-grid-settings]").each(function() {
            var $grid = $(this),
                vcGrid = $(this).data("vcGrid");
            !$grid.find(".vc_grid-loading:visible").length && vcGrid && ($grid.empty(), vcGrid.init())
        })
    }, window.vc_iframe.buildTTA = function() {
        $("[data-vc-accordion]:not(.vc_is-ready-fe)").on("show.vc.accordion", function(e) {
            var ui = {};
            ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
        }).addClass("vc_is-ready-fe")
    }, window.vc_iframe.vc_pieChart = function() {
        window.vc_pieChart(), window.setTimeout(function() {
            $(window).off("resize.vcPieChartEditable").on("resize.vcPieChartEditable", function() {
                $(".vc_pie_chart.vc_ready").vcChat()
            })
        }, 500)
    }, $(document).ready(function() {
        parent && parent.vc && !parent.vc.loaded && window.setTimeout(function() {
            parent.vc.build()
        }, 10)
    })
}(window.jQuery),
function($) {
    "use strict";
    var vcPointerMessage = function(target, pointerOptions, texts) {
        this.target = target, this.$pointer = null, this.texts = texts, this.pointerOptions = pointerOptions, this.init()
    };
    vcPointerMessage.prototype = {
        init: function() {
            _.bindAll(this, "openedEvent", "reposition")
        },
        show: function() {
            this.$pointer = $(this.target), this.$pointer.data("vcPointerMessage", this), this.pointerOptions.opened = this.openedEvent, this.$pointer.addClass("vc-with-vc-pointer").pointer(this.pointerOptions).pointer("open"), $(window).on("resize.vcPointer", this.reposition)
        },
        domButtonsWrapper: function() {
            return $('<div class="vc_wp-pointer-controls" />')
        },
        domCloseBtn: function() {
            return $('<a class="vc_pointer-close close">' + this.texts.finish + "</a>")
        },
        domNextBtn: function() {
            return $('<button class="button button-primary button-large vc_wp-pointers-next">' + this.texts.next + '<i class="vc_pointer-icon"></i></button>')
        },
        domPrevBtn: function() {
            return $('<button class="button button-primary button-large vc_wp-pointers-prev"><i class="vc_pointer-icon"></i>' + this.texts.prev + "</button> ")
        },
        openedEvent: function(a, b) {
            var offset = b.pointer.offset();
            b.pointer.css("z-index", 1e5), offset && offset.top && $("body").scrollTop(80 < offset.top ? offset.top - 80 : 0)
        },
        reposition: function() {
            this.$pointer.pointer("reposition")
        },
        close: function() {
            this.$pointer && this.$pointer.removeClass("vc-with-vc-pointer").pointer("close"), $(window).off("resize.vcPointer")
        }
    }, window.vcPointerMessage = vcPointerMessage
}(window.jQuery);