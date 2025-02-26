let input=document.querySelector(".input");
let listcontainer=document.querySelector(".list-container");

function addtask(){
    if(input.value===''){
        alert("Nigga enter task first");
    }
    else{
        let li=document.createElement("li");
        li.innerText=input.value;
        listcontainer.appendChild(li);
        input.value='';
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
        listcontainer.scrollTo({top:listcontainer.scrollHeight,behavior:"smooth"})
    }
}
input.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    addtask();
  }
})
listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showData();