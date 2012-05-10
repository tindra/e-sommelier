/* Sticky topLink 
----------------------------------------------- */	
_AT = {};
_AT.stickybar = {
	clname : 'stickylink',
	idname : 'stickylink-wrap',
	scrolled : false
};
_AT.stickybar.scroll = function () {
	/* -----------[ Get element ]----------- */
		var e = $('.'+this.clname+'');
		var e_top = e.offset().top;
		var e_width = e.width();
		var e_height = e.height();
	/* -----------[ If topLink defined ]----------- */
		if (e) 
		{
			/* -----------[ Scroll event ]----------- */
				$(window).scroll(function () { 
					/* -[ Scroll position ]- */
						var scroll = $(window).scrollTop();
					/* -[ Current scroll position > start topLink offset ]- */
						if (scroll>e_top) {
							if (!this.scrolled) {
								/* -[ Fake wrapper ]- */
									if ($('#'+this.idname).length == 0) {
										e.after('<div id="'+this.idname+'"></div>');
										$('#'+this.idname).css('height',e_height+'px');
									}
								/* -[ Fix topLink ]- */
								    e.css('visibility','visible');
									e.css('position','fixed');
									e.css('top','50%');
									e.css('margin-top','-24px');
									e.css('width',e_width);
									e.css('zIndex',1000);					
									e.animate({opacity: 0.9},1);
								/* -[ Set scrolled ]- */	
									this.scrolled = true;
							}
						} else {
							if (this.scrolled) {
								e.css('position','absolute');
								e.animate({opacity: 1},1);
								this.scrolled = false;
							}
						}
		        });
        }	
};

function autoFill(id){
	var title=$(id).attr('title'); 
	$(id).addClass("readonly").attr({ value: title }).focus(function(){
		if($(id).val()==title){
			$(id).val("").removeClass("readonly");
		}
	}).blur(function(){
		if($(id).val()==""){
			$(id).addClass("readonly").val(title);
		}
	});
}
function mycarousel_initCallback(carousel) {
    jQuery('.jcarousel-next').bind('click', function() {
        carousel.next();
        return false;
    });

    jQuery('.jcarousel-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};

function search() {
    $(".f-search .input").click(function(){$(".f-search").addClass("f-search_wide"); $(".f-search .ac").show();});
};

function login() {
    $("#login").click(function(){$(".overlay").show(); $(".popup_login").show(); return false;});
    $("#register").click(function(){$(".popup_login").hide(); $(".overlay").show(); $(".popup_register").show(); return false;});
    $("#back_to_login").click(function(){$(".popup_login").show(); $(".popup_register").hide(); return false;});
    $(".overlay").click(function(){$(this).hide(); $(".popup").hide();});
};

$(document).ready(function(){  
	autoFill("#s");
	autoFill("#id-address_3");
	autoFill("#id-address");
	autoFill("#id-comm");
	
    search();
    login();
    
    $(".carousel-items").jCarouselLite({
        visible: 1,
        start: 0,
        btnNext: ".carousel .i-next",
        btnPrev: ".carousel .i-prev",
        btnGo:
        [".carousel .1", ".carousel .2",
        ".carousel .3", ".carousel .4"]
    });    
    	
	$('.comparison tr td:last-child .brdr').addClass('brdr_lst');

	_AT.stickybar.scroll();

});