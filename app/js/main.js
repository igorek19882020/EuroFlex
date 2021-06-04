   $(function (){   

    $('.slider__inner').slick({
      slidesToShow:3,
      slidesToScroll:3,
  
      asNavFor:'.thumbs',
      arrows: true,
       focusOnSelect: true


    });


    $('.thumbs').slick({
      slidesToShow:1,
      slidesToScroll:1,
      asNavFor:'.slider__inner',
      // focusOnSelect: true,
      arrows: true,
      // focusOnSelect: true

    });

    $(document).ready(function(){  //дожидаемся загрузки страницы
      $('#btn1').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
          $('#decision__items').toggle(); //включает/выключает элемент id="text"
      });
  });

  $('.manufacture__slider-inner').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

 


})
