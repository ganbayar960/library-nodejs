const fs = require('fs');
const http = require('http');
const request = require('request');
const server = http.createServer((req, response)=>{
    const { headers, url, method } = req;
    response.setHeader('content-type', 'text/html');

    if(url === '/'){
        response.statusCode = 200;
        response.write("<h1>Welcome to nodejs</h1>");
        response.write(`<br><br>Login : <a href="/login">click here</a>`);
        response.end();
    }
    else if(url ==='/login'){
        //Login form
        response.statusCode = 200;
        response.write("<h1>Welcome to Login page</h1>");
        response.write(`<form action="/loginCheck" method="POST">`);
        response.write(`<br><input type="text" name="email" />`);
        response.write(`<br><input type="password" name="password" />`);
        response.write(`<br><input type="submit" value="login">`);
        response.write(`</form>`);
        response.end();
    } 
    else if (url === '/loginCheck' && method === 'POST'){
        response.statusCode = 200;
        response.write("<h1>Welcome to checkLogin page</h1>");
        response.end();
    }
    else if (url === '/home'){
        //Jump to home
    } else {
        response.statusCode = 404;
        response.write("<h1>404 Not Found</h1>");
        response.end();
    }
});

server.listen(5000, () => {
    console.log('Http server up on port 5000...');
})

// request('https://nodejs.org/docs/latest-v15.x/api/cluster.json', (error, response, body) => {
//     fs.writeFileSync('./cluster.json', body);
// });
