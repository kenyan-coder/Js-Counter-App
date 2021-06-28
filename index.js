let count = 0;
let countBtn= document.getElementById("count-el");

function incrementCount(){
    // console.log("clicked")
    count = count+1;
    countBtn.innerText=count;
}
incrementCount();