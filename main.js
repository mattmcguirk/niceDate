const niceDate = require('./niceDate.js')

myNiceDate = new niceDate; 
setTimeout(function() { 
	console.log(myNiceDate.formattedDate())
}, 2000);