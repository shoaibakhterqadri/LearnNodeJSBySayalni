const http=require('http');
const fs=require('fs');
const path=require('path')

const filePath=path.join(process.cwd(),"shoaib.txt")

const server=http.createServer((req,res)=>{
      if(req.url==="/"){
res.write("SHoaib akhter");
res.end();
      }
      else if(req.url==="/form"){
res.setHeader("Content-Type","text/html");

            res.write("<form action='/submit' method='POST'> <input name='data' /> <button>Submit</button> </form>");
            res.end();
                  }
                  else if(req.url==="/submit"){
                        let data="";
                        req.on("data",chunk=>data+=chunk);
                        req.on("end",()=>{

                              fs.readFile(filePath,'utf-8',(err,fileData)=>{
                                    const newData=fileData+"\n"+data;
                                    fs.writeFile(filePath,newData,()=>{
                                          res.write("Data received");
                                          res.end();
                                    })
                              })
                              
                           
                              
                        })

                        
                              }
      else{
            res.write("404");
res.end();
      }
});

server.listen(3000)










// const http=require("http");
// const fs=require("fs");
// const path=require("path");

// const filePath=path.join(process.cwd(),"data.txt");

// const server=http.createServer((req,res)=>{
//       if(req.url==="/form"){
//             res.setHeader("Content-Type","text/html")
//             res.write("<form action='/submit' method='POST' > <input name='data' /> <button>Submit</button> </form>");
//             res.end();
//       }
//       else if(req.url==="/submit"){
//             let data="";
//             req.on("data",chunk=>data+=chunk);
//             req.on("end",()=>{
//                   fs.readFile(filePath,"utf8",(err,fileData)=>{
//                         const newData=fileData+"\n"+data;
//                         fs.writeFile(filePath, data,()=>{
//                               res.write("Data received");
//                               res.end();
//                         });

//                   })
//                   console.log(data);
                  
//             });
           
//       }
//       else{
//             res.write("404 - Not Found");
//             res.end();
//       }
// })
// server.listen(3000)
