		/* Using jquery to add events to mouseover and mouseout in order to change de background
		picture according to the coordinates of the area elements*/
			
		jQuery(document).ready(function () {
			$('.title-blue').mouseout(function(){
				$("#map").attr('src', '361.png');
				$('.title-blue').css({ 

					'text-decoration': 'none',
  					'color': '#fff',
  					'background-color': 'transparent',
  					'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  					'padding': '10px 20px'});

			}),
			$('.title-blue').mouseover( function(){
				$("#map").attr('src', '361-verde.png');
					$('.title-blue').css({ 

					  'background': '#fff',
  					  'color': '#1db8e8',
  				      'border-radius': '50px'});

			});
			$('#blue').mouseout(function(){
				$("#map").attr('src', '361.png');
				$('.title-yellow').css({ 

					'text-decoration': 'none',
  					'color': '#fff',
  					'background-color': 'transparent',
  					'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  					'padding': '10px 20px'});
			}),
			$('#blue').mouseover( function(){
				$("#map").attr('src', '361-azul.png');
				$('.title-yellow').css({"background":"#fff","color":"#1db8e8","border-radius":"50px"});
			});

			$('.title-red').mouseout(function(){
				$("#map").attr('src', '361.png');
				$('.title-red').css({ 

					'text-decoration': 'none',
  					'color': '#fff',
  					'background-color': 'transparent',
  					'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  					'padding': '10px 20px'});

			}),
			$('.title-red').mouseover( function(){
				$("#map").attr('src', '361-amarelo.png');
				$('.title-red').css({ 

					  'background': '#fff',
  					  'color': '#1db8e8',
  				      'border-radius': '50px'});

			});

			$('#red').mouseout(function(){
				$("#map").attr('src', '361.png');
				$('.title-green').css({ 

					'text-decoration': 'none',
  					'color': '#fff',
  					'background-color': 'transparent',
  					'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  					'padding': '10px 20px'});
			}),
			$('#red').mouseover( function(){
				$("#map").attr('src', '361-vermelho.png');
				$('.title-green').css({"background":"#fff","color":"#1db8e8","border-radius":"50px"});
			});
			$('.title-green').mouseout(function(){
				$("#map").attr('src', '361.png');
					$('.title-green').css({ 

					'text-decoration': 'none',
  					'color': '#fff',
  					'background-color': 'transparent',
  					'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  					'padding': '10px 20px'});

			}),

		
			$('.title-green').mouseover( function(){
				$("#map").attr('src', '361-vermelho.png');
				$('.title-green').css({ 

					  'background': '#fff',
  					  'color': '#1db8e8',
  				      'border-radius': '50px'});

			});	

			$('#green').mouseout(function(){
				$("#map").attr('src', '361.png');
				$('.title-blue').css({ 

					'text-decoration': 'none',
  					'color': '#fff',
  					'background-color': 'transparent',
  					'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  					'padding': '10px 20px'});
			}),

			$('#green').mouseover( function(){
				$("#map").attr('src', '361-verde.png');
				$('.title-blue').css({"background":"#fff","color":"#1db8e8","border-radius":"50px"});
			});
			$('.title-yellow').mouseout(function(){
				$("#map").attr('src', '361.png');
				$('.title-yellow').css({ 

					'text-decoration': 'none',
  					'color': '#fff',
  					'background-color': 'transparent',
  					'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  					'padding': '10px 20px'});
			}),
			$('.title-yellow').mouseover( function(){
				$("#map").attr('src', '361-azul.png');
					$('.title-yellow').css({ 

					  'background': '#fff',
  					  'color': '#1db8e8',
  				      'border-radius': '50px'});
			});
			$('#yellow').mouseout(function(){
				$("#map").attr('src', '361.png');
				$('.title-red').css({ 

					'text-decoration': 'none',
  					'color': '#fff',
  					'background-color': 'transparent',
  					'transition': 'all 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  					'padding': '10px 20px'});
			}),
			$('#yellow').mouseover( function(){
				$("#map").attr('src', '361-amarelo.png');
				$('.title-red').css({"background":"#fff","color":"#1db8e8","border-radius":"50px"});
			});
		});


		
	
	console.log('hello');

