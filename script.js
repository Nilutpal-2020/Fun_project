let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let reset = document.querySelector('#reset');
let mode = document.querySelectorAll('.mode');

init();

function init() {
	modeSetUp();
	squaresSetup();

	resetMode();
}

function modeSetUp() {
	for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener('click', function() {
			mode[0].classList.remove('selected');
			mode[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			resetMode();
		});
	}
}

function squaresSetup() {
	for (let i = 0; i < squares.length; i++) {
		//adding click listeners to squares
		squares[i].addEventListener('click', function() {
			let clickedColor = this.style.backgroundColor;
			//compare clicked colors;
			//console.log(clickedColor,pickedColor);
			if (clickedColor === pickedColor) {
				message.textContent = 'Correct!';
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				reset.textContent = 'Play Again?';
			} else {
				this.style.backgroundColor = '#232323';
				message.textContent = 'Try Again!';
			}
		});
	}
}

function resetMode() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
	reset.textContent = 'New Colors';
	message.textContent = '';
}

reset.addEventListener('click', () => {
	resetMode();
});

function changeColor(color) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return `rgb(${r}, ${g}, ${b})`;
}
