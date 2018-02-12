// console.log(21346);
// console.log("Hello");
// console.log('Hello');
// var Hello = "Hy";
// console.log(Hello);

/*
comentariu pe mai 
multe 
linii
*/

// console.log(document);


// jQuery <=> $


// var selectie = $('.footer');
// console.log( selectie );
console.log();
// Modal Details
$('.jsShowDetails').on('click', function(event) {
    event.preventDefault();
    $('.jsDetails').addClass('is-visible');
});

$('.jsDetailsClose, .jsDetails').on('click', function(event) {
    event.preventDefault();
    $('.jsDetails').removeClass('is-visible');
});

$('.jsDetails .modal').on('click', function(event){
    event.stopPropagation();
});


// Modal Contact
$('.jsShowContact').on('click', function(event) {
    event.preventDefault();
    $('.jsContact').addClass('is-visible');
});

$('.jsContactClose, .jsContact').on('click', function(event) {
    event.preventDefault();
    $('.jsContact').removeClass('is-visible');
});

$('.jsContact .modal').on('click', function(event){
    event.stopPropagation();
});


$('.jsMainMenu a').on('click', function(event){
    event.preventDefault();

    var id = $(this).attr('href');

    var headerHeight = $('.jsHeader').outerHeight();

    var toGo = $(id).offset().top - headerHeight;

    // $('body, html').scrollTop(toGo);

    $('body, html').animate({
        "scrollTop": toGo
    }, 500);

    console.log(  );
});


$('.jsTagMenu a').on('click', function(event){
    event.preventDefault();

    var selectedTag = $(this).data('tag');

    if (selectedTag) {
        // console.log( $('.jsPortfolioGallery > div').not('[data-tag="'+selectedTag+'"]') );
        // $('.jsPortfolioGallery > div').show().not('[data-tag="'+selectedTag+'"]').hide();
        $('.jsPortfolioGallery > div').each(function() {
            var itemTag = $(this).data('tag');
            if(itemTag && itemTag.indexOf(selectedTag) >= 0 ) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    } else {
        $('.jsPortfolioGallery > div').show();
    }
});

$('.jsSlider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: false,
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>'
});


$('.jsDatepicker').flatpickr();