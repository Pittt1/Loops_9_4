function drawTree(star) {
	var stars = star;
	for (var i = 1 ; i <= 7 ; i++) {
		console.log(stars);
		stars += star;
	}
}	

drawTree('*');