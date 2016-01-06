/*
/* protocol.js
/*
/* print JavaScript code and its output as HTML table
/*
/* (c) 2012- by Ingram Braun
/* */

var ptljs_protocol; // gets printed by printProtocol()
var ptljs_table_begin = '<div style="overflow:auto"><div class="table"><table><thead><tr><th>Property</th><th>Output</th></tr></thead><tbody>'; 
var ptljs_table_end = '</tbody></table></div></div>';

/* prints the location and document object into a HTML table */
function getProtocolLocation(id) {
	var prop = [
		'location.hash',
		'location.host',
		'location.hostname',
		'location.href',
		'location.origin',
		'location.pathname',
		'location.port',
		'location.protocol',
		'location.search',
		'document.referrer'
	];
	ptljs_protocol = ptljs_table_begin;
	for (var i = 0; i < prop.length; i++) setProtocol(prop[i]);
	ptljs_protocol += ptljs_table_end;
	printProtocol(id);
}

/* prints the navigator object into a HTML table into the element with the id  */
function getProtocolPlatform(id) {
	var prop = [
		'navigator.appCodeName',
		'navigator.appName',
		'navigator.appVersion',
		'navigator.battery.charging',
		'navigator.battery.chargingTime',
		'navigator.battery.dischargingTime',
		'navigator.battery.level',
		'navigator.cookieEnabled',
		'navigator.geolocation',
		'navigator.language',
		'navigator.onLine',
		'navigator.platform',
		'navigator.systemLanguage',
		'navigator.userAgent',
		'navigator.getUserMedia',
		'navigator.mozGetUserMedia',
		'navigator.msGetUserMedia',
		'navigator.webkitGetUserMedia'
	];
	ptljs_protocol = ptljs_table_begin;
	for (var i = 0; i < prop.length; i++) setProtocol(prop[i]);
	ptljs_protocol += ptljs_table_end;
	printProtocol(id);
}

/* prints the window object into a HTML table into the element with the id */
function getProtocolWindow(id) {
	var prop = [
		'defaultStatus',
		'history.length',
		'innerHeight',
		'innerWidth',
		'length',
		'locationbar.visible',
		'menubar.visible',
		'name',
		'offscreenBuffering',
		'outerHeight',
		'outerWidth',
		'pageXOffset',
		'pageYOffset',
		'personalbar.visible',
		'scrollbars.visible',
		'status',
		'statusbar.visible',
		'toolbar.visible',
	];
	ptljs_protocol = ptljs_table_begin;
	for (var i = 0; i < prop.length; i++) setProtocol(prop[i]);
	ptljs_protocol += ptljs_table_end;
	printProtocol(id);
}

/* prints the screen object into a HTML table into the element with the id */
function getProtocolScreen(id) {
	var prop = [
		'screen.availHeight',
		'screen.availLeft',
		'screen.availTop',
		'screen.availWidth',
		'screen.colorDepth',
		'screen.height',
		'screen.pixelDepth',
		'screen.width',
		'screenLeft',
		'screenTop',
		'screenX',
		'screenY'
	];
	ptljs_protocol = ptljs_table_begin;
	for (var i = 0; i < prop.length; i++) setProtocol(prop[i]);
	ptljs_protocol += ptljs_table_end;
	printProtocol(id);
}

/* prints the performance object into a HTML table into the element with the id */
function getProtocolPerformance(id) {
	var prop = [
		'performance.mark("test_mark")',
		'performance.measure("test_mark")',
		'performance.clearMarks("test_mark")',
		'performance.getEntriesByType("mark")',
		'performance.getEntriesByType("measure")',
		'performance.getEntriesByName("test_mark")',
		'performance.now()',
		'performance.toJSON()',
		'performance.memory.jsHeapSizeLimit',
		'performance.memory.totalJSHeapSize',
		'performance.memory.usedJSHeapSize',
		'performance.navigation.redirectCount',
		'performance.navigation.type',
		'performance.timing.connectEnd',
		'performance.timing.connectStart',
		'performance.timing.domainLookupEnd',
		'performance.timing.domainLookupStart',
		'performance.timing.domComplete',
		'performance.timing.domContentLoadedEventEnd',
		'performance.timing.domContentLoadedEventStart',
		'performance.timing.domInteractive',
		'performance.timing.domLoading',
		'performance.timing.fetchStart',
		'performance.timing.loadEventEnd',
		'performance.timing.loadEventStart',
		'performance.timing.msFirstPaint',
		'performance.timing.navigationStart',
		'performance.timing.redirectEnd',
		'performance.timing.redirectStart',
		'performance.timing.requestStart',
		'performance.timing.responseEnd',
		'performance.timing.responseStart',
		'performance.timing.secureConnectionStart',
		'performance.timing.unloadEventEnd',
		'performance.timing.unloadEventStart'
	];
	ptljs_protocol = ptljs_table_begin;
	for (var i = 0; i < prop.length; i++) setProtocol(prop[i]);
	ptljs_protocol += ptljs_table_end;
	printProtocol(id);
}

/* prints navigator.plugins into as HTML table into the element with the id */
function getProtocolPlugin(id) {
	ptljs_protocol = '<div style="overflow:auto"><div class="table"><table><thead><tr><th>#</th><th>name</th><th>description</th><th>filename</th><th>length (# MIME)</th></tr></thead><tbody>';
	for (var i = 0; i < navigator.plugins.length; i++)
	{
		ptljs_protocol += '<tr style="font-family:Consolas,monospace"><td class="counter">' + i + '</td><td><samp>' + navigator.plugins[i].name + '</samp></td><td><samp>' + navigator.plugins[i].description + '</samp></td><td><samp>' + navigator.plugins[i].filename + '</samp></td><td><samp>' + navigator.plugins[i].length + '</samp></td></tr>';
	}
	ptljs_protocol += ptljs_table_end;
	printProtocol(id);
}

/* prints navigator.mimeTypes into as HTML table into the element with the id */
function getProtocolMIME(id) {
	ptljs_protocol = '<div style="overflow:auto"><div class="table"><table><thead><tr><th>#</th><th>type</th><th>description</th><th>suffixes</th><th>enabledPlugin</th></tr></thead><tbody>';
	for (var i = 0; i < navigator.mimeTypes.length; i++)
	{
		ptljs_protocol += '<tr style="font-family:Consolas,monospace"><td class="counter">' + i + '</td><td><samp>' + navigator.mimeTypes[i].type + '</samp></td><td><samp>' + navigator.mimeTypes[i].description + '</samp></td><td><samp>' + navigator.mimeTypes[i].suffixes + '</samp></td><td><samp>' + navigator.mimeTypes[i].enabledPlugin + '</samp></td></tr>';
	}
	ptljs_protocol += ptljs_table_end;
	printProtocol(id);
}

/* write code and what it returns into a table row */
function setProtocol(code) {
	try {
		var s = '';
		var expression = 'return ' + code;
		var result = new Function(expression)();
		eval(code);
		ptljs_protocol += '<tr><td style="font-family:Consolas,monospace"><code class="language-javascript">' + code + '</code></td><td  style="font-family:Consolas,monospace"><samp>' + (s !== '' ? s : result) + '</samp></td></tr>';
	} 
	catch(ex) {
		ptljs_protocol += '<tr><td style="font-family:Consolas,monospace"><code class="language-javascript">' + code + '</code></td><td  style="font-family:Consolas,monospace"><samp style="color:red">' + ex + '</samp></td></tr>';
	}	
}

/* print protocol */
function printProtocol(id) {
	document.getElementById(id).innerHTML = ptljs_protocol;
}