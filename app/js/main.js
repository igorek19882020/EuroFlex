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




})
