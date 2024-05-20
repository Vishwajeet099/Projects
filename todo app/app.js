let inpt= document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

inpt.addEventListener("keydown",function(event){
    if(event.code=="Enter"){
        addTask();
    }
})

btn.addEventListener("click",addTask);

function addTask(){
    let delBtn = document.createElement("button");
    delBtn.innerText= "X";
    delBtn.classList.add("delete");

    let li = document.createElement("li");
    li.innerText = inpt.value;
    li.appendChild(delBtn);
    ul.appendChild(li);
    inpt.value="";
}

ul.addEventListener("click",function(event){
    if( event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
});