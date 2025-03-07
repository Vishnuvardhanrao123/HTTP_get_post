const http=require("http")
const fs=require("fs")
const log=console.log
const server=http.createServer((req,res)=>{
    if(req.url=="/" && req.method=="GET"){
        fs.readFile("./data.json","utf-8",(err,data)=>{
            if(err) return err;
            else res.end( data)
        })
    }
    else if(req.url=="/" && req.method=="POST"){
        let data=""
        req.on("data",(chunk)=>{
            
            data=data+chunk.toString()
            
        })
        req.on("end",()=>{
            const filedata=JSON.parse(fs.readFileSync("data.json","utf8"))
            console.log(typeof filedata)
           filedata.push(JSON.parse(data))
           const updated=fs.writeFileSync("data.json",JSON.stringify(filedata))
            console.log(filedata)
            
            res.end(updated)
        })
   }
})
server.listen(4000,()=>{
    log(`server runing  http://localhost:4000`)
})