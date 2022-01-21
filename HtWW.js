// what is HTTP?
// HTTP is a protocol that defines how browsers communicate with the server

//what is a URL
//URL is a string that tells the browser what hostname to go to and get the information we want to see

// what is DNS?
//DNS servers are basically a phonebook for the internet. they take a hostname and translate it into an IP address

// what is a query string?
// provides 'extra information' to the browser. when you search for something, the website interprets you search as a query string. Usually they start with 'q=' but they change depending on server architecture

//What are two HTTP verbs and how are they different?
// HTTP verbs are things like GET, POST, PUT, DELETE... they make requests. GET requests have no side effects. POST requests change data on the server

// What is an HTTP request?
// HTTP requests ask the browser to go get something and show it to use or to do something to the data

// What is an HTTP response?
// there are many different HTTP responses. some of the most common are 200, 301, or 404... 200 means good, 301 redirects with a new URL and 404 means the page was not found

//What is an HTTP header? Give a couple examples of request and response headers you have seen.
// HTTP headers provide information to the server about how to process information. A common one tells it what language to use, for American English the header would be 'en-US'

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// Your browser will first check the cache to see if it already has the IP adress on file
// if it does not have the info, the ISP's DNS will make a DNS query to find the IP address of the the server that hosts google.com
// the browser then initiates connection to the server
// then the browser sends an HTTP GET request
// the server will send back an HTTP response with 2xx indicating success, 3xx being a redirect of some kind, 4xx being an error on the client side, and 5xx being an error on the server side
// if the HTTP response is successful, the browser will display the received HTML content

// Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
// What did the pirate say on his 80th birthday? Aye Matey!
// Why couldn't the kid see the pirate movie? Because it was rated arrr!
// What does a pirate pay for his corn? A buccaneer!
// Why do pirates not know the alphabet? They always get stuck at "C".
// Why are pirates called pirates? Because they arrr!

// Use dig to find what the IP address is for icanhazdadjoke.com
// 172.17.128.1

// Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
// localhost:8000


