#Very simple remote javascript logger and error debugger
I had troubles to debug windows phone javascript errors when using phonegap. This tries to solve the problem - at least partially.
Future plans is to serve all content using node.js and make the error reporting to look better. Anyway it works for me :)

![UI from revision 3](http://reaby.kapsi.fi/github/console/image1.jpg)

##Socket server
1. Download the latest version by clicking get zip
2. Unpack the .zip-file to directory of your choosing
3. Install node.js
4. to install node.js modules, type: 
	1. npm install express
	2. npm install socket.io

## Apache
I assume you run socket server and apache at same machine.

1. Copy "apache"-folder to your webserver
2. Change all "localhost" to point your socket servers url at debug.js and index.html

## Debugger
1. copy and load "apache/debug.js" to your phonegap/html/whatever project
2. Change all "localhost" to point your socket servers url at debug.js and index.html
3. add line: `<script src="debug.js" />`
4. enjoy remote debugger

## Note
if for some reasons console.log("something"), doesn't work, ie. the method doesn't get overwritten, use log("something") to send log to remote part.
