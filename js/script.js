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