$(".hamburger").click(function(){
    $("nav").toggle('slow');
    $('.hamburger').hide();
    $('.X').show('slow');
});

$(".X").click(function(){
    $("nav").toggle('slow');
    $('.hamburger').hide();
    $('.hamburger').show('slow');
    $('.X').hide('slow');
});