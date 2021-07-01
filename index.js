let count = 0;
let countEl= document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
//Create an increment function for counting;
function incrementCount(){

    count +=1;
    countEl.textContent=count;
}
// 1. Create a function, save(), which logs out the count when it's called
function save(){
    let countstr = count + " - "
    saveEl.textContent +=countstr;
    //Reset the counter to zero after saving;
    count = 0
    countEl.textContent=count
}
