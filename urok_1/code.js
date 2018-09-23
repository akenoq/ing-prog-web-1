"use strict";

window.onload = function() {
	let f1 = document.getElementById("f1");
	let f2 = document.getElementById("f2");
	let b1 = document.getElementById("b1");
	
	b1.onclick = function() {
		let a = f1.value;
		let b = f2.value;
		
		a = parseInt(a);
		b = parseInt(b);
		
		let s = a + b;
		alert(s);
	}
}
