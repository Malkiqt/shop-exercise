var page = 0;
var per_page = 8;
var next_image = 0;
var	image_dir = 'images/main_image/cosmos_'
var	image_ext = '.jpg'
var image_alarm = 5000;
var last_action = 'home';
var total_posts = '';

///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                CHANGE CONTENT                      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(function(){

	$('#content_buttons').on('click','a',function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		(id=='next') ? page++ : page--;
		change_content(last_action);
	});



	$('#nav_ul').on('click','a',function(e){
		e.preventDefault();
		var action = $(this).attr('value');
		if(action!='create'){
			last_action = action;
			page = 0;
			change_content(action);			
		}else{
			hide_content();
			$('#create_post').show();
		}

	});


	$('#content').on('click','.item',function(e){
		e.preventDefault();
		///Open Individual Post
		hide_content();
		
		///Add Content to Individual Post According to What was clicked;
		$('#post_image').attr('src',$(this).find('.item_image').attr('src'));
		$('#post_name').html($(this).find('.item_name').html());
		$('#post_price').html($(this).find('.item_price').html());

		$('#individual_post').show();

	});

	$('#go_back').on('click',function(e){
		e.preventDefault();
		
	});


	$('#create_post_form').submit(function(e){
		e.preventDefault();
		///Add info to DataBase
	});


});



function hide_content(){
	$('#main_image').hide();
	$('#individual_post').hide();
	$('#create_post').hide();
	$('#wrapper').hide();
}


function change_content(action){

	
	$('#prev').hide();
	$('#next').hide();

	if(action!='home' || page>0){
		$('#main_image').hide();
	}else{
		$('#main_image').show();
	} 
	
	$.ajax({
		method: "POST",
		url: "php/process.php",
		data: {action: action,page: page},
		success: function(data){
	
			var result_data = $.parseJSON(data);

			$('#wrapper').hide(0,function(){	

				$('#content').empty();	

				for(var data in result_data){
					if(data==0){
						total_posts = result_data[data].total_posts;
					}else{
						create_post(result_data[data]);
					}				
				}
				if(page>0){
					$('#prev').show();
				}
				if(total_posts>((page+1)*per_page)){
					$('#next').show();
				}
			}).fadeIn(250);			
		},
		error: function(){

		}
	});

};

function create_post(data){
	var name = data.name;
	var price = data.price;
	var image = data.image;
		/*
	<div class='item col-md-3 col-xs-12'>
		<img src='images/post_images/image' class='item_image col-xs-10 col-xs-push-1'>
		<span class='item_name col-xs-10 col-xs-push-1'>$title</span>
		<br>
		<span class='item_price col-xs-10 col-xs-push-1'>$price</span>
	</div>
	*/
	var content = "<div class='item col-md-3 col-xs-12'><img src='images/post_images/"+ image + "' class='item_image col-xs-10 col-xs-push-1'><span class='item_name col-xs-10 col-xs-push-1'>" + name +"</span><br><span class='item_price col-xs-10 col-xs-push-1'>" + price +"</span></div>";
	$('#content').append(content);
}












/*
var next_image = 0;
var	image_dir = 'images/main_image/cosmos_'
var	image_ext = '.jpg'
var image_alarm = 5000;
var page = 0;


///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                CHANGE CONTENT                      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(function(){
	$('#nav_ul').on('click','a',function(e){
		e.preventDefault();
		var action = $(this).attr('value');
		change_content(action);
	});

});
function change_content(action){
	if(action!='home'){
		$('#main_image').hide();
	}

	if(action=='home' && page==0){
		$('#main_image').show();
	}

	$.ajax({
		method: "POST",
		url: "php/process.php",
		data: {action: action,page: page},
		success: function(data){
			$('#wrapper').empty();
			var result_data = $.parseJSON(data);
			$('#wrapper').fadeOut(100,function(){				
				for(var data in result_data){
					create_post(result_data[data]);
				}
			}).fadeIn(500);			
		},
		error: function(){

		}
	});

};





function create_post(data){
	var name = data.name;
	var price = data.price;
	var image = data.image;

	var content = "<div class='item col-md-3 col-xs-12'><img src='images/post_images/"+ image + "' class='item_image col-xs-10 col-xs-push-1'><span class='item_name col-xs-10 col-xs-push-1'>" + name +"</span><br><span class='item_price col-xs-10 col-xs-push-1'>" + price +"</span></div>";
	$('#wrapper').append(content);
}

///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!          SLIDESHOW             !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$(window).on('load',function(){
	setInterval(change_image,image_alarm);
});


function change_image(){
	var fade_time = 800;

	next_image>=4 ? next_image = 0 : next_image++;
	if($('#main_image').is(':visible')){
		$("#main_image").fadeTo(1000,0.3, function() {
			$(this).attr("src",image_dir + next_image + image_ext);	      
		}).fadeTo(1000,1);		
	}

};*/