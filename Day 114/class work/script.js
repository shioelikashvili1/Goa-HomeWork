require("http") require("fs")
if(req.url
//
http.createServer((req, res) => {
staus code
res.writeHead (200, {"Content-Type": "text/html"}} let html = fs.readFileSync("./index.html", "utf-8") res.end(html)

const http =

const fs
=
const server

"/"){
})

const portNumber= 3005
console.log(http)

server.listen(portNumber)
console.log(`Server running on port http://localhost:${portNumber}`)