(function($) {

  $(function(){

    (function(){

      // изменить личные данные
      $.fn.changeValue = function(){
      var $this = $(this)
        $this
          .prev()
            .prev()
              .hide();
        $this
          .prev()
            .show();

        $this
          .text("сохранить")
            .addClass('save');
      }

      $('.content-item__str__txt').on('click', '.change-btn', function(){
        var $this = $(this)
        $this.changeValue();
      });

      // сохранить введенные данные
      $.fn.saveValue = function(){
        var $this = $(this)

        $this
          .prev()
            .hide();
        $this
          .prev()
            .prev()
              .show();

        $this
          .text("изменить")
            .removeClass('save');

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

      $('.content-item__str__txt').on('click', '.save', function(){
        var $this = $(this)
        $this.saveValue();
      });



      $('.change-addr').on('click', '.btn-addr', function(event){
        event.preventDefault();
      });


      // появление кнопки Удалить при клике на адрес
      $('.change-addr').on('click', '.inp-radio', function(){
        $this = $(this);

        if ( $this.is(':checked') ) {

          $('.del').hide();

          $this
            .parent()
              .find('.del')
                .show();
        }

      });


      // удаление адреса доставки
      $.fn.delAddr = function(){
        $this = $(this);

        $this
          .parents('.content-item__row')
            .remove();

      }

      $('.content-item__row').on('click', '.del', function(){
        var $this = $(this);

        $this.delAddr();

      });


    })(); 

    $('.phone').mask("+7 (999)-999-99-99");
    $('.date').mask("99.99.9999");

    $('input').each(function(){
      if ($(this).attr('placeholder') != '') $(this).attr('title', $(this).attr('placeholder'));
        $(this).bind('click', function(){
          $(this).attr('placeholder', '');
        });
        $(this).bind('blur', function(){
        $(this).attr('placeholder', $(this).attr('title'));
      });
    });

  });

})(jQuery);