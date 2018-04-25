var fs = require('fs');

fs.writeFile("hello.txt","This is hello", function(err){
    if(err){
        console.log(err);
    }
});

fs.writeFileSync("hello1.txt","fdfkdjfkdf");


fs.readFile("hello.txt",function(err, data){
    if(!err){
        console.log(data.toString());
    }else{
        console.log(err);
    }
});
