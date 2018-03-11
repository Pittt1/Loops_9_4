function drawTree(star) {
	var stars = star;
	for (var i = 1 ; i <= 7 ; i++) {
		console.log(stars);
		stars += star;
	}
}	

drawTree('*');

function drawTree(n) {
	var stars = '*';
	for (var i = n ; i > 0 ; i--) {
		console.log(stars);
		stars += '*';
	}
}

drawTree(9);
