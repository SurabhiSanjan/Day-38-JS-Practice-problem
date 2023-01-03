let head = 0;
let tail = 0;
while(head<11 || tail<11){
    let number = Math.floor(Math.random()*2);
    if(number==0 ){

      head++; 
    }else{
    
        tail++;
    }    
}
console.log(`Heads : ${head} and Tails : ${tail}`);