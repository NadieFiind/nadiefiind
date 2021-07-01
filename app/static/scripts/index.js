/**
* Shorthand for `document.querySelectorAll` or `document.querySelectorAll`.
*/
function s(selector, isAll) {
	if (isAll) return document.querySelectorAll(selector);
	return document.querySelector(selector);
}

/**
* Set the background image of an HTML element by the given image path.
* When the image has loaded, add a 'bg-loaded' class into the element.
*/
// function setBGImage(element, imagePath) {
// 	let image = new Image();
	
// 	image.onload = () => {
// 		element.style.backgroundImage = `url('${image.src}')`;
// 		element.classList.add("bg-loaded");
// 	}
	
// 	image.src = imagePath;
// }

/**
* Wrap every characters of the `innerHTML` of an element.
*/
// function wrapEachCharacter(element, left="", right="") {
// 	element.innerHTML = element.textContent.replace(/\S/g, `${left}$&${right}`);
// }

function setBackgroundMood() {
	let background = s(`.background.sky-gradient-${hour}`);
	background.style.opacity = 1;
	
	// Set the opacity of the second to the last background to 0.
	// This is to hide the gradient transition stuttering.
	// It it second to the last and not first to the last because
	// first to the last still can't hide the stuttering.
	switch (hour) {
		case 0:
			s(`.background.sky-gradient-22`).style.opacity = 0;
			break;
		case 1:
			s(`.background.sky-gradient-23`).style.opacity = 0;
			break;
		default:
			s(`.background.sky-gradient-${hour - 2}`).style.opacity = 0;
	}
	
	// Update the time.
	hour = (hour + 1) % 24
	
	// Update the background.
	background = s(`.background.sky-gradient-${hour}`);
}

/** The script starts here! */

window.addEventListener("load", () => {
	setTimeout(() => {
		s(".loader-container").classList.add("hidden")
	}, 1000);
});

// Set the background mood.
let hour = new Date().getHours();
setBackgroundMood();
setInterval(setBackgroundMood, 2000);

// Set the background particles.
particlesJS(
	"particles-js", {
		"particles": {
			"number": {
				"value": 50,
				"density": {
					"enable": false,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#ffffff"
				},
				"polygon": {
					"nb_sides": 3
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 2,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 2.5,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 7,
					"size_min": 0,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 0,
				"color": "#ffffff",
				"opacity": 1,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 4.810236182596568,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "window",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 200,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	}
);
