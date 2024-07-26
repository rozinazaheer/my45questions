let currentUsers : string[]=["admin","ali","ahmed","hammad","shahbaz"];
let newUsers:string[]=["admin","furkan","naveed","hammad","shahbaz"];

for (let new_users of newUsers){
const lowercase_new_users=new_users.toLowerCase();

if (currentUsers.map(user => user.toLowerCase()).includes(lowercase_new_users)){
    console.log((`the username ${new_users} is not avalable`));
    
}else{
    console.log(`the username ${new_users} is available)`);
    
}
    
}