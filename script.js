const div = document.createElement('div');
console.log(div); //To create a div element using just javascript
div.className = "main"; //To add class to element made using javascript
div.id = "ID" //To add id to element made using javascript
div.setAttribute("title","generated title"); //To add additional attributes to element made using javascript syntax is div.setAttribute("key","value");
div.style.backgroundColor = "green";//To add styling to created element using javascript
div.style.padding = "12px";//To add styling to created element using javascript
div.style.innerText = "Hii, My name is Harshal" //To add content in the web page
const addText = document.createTextNode("Hii, I am 27 years old") //Alternate way to add content in this node is created
div.appendChild(addText);//Created node is added to web page

//Upto this div element is in memory of the browser now to attach it on a web page
document.body.appendChild(div); //Created element is displayed on web page

function addLanguage(language){
    const lang = document.createElement("li"); //Created new element
    lang.innerHTML = `${language}`;//Added content
    document.querySelector('.language').appendChild(lang);//Appended/added it to parent element
}
addLanguage("Python");//function call
addLanguage("Java");//function call
/* In above method entire tree is traversed every time we make a function call to add element at the bottom it's optimized version can be */

function optimizedWay(language){
    const lang = document.createElement('li');//Created new element
    lang.appendChild(document.createTextNode(language));//Node is created where language is added at bottom
    document.querySelector('.language').appendChild(lang);//Added language is attached to web page
}
optimizedWay("Ruby on rails");
optimizedWay("TypeScript");

//Edit elements
const secondLang = document.querySelector("li:nth-child(2)");//Accessing the element
//secondLang.innerHTML = "Mojo";
const newli = document.createElement('li');//Created new node
newli.textContent = "Mojo";//Added content to new node
secondLang.replaceWith(newli);//Replaced previous element and attached to web page

//Edit Element
const firstlang = document.querySelector("li:nth-child(1");//Accessing the element
firstlang.outerHTML = "<li>Golang</li>";
/*const li = document.createElement('li');
li.textContent = "Golang";
firstlang.replaceWith(li);
*/


//Remove Element
const lastlang = document.querySelector('li:last-child');
lastlang.remove();