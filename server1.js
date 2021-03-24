const { isMaster } = require("cluster");
const http = require("http");
const port = 2200;

const server = http.createServer((req, res) => {
   // console.log(req)
const {headers, url, method } = req;
console.log("headers: ");
console.log(headers);
console.log(url);
console.log(method);
    res.end();
});



server.listen(port, ()=>{
    //console.log("Hellooooooooo orire")
console.log(`server is ready to listen to port: ${port}`);

});
/*
type git init
git commit -m "pushfile"
git remote add https://github.com/Horirenitemi/code.git
git remote addorigin  https://github.com/Horirenitemi/code.git
git branch -M Master
git status
git add . */