var taskslist=document.getElementsByTagName("li");
for(var i=0;i<taskslist.length;i++){
    var span=document.createElement("span")
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    taskslist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
},
false);

function newElement() {
    
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("tasklist").appendChild(li);
    }
    document.getElementById("taskinput").value = "";
  
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

 function clearall(){
    var close = document.getElementsByClassName("close");
    if(close.length>0){
       document.querySelector(".r").innerHTML="";
    }else{
        alert("Already Reset!");
    }
 }