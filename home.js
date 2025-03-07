const http = require('http');
const productdata=require("./product")
const userdata=require("./users")

const server = http.createServer((req, res) => {
    if(req.url === "/" && req.method=="GET"){
        res.write(`<a href="http://localhost:5000/productdata">/products</a>`)
        res.write(`<a href="http://localhost:5000/userdata">/users</a>`)
        res.end("click on any link you will gwty the data")
    }
    else if (req.url === "/productdata" && req.method=="GET") {
       res.end(JSON.stringify(productdata.product));
    } else if (req.url === "/userdata" && req.method=="GET") {
        res.end(JSON.stringify(userdata.users));
    } else {
        res.end(JSON.stringify({ message: "Route Not Found" }));
    }
});


server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
