

$(document).ready(function(){
$(".eight7 dl dt").each(function(){
		$(this).hover(function(){
			$(this).closest("dl").find("dd").show().stop().animate({left:"80px"},500);
		},function(){
			$(this).closest("dl").find("dd").hide().stop().animate({left:"0px"},500);
		});	
	});
	$(".eight_08 dt").hover(function(){
		$(".eight_08 dd").show().stop().animate({left:"-158px"},500);	
	},function(){
		$(".eight_08 dd").hide().stop().animate({left:"0px"},500);	
	});
	
	$(".eightbox dl:last").css({"margin-right":"0"});
})








$(document).ready(function(){
$(".page2-nav").find("li").click(function(){

	$(".page2-nav").find("li").removeClass('on');
	$(this).addClass('on');
    $(".page2-box").find('.page2-text').removeClass("dis").addClass("undis");
    $(".page2-box").find('.page2-text').eq($(this).index()).removeClass("undis").addClass("dis");
     



})
 


$('.close').click(function(){
		$('#home-body').fadeOut(100);
		$('.showdiv').slideUp(200);
	});
	
	$('#home-body').click(function(){
		$('#home-body').fadeOut(100);
		$('.showdiv').slideUp(200);
		$(".message").hide();
		$('#home-body').hide();
	});

$('.btn2').click(function(){
        $('#home-body').fadeIn(100);
		$('.showdiv').slideDown(200);

})



$('.kh')  .click(function(){
        $('#home-body').fadeIn(100);
		$('.showdiv').slideDown(200);


})


	})






















