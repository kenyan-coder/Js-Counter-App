let count = 0;
let countEl= document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function incrementCount(){
    // console.log("clicked")
    count +=1;
    countEl.innerText=count;
}
// 1. Create a function, save(), which logs out the count when it's called
function save(){
    let countstr = count + " - "
    saveEl.innerText +=countstr;
    console.log(countstr)
}
