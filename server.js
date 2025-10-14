//worked on this with housemates

const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');
const querystring = require('querystring');
const port = 8002;

const server = http.createServer((req, res) =>{
    const page=url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);

    //Routing
    if(page == '/'){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();

        });
    } else if (page =='/style.css'){
        fs.readFile('style.css', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/css'})
            res.write(data);
            res.end();
        })
    } else if (page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    }
   //link client side with server side
    else if(page == '/api'){
        if(params['word']){
            const result= params['word'].split('').reverse().join('');
            res.writeHead(200, {'Content-Type': 'text/text'})
            console.log(result)
            res.end(result);

        }
        
    }else{
        figlet('404!!', function(err, data) {
          if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
          }
          res.write(data);
          res.end();
        });
    }

})

server.listen(port, () =>{
    console.log(`Server is running at ${port}`);
});