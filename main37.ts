//large shirts: Modify the make- shirt( function so that shirts are large 
//by default with a message that reads i love typescript.

//make of a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.

function make_shirt(size:string ='large', text:string ='I love  typeScript.'){
    console.log(`Creating a ${size} shirt with the message: ${text}`);
    
}
make_shirt();
make_shirt('medium');
make_shirt('small','i love python');

