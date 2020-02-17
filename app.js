const fs=require("fs");
const http=require("http");
/*fs.readFile("app.js",(err,data)=>{
    console.log(data.toString());
});

fs.readdir("./",(err,files)=>{
    files.forEach(file=>{
        fs.readFile(file,(err,data)=>{
            console.log(data.toString()); 
        });
    });
});*/
http.createServer((req,res)=>{
    fs.readFile("app.js",(err,data)=>{
        res.write(data.toString());
        res.end();
    });
}).listen(3000);