//unchanged magicians:start with your work from exercise 40. call the funtion 
//make_great()with a copy of the array of magicians' names.becouse  
//the original array will be unchanged.return the new array and store 
//it in a seperate array.call show_magicians()with each array to show  that you have
// one array of the original names and one array with  the creat added to each magician'name.

let  magician : string[] = ['Hurry potter ','Hermione ','Ron Weasley','Albus Dumbledore'];
function copyArray(arr:string[]){
    return [...arr]
}
function make_great(magicianArray:string[]){
    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] ='the great' + magicianArray[i]
    }
}

function show_magicians(magicians:string[]){
    magicians.forEach(Element =>{
        console.log(Element);
        
    })
}

const copyMagicianArray= copyArray(magician)
make_great(copyMagicianArray);
console.log('\n\nthis is my orignal array:');
show_magicians(magician);
console.log('\n\nthis is my modfied copy of the array:');
show_magicians(copyMagicianArray);



