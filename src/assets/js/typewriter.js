$(document).ready(function() {

    setTimeout(function(){

      var str = $('.hero__title h1').html(),
      i = 0,
      isTag,
      text,
      cursor = "<span>|</span>",
      timer;

      (function type() {
        text = str.slice(0, ++i);
        if (text === str){
            i = 0;
          blink();
          return;
        }
        $('#hero-title').html(text + " " + cursor);
        timer = setTimeout(type, 40);
      }());

      function blink() {
        i++;
        const foo = str + " " + (i%2 ? cursor : '');
        $('#hero-title').html(foo);
        if (i < 10) timer = setTimeout(blink, 600);
        else fade();
      }

      function fade() {
          $('#hero-title').html(str);
      }

    }, 300);

})