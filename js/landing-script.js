$ = jQuery;
jQuery(document).ready(function () {
    $window = jQuery(window);
    $window.scroll(function () {
        $scroll_position = $window.scrollTop();
        if ($scroll_position > 1) { // if body is scrolled down by 1 pixels
            jQuery('#site-header').addClass('sticky');
            //jQuery('#site-footer').addClass('sticky');
            // to get rid of jerk
            header_height = jQuery('#site-header').innerHeight();
            jQuery('body').css('padding-top', header_height);
            footer_height = jQuery('#site-footer').innerHeight();
            jQuery('body').css('padding-bottom', footer_height);
        } else {
            jQuery('body').css('padding-top', '0');
            jQuery('#site-header').removeClass('sticky');
            //jQuery('body').css('padding-bottom' , '0');
            //jQuery('#site-footer').removeClass('sticky');
        }
    });
});
$("#enquireForm").validate();
$("#sitevisitForm").validate();
$("#enquireFormModal").validate();
$(document).ready(function () {

    /* $('.free-visit-btn').click(function () {
        $("#sitevisitFormWrap").animate({
            width: "toggle"
        }, 500);
        $("#floatingEnqFormWrap").removeAttr('style');
    })
    $('.enquire-btn').click(function () {
        $("#floatingEnqFormWrap").animate({
            width: "toggle"
        }, 500);
        $("#sitevisitFormWrap").removeAttr('style');
    }) */
});