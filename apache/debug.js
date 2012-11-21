window.onerror = function(message, url, line) {
	redirect("error",message,url,line);
}

function redirect(type, message, url, line) {
	var i = new Image();
	var outmessage = "Message: "+message;
	if (type == "error") {
	outmessage = "Message: "+message + "<br>Url: " + url + "<br>Line: " + line;
	}
	i.src = 'http://localhost:8888/console?type='+type+'&message=' + escape(outmessage);
}

console = { log: function(message) {
		redirect("console",message,window.location,"");
	}
}

function log(message) {
	redirect("console",message,window.location,"");
}