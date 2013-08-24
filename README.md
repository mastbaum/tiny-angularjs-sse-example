A Tiny AngularJS + SSE Example
==============================
Sending Server-Sent Events events into an AngularJS application in 20 lines of node.js server, 15 lines of client JS, and 5 lines of HTML.

This is heavily based on, but pared down to the essence of, the examples at:

* [Writing an AngularJS App with Socket.IO](http://www.html5rocks.com/en/tutorials/frameworks/angular-websockets)
* [Stream Updates with Server-Sent Events](http://www.html5rocks.com/en/tutorials/eventsource/basics)
* [@cheeyeo's Server-Sent-Events-with-Node-JS](https://github.com/cheeyeo/Server-Sent-Events-with-Node-JS/blob/master/server.js)
* [AngularJS.org](http://www.angularjs.org)

Credit especially to @btford for the factory pattern that makes it all work.

Running
-------
Start the node.js server:

    $ node server.js

Go to `http://localhost:8080` in your browser.

