"use strict";

window.onload = function() {
	let can = document.getElementById("can");
	let holst = can.getContext("2d");
	
	function drawFon() {
		holst.clearRect(0, 0, 800, 600);
		holst.fillStyle = "#FF0000";
		holst.fillRect(0, 0, 800, 600);
	}
	
	drawFon();
	
	let xx = 150;
	let yy = 250;
	let ss = 50;
	let speed = 7;
	
	function drawHero() {
		holst.fillStyle = "#00FF00";
		holst.fillRect(xx, yy, ss, ss);
	}
	
	drawHero();
	
	function moveHero() {
		if(xx + ss >= 800) speed = speed * (-1);
		if(xx <= 0) speed = speed * (-1);
		xx = xx + speed;
	}
	
	let inter = setInterval(function() {
		moveHero();
		drawFon();
		drawHero();
	},  50);
}






