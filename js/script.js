$(document).ready(function(){

    //Обращение к онку скролла//
    $(window).scroll(function(event) {

        //Переменная прокрученные пиксели в окне браузера//
        var s=$(this).scrollTop();

        //Переменная ширины окна//
        var w=$(this).outerWidth();

        //Высота контентной части//
        var h=$('.content').outerHeight();

        //Высота верхнего блока//
        var h_b=$('.parallax').outerHeight();
        
        //Вычисление % прокрутки всей конетной части//
        var p = s/h*100;

        //Вычисление % прокрутки ТОЛЬКО верхней части//
        var p_b = s/h_b*100;

        //Вычисление непрозрачности//
        var o = 1-1/100*p_b;

        var z_1=1+(w/10000*p_b);
    //Транформация тумана пуем изменения рамера в CSS//
    $('.parallax__fog').css('transform','scale('+z_1+')');
    $('.parallax__fog').css('opacity',o);

        var z_2=1+(w/500000)*p;
    $('.parallax__montain_1').css('transform','scale('+z_2+')');

        var hr=w/500*p_b;
        var z_3=1+(w*0.000005*p_b);
    $('.parallax__montain_2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');


        var hr_2=w/5000*p_b;
        var z_4=1+(w*0.00001*p_b);
    $('.parallax__montain_3').css('transform','translate3d('+hr_2+'px,0,0) scale('+z_4+')');
    })
});