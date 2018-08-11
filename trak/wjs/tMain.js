$(function(){
	$('.wrapper').fullpage({
		css3:true,
		scrollingSpeed:1200,
		scrollOverflow:true,
		normalScrollElements:'#wDl',
		onLeave: function(index, nextIndex, direction){

		if(index == 1  && direction =='down'){
			$('.sec1').addClass('changed');
		}
		if(index == 2  && direction =='down'){
			$('.ol').addClass('sUp');
		}


	},
	afterLoad:function(anchorLink,index){
		if(index==2)
			$('#rw').css('opacity','1');
	}
	});
	$('#d').click(function(){
		$.fn.fullpage.moveSectionDown();
	});


	
});



