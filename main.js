$( document ).ready(function() {
	generateGrid(16);

});

function generateGrid(numOfSquares){
  var width = numOfSquares;
  var height = numOfSquares;
  var size = 960 / numOfSquares;

  while (height >0){
  	$("#grid_container").append("<tr>");
  	for (var i = 1; i <= width; i++) {
			$("#grid_container").append("<td><div class='square'></div></td>");
		};
		$("#grid_container").append("</tr>");
  	height--;
  }

  $('.square').css('min-height', size+'px');
  $('.square').css('min-width', size+'px');
  
  $(".square").hover(function(){
  	$(this).addClass('red');
  });
}

function reset(){
	console.log("button clicked");
	$( "#grid_container" ).empty();

	var userNumber = prompt("Please enter number", 0);
	generateGrid(userNumber);
}

