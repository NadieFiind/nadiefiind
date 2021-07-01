anime.timeline({loop: true}).add({
	targets: "h1 .dot",
	scale: [4, 1],
	opacity: [0, 1],
	translateZ: 0,
	easing: "easeOutExpo",
	duration: 300,
	delay: (element, index) => 100 * index
}).add({
	targets: "h1 .dot",
	opacity: 0,
	duration: 500,
	easing: "easeOutExpo"
});
