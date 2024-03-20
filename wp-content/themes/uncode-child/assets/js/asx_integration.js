jQuery(function($){
    var body =  $('body');
    // on upload button click
    body.on( 'click', '.asx-image-upl', function(e){

        e.preventDefault();

        var button = $(this),
            custom_uploader = wp.media({
                title: 'Insert an image for ASX announcements',
                library : {
                    // uploadedTo : wp.media.view.settings.post.id, // attach to the current post?
                    type : 'image'
                },
                button: {
                    text: 'Use this image' // button label text
                },
                multiple: false
            }).on('select', function() { // it also has "open" and "close" events
                var attachment = custom_uploader.state().get('selection').first().toJSON();
                button.html('<img src="' + attachment.sizes.thumbnail.url + '">').removeClass('page-title-action').next().val(attachment.id).next().show();
            }).open();

    });

    // on remove button click
    body.on('click', '.asx-image-upl-rmv', function(e){
        e.preventDefault();
        var button = $(this);
        button.prev().val(''); // emptying the hidden field
        button.hide().prev().prev().html('Upload image').addClass('page-title-action');
    });


    body.on( 'click', '.asx_sync_btn', function(e){
        e.preventDefault();
        $('.asx-sync-notice').remove();
        var siteUrl = ajax_params.site_url;
        var button = $(this);
        button.prop('disabled', true);
        $.ajax({url: siteUrl+"/wp-json/asx-announcements/sync?type=custom",
            beforeSend: function() {
                button.html('Syncing........');
            },
            success: function(result){
                // console.log(result);
                var asxSyncSection = $('.asx_sync-section');
                if(result) {
                    if (result.status == 'Success') {
                        button.html('Synced');
                        asxSyncSection.prepend('<div class="notice notice-success is-dismissible asx-sync-notice">\n' +
                            '<p><strong>' + result.successMessage + '</strong></p>\n' +
                            '</div>');
                    } else {
                        button.val('Not Synced');
                        asxSyncSection.prepend('<div class="notice notice-error is-dismissible asx-sync-notice">\n' +
                            '<p><strong>' + result.errorMessage + ' Please refresh the page and try again after 25 minutes.</strong></p>\n' +
                            '</div>');
                    }
                }
                else
                {
                    button.html('Not Synced');
                    asxSyncSection.prepend('<div class="notice notice-error is-dismissible asx-sync-notice">\n' +
                        '<p><strong>ASX announcement sync failed. Please refresh the page and try again after 25 minutes.</strong></p>\n' +
                        '</div>');
                }
                button.prop('disabled', false);
            }
        });
    });
});
