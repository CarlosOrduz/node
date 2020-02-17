const fs=require("fs");
const http=require("http");
const axios=require("axios");
const url="https://gist.githubusercontent.com/josejbocanegra/c6c2c82a091b880d0f6062b0a90cce88/raw/9ed13fd53a144528568d1187c1d34073b36101fd/categories.json" ;



http.createServer((req,res)=>{
    
    axios.get(url).then(response=>{
        
       // fs.writeFile("index.html",(response.data),()=>{});
        fs.readFile("index.html",(err,data)=>{
            let texto =data.toString();
            let reemplazo="";
            let i=1;
            response.data.forEach(element=>{
                reemplazo+=`<div class="card">
                <div class="card-header" id="heading${i}">
                 <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                      ${element.name}
                    </button>
                  </h2>
                </div>
                <div class="card-deck">`;
                element.products.forEach(element=>{
                    reemplazo+= `<div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">`+
                    `<div class="card" style="width: 18rem;">
                    <img src="${element.image}" class="card-img-top" alt="${element.name}">
                    <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text">${element.description}</p>
                      <h5 class="card-title">${element.price}</h5>
                      <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                  </div>
                  </div>`;
                })
            reemplazo+=`</div>
            </div>`;
              
                i++;
            });
            
            res.write(texto.replace('{{replacer}}',reemplazo));
            res.end();
        });
    }).catch(e=>{console.log(e)});  
}).listen(8080);