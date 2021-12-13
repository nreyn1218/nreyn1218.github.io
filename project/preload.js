window.onload = function() {
    setTimeout(function() {
		// XHR to request a JS and a CSS
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://domain.tld/home-popup.js');
		xhr.send('');
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://domain.tld/slideshow.js');
		xhr.send('');
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://domain.tld/HTMLInclude.js');
		xhr.send('');
		xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://domain.tld/default.css');
		xhr.send('');
		// preload image
		new Image().src = "http://domain.tld/truck3.JPEG";
		new Image().src = "http://domain.tld/tundra.jpg";
		new Image().src = "http://domain.tld/truck2.jpg";
		new Image().src = "http://domain.tld/setup.JPEG";
		new Image().src = "http://domain.tld/truck4.JPEG";
		new Image().src = "http://domain.tld/truck1.jpg";
	}, 1000);
};