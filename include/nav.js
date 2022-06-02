// Top navigation bar to use in every page
document.write('<div class="topnav" id="myTopnav">'  				 					  + 
			         '<a href="index.html">Home</a>'                 					  + 
					 '<div class="dropdown">'   				  						  +
					    '<button class="dropbtn">Military Planes</button>'   			  +
					    '<div class="dropdown-content">'					 			  +
					       '<a href="PageBlackBird.html">Blackbird</a>' 				  +
					    '</div>'														  +
					 '</div>'															  +
					 '<div class="dropdown">'   				  						  +
					    '<button class="dropbtn">Civil Planes</button>'   		  	  	  +
					    '<div class="dropdown-content">'					 			  +
					       '<a href="PageConcorde.html">Concorde</a>' 			  	 	  +
					    '</div>'													 	  +
					 '</div>'														  	  +
					 '<div class="dropdown">'   				  					 	  +
					    '<button class="dropbtn">Other Planes</button>'   		 	  	  +
					    '<div class="dropdown-content">'					 		 	  +
					       '<a href="PageShuttle.html">Space Shuttle</a>' 			  	  +
					    '</div>'													  	  +
					 '</div>'														  	  +	
					 '<div class="topnav-right">'								   	 	  +
						'<button class= "icon" onclick="openNav()">&#9776</button>'   	  +
					 '</div>' 														  	  + 
			   '</div>')
					 

// Minimized navigation bar
document.write('<div id="myNav" class="overlay">'												 +
				'<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' + 						 
					'<div class="overlay-content">' 											 +					 		
						'<a href="index.html">Home</a>' 										 +	
						'<div class="overlay-dropdown">'  										 +  				  					   
							'<a class="overlay-dropbtn">Military Planes</a>' 					 + 
							'<div class="overlay-dropdown-content">' 							 +				 		   
								'<a href="PageBlackBird.html">Blackbird</a>' 					 +			   
							'</div>' 															 +			
						'</div>' 																 +
						'<div class="overlay-dropdown">' 										 +   				  					   
							'<a class="overlay-dropbtn">Civil Planes</a>' 						 +
							'<div class="overlay-dropdown-content">' 							 +				 		   
								'<a href="PageConcorde.html">Concorde</a>' 						 +		   
							'</div>' 															 +
						'</div>' 																 +
						'<div class="overlay-dropdown">'										 +   				  					   
							'<a class="overlay-dropbtn">Other Planes</a>'  						 +
							'<div class="overlay-dropdown-content">'							 +				 		   
								'<a href="PageShuttle.html">Space Shuttle</a>' 					 +			   
							'</div>'															 +	
						'</div>'																 +
					'</div>'																     +							 
				'</div>')

// Open navigation menu (for small screens)
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// Close navigation menu (for small screens)
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}