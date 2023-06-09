
  const fs=require('fs');
  const path=require('path');
 const dirpath=path.join(__dirname,'files');
 //for(i=0;i<5;i++){
 // fs.writeFileSync(dirpath+"/data.txt"+i+".txt","It is a simple text file");
 // fs.writeFileSync(`data${i}.txt`,"It is a simple text file");
 //}
 fs.readdir(dirpath,(err,files)=>{
  // console.warn(files);
  files.forEach((item)=>{
    console.log("file name is",item)


  })

 })




