const fs=require("fs");
const http=require("http");
const axios=require("axios");
const url="https://gist.githubusercontent.com/josejbocanegra/c6c2c82a091b880d0f6062b0a90cce88/raw/9ed13fd53a144528568d1187c1d34073b36101fd/categories.json" ;



http.createServer((req,res)=>{
    axios.get(url).then(response=>{
        
        fs.writeFile("index.html",(response.data),()=>{});
        fs.readFile("index.html",(err,data)=>{
            res.write(data.toString());
            res.end();
        });
    }).catch(e=>{console.log(e)});  
}).listen(8080);