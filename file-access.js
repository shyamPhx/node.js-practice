

// read
const fs= require('fs');
fs.readFile("./welcome.txt", "utf-8", function(err, content) {
        console.log(content);
})

// write
const quote= "Iam The One who KNOCKS";

fs.writeFile("./bb.txt", quote , function(err) {
    console.log("Completed writing");
});

//update a quote
const quote2 = "\nSAY MY NAME";

fs.appendFile("./bb.txt", quote2 , function(err) {
    console.log("Added to the file!!");
});


// remove or delete

// fs.unlink("./backups/good.js",function(err) {
//     console.log("file removed!!!");
// });

//creating multiple file by using loops:

const textData= "HAVE FUN FOLKS";

for (let i = 1; i<= 10; i++) {

    fs.writeFile(`./backups/text-${i}`, textData , function(err) {
        console.log("Completed writing!!!", i);
    });
    
}

// fs.writeFileSync - to get files in order.



// fs.readdir("./backups",function(err,files){
//     console.log(files);
// });



// deleteing 10 files in backups:

// for (let i = 1; i<= 10; i++) {

//     fs.unlink(`./backups/text-${i}` , function(err) {
//         console.log("removed all files!!!", i);
//     });
    
// }



// deleting all files in backups:

// function removeFile(file) {
//     fs.unlink(`./backups/${file}`, function (err) {
//         console.log("removed all files!!!", file);
//     });
// }

// fs.readdir("./backups",function(err,files){
//     console.log(files);
//    files.forEach((file) =>  removeFile(file));
// });