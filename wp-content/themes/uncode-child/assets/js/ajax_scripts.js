(function (w) {
    w.URLSearchParams = w.URLSearchParams || function (searchString) {
        var self = this;
        self.searchString = searchString;
        self.get = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(self.searchString);
            if (results == null) {
                return null;
            } else {
                return decodeURI(results[1]) || 0;
            }
        };
    }

})(window)

function faqFilter() {
    jQuery('.faq-right-nav li.link').on('click', function () {
        var faqData = {};
        var faqCategory = jQuery(this).attr('id');
        if (faqCategory && faqCategory === 'all') {
            faqCategory = '';
        }
        jQuery('.faq-right-nav li.active').removeClass('active')
        jQuery(this).addClass('active');
        faqData['category'] = faqCategory;
        var urlParams = new URLSearchParams(window.location.search);
        var searchStr = urlParams.get('searchStr');
        faqData['searchStr'] = searchStr;
        faqData['callFrom'] = 'filter';
        loadFaqs(faqData);
    });
}

function accordion_to_the_faq() {
    jQuery(".faq-accordion-title").click(function () {
        if (jQuery(this).parent().hasClass("accordian-active")) {
            jQuery(this).parent().removeClass("accordian-active");
        } else {
            jQuery(".faq-accordion-item").removeClass("accordian-active");
            jQuery(this).parent().addClass("accordian-active");
        }
    });
}

function loadFaqs(faqData) {
    jQuery.ajax({
        type: 'post',
        url: ajax_params.ajaxurl,
        data: {
            query: faqData,
            action: 'load_faqs',
            security_var: ajax_params.security
        },
        success: function (response) {
            response = JSON.parse(response);
            if (faqData['callFrom'] === 'search') {
                jQuery('.faq-right-nav').show();
            }
            jQuery(".faq-accordion").replaceWith(response.faq_content);
            accordion_to_the_faq()
            if (response.category_list) {
                jQuery(".faq-category").replaceWith(response.category_list);
                faqFilter();
            } else {
                if (faqData['callFrom'] === 'search') {
                    jQuery('.faq-right-nav').hide();
                }
            }
        }
    });
}


function faqSearchAction(searchStr) {
    var faqUrl = window.location.href.split('?')[0];
    var faqData = {};
    faqData['searchStr'] = searchStr;
    if (!faqData['searchStr']) {
        window.history.pushState({path: faqUrl}, '', faqUrl);
    } else {
        window.history.pushState({path: faqUrl + '?searchStr=' + faqData['searchStr']}, '', faqUrl + '?searchStr=' + faqData['searchStr']);
    }
    faqData['callFrom'] = 'search';
    loadFaqs(faqData);
}

jQuery(document).ready(function () {
    accordion_to_the_faq();
    faqFilter();
    jQuery('.faq-search-button').on('click', function () {
        var searchStr = jQuery('#faq-search-keyword').val();
        faqSearchAction(searchStr);
    });

    jQuery('#faq-search-keyword').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            jQuery('.faq-search-button').click();
            return false;
        }
    });
});