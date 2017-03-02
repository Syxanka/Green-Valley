$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 50px
        nav: false,
        autoplay: true,
        autoplayTimeout: 1000,
        navigation:true,
        pagination:true,
    });
    
    $(".room-card__gallery").owlCarousel({
        items: 1,
		nav: true,
		dots: false,
    })
    
});
