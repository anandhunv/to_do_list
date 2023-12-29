//  input-box ,list-container

const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value=== ''){
        alert("must entered someting!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;//add inputed text into "li" variable
        listContainer.appendChild( li);//it tells where the "li" is displayed  ,and shows the li in listContainer
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";//after add one text the input box become old type
    saveData();
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName=== "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN") {

        e.target.parentElement.remove();    
        saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

//to display data when we open again the browser

function showTask(){

    listContainer.innerHTML=localStorage.getItem("data");


}
showTask();