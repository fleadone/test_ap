$(document).ready(function () {
    $('.gallery_item').on('click', function () {  
        $('.item_description').css('visibility', 'hidden');
        $('.gallery_item').removeClass('active_item');
        $(this).addClass('active_item');
        $('.gallery_item').removeClass('animate_active_item');
        $('.active_item').addClass('animate_active_item');
        $('.popup_title').text($('.active_item>.title').text());
        $('.text_title').text($('.active_item>.title').text());
    })
    $('.popup_title').text($('.active_item>.title').text());
    $('.text_title').text($('.active_item>.title').text());
    $('.btn').on('click', function (event) {  
        event.preventDefault();
        $('.popup').slideDown();
    })
    $('.close').on('click', function (event) {  
        event.preventDefault();
        $('.popup').slideUp();
    })
    
});