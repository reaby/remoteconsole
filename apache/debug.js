window.onerror = function(message, url, line) {
	redirect("error",message,url,line);
}

function redirect(type, message, url, line) {
	var i = new Image();
	var outmessage = "";

	if (typeof message == "object" || typeof message == "array") {
			outmessage =JSON.stringify(message,undefined," ");
	} else {
		outmessage = message;
	}

	if (type == "error") {
		outmessage = message + "¤" + url + "¤" + line;
	}
	if (type == "throw") {
		outmessage =message + "¤" + url;
	}
	i.src = 'http://localhost:8888/console?type='+type+'&message=' + escape(outmessage);
	//alert(message);
}

/*console = {
	log: function(message) {
		redirect("console",message,window.location,"");
	}
}*/

function log(message) {
		redirect("console",message,window.location,"");
}

function myError(msg, file, line){
	this.message = msg;
	this.fileName = file;
	this.lineNumber = line;
	var loc = window.location;
	var outline = "";
	if (typeof file != "undefined") loc= file;
	if (typeof line != "undefined") outline = line;
	redirect("throw",msg,loc,outline);
}

var origError = Error;
Error = myError;
myError.prototype = origError;
myError.prototype.constructor = origError;
