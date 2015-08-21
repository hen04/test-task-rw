(function($) {

  $(function(){


    (function(){

      $.fn.changeValue = function(){
      var $this = $(this)
        $this
          .parents('.js-txt')
            .hide();
        $this
          .parents('.content-item__str')
            .find('.js-input')
              .show()
      }
      $.fn.saveValue = function(){
        var $this = $(this)
        $this
          .parents('.js-input')
            .hide();
        $this
          .parents('.content-item__str')
            .find('.js-txt')
              .show()

        // получаем значение value в inpute
        $input = $this.prev().val();

        // вставляем его в .change-txt
        if ($.isEmptyObject($input)) {
          $this
            .parents('.content-item__str')
              .find('.js-input input')
                .val('Введите значение');
        } else {
          $this
            .parents('.content-item__str')
              .find('.change-txt')
                .text($input)
                  .addClass('chosen');
        }

        

      }

      $('.content-item__str__txt__info').on('click', '.change-btn', function(){
        var $this = $(this)
        $this.changeValue();
      });
      $('.content-item__str__txt__info').on('click', '.save', function(){
        var $this = $(this)
        $this.saveValue();
      });

    })(); 



    // $('.content-item__str__txt__info').on('click', '.change-btn', function(){
    //   var $this = $(this)
    //   $this
    //     .parents('.js-txt')
    //       .hide();
    //   $this
    //     .parents('.content-item__str')
    //       .find('.js-input')
    //         .show()
    // });

    // $('.content-item__str__txt__info').on('click', '.save', function(){
    //   var $this = $(this)
    //   $this
    //     .parents('.js-input')
    //       .hide();
    //   $this
    //     .parents('.content-item__str')
    //       .find('.js-txt')
    //         .show()
      
    //   var val = $('.js-input input').val();

    //   if ($.isEmptyObject(val)) {
    //     $this
    //       .parents('.content-item__str')
    //         .find('.js-input input')
    //           .val('Введите значение');
    //   } else {
    //     $('.change-txt').text(val);
    //   }
      

    // });



  });

})(jQuery);