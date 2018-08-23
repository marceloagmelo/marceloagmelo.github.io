$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.module');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.addClass('active').siblings().removeClass( 'active' );
      }
    })
}); 
