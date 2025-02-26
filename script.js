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

    }
}
input.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    addtask();
  }
})