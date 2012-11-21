window.onerror = function(message, url, line) {
	redirect("error",message,url,line);
}

function redirect(type, message, url, line) {
	var i = new Image();
	var outmessage = "console message: "+message;
	if (type == "error") {
		outmessage = message + "<br>Url: " + url + "<br>Line: " + line;
	}
	if (type == "throw") {
		outmessage ="Object threw error: "+ message + "<br>Url: " + url;
	}
	i.src = 'http://localhost:8888/console?type='+type+'&message=' + escape(outmessage);
	//alert(message);
}

console = {
	log: function(message) {
		redirect("console",message,window.location,"");
	}
}

function log(message) {
		redirect("console",message,window.location,"");
}

function myError(msg, file, line){
	this.message = msg;
	this.fileName = file;
	this.lineNumber = line;
	redirect("throw",this.message,window.location,"");
}

var origError = Error;
Error = myError;
myError.prototype = origError;
myError.prototype.constructor = origError;