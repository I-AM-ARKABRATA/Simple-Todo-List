let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let imp=document.querySelector("input");
 
btn.addEventListener("click",function(){
   let item=document.createElement("li");
   item.innerText=imp.value;

   let delbtn =document.createElement("button");
   delbtn.innerText="delete";
   delbtn.classList.add("delete");

   item.appendChild(delbtn);
    ul.appendChild(item);
    imp.value="";
})

ul.addEventListener("click",function (event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
})

