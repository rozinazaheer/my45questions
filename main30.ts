let userNames:string[]=["admin","ali","ahmed","hammad","shahbaz"];
userNames.forEach(username=>{
    if(username === "admin"){
        console.log("hello",username,"would you like to see a status report?");
        
    }else{
        console.log("hello",username,"thank you for logging in again.");
        
    }
    
})