var newElement=document.createElement("h2");
var newText=document.createTextNode("This is just text");
var newComment=document.createComment("This is just comment");
newElement.appendChild(newText);
// document.getElementById("test").appendChild(newElement);
// document.getElementById("test").appendChild(newComment);


var  target=document.getElementById("test");
target.insertBefore(newElement,target.childNodes[2]);


console.log(newElement);