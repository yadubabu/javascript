//EXAMINE the DOCUMENT OBJECT

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);

//.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[15]);
//document.all[15].textContent="User Name";
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
//console.log(document.forms[0]);
//GETELEMENT By ID
//console.log(document.getElementById("title"));
// var headertitle = document.getElementById("head");
// console.log(document.getElementById("title"));
//headertitle.textContent="hello";
//headertitle.innerText="GoodBye";
//var head=document.getElementById("head");
//console.log(head.innerText);

//headertitle.innerHTML="<h3>Hello</h3>";
//headertitle.style.borderBottom="solid 3px #000";

//GETELEMENTS By Class name
// var test=document.getElementsByClassName("list-group-items");
// console.log(test);
// console.log(test[2]);
// test[1].textContent='hello';
// test[0].style.fontweight="bold";

// //GIVES error
// test.style.backgroundcolor='#f4f4f4';

// for(var i=0;i<test.length;i++)
// {
//  test[i].style.backgroundColor='#f4f4f4';
// }

//GETElements By TAG names
//  var li=document.getElementsByTagName("li");
//  console.log(li);
//  console.log(li[2]);
//  li[1].textContent="hello";
//  li[0].style.fontWeight="bold";
//  li[0].style.backgroundColor="#f4f4f4";

// //GIVES error
// //li.style.backgroundColor='#f4f4f4';

//  for(var i=0;i<li.length;i++)
//  {
//      li[i].style.backgroundColor='pink';

// }

// //Query Selector

// var header=document.querySelector('header');
// header.style.backgroundColor='solid 4px #ccc';


// var input=document.querySelector('input');
// input.value='Hello World';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item=document.querySelector('.list-item-group');
// console.log(item);
// item.style.color='red';

// var lastitem=document.querySelector('.list-item-group:last-child');
// lastitem.style.color="blue";

// var seconditem=document.querySelector('.list-item-group:nthchild(2)');

// seconditem.style.color="coral";

//QUERY SELECTOR ALL
// var titles=document.querySelectorAll('title');
// console.log(titles);

// titles[0].textContent="Hello";

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor="#f4f4f4";
//     even[i].style.backgroundColor='#ccc';

// }

//TRAVERSING the DOM
//var itemlist=document.querySelector('.items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);
//parent
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

//ChildNodes
//console.log(itemlist.childNodes);
//var itemlists = document.querySelector('#group-items');
// console.log(itemlists.children);
// console.log(itemlists.children[1]);
// itemlists.children[1].style.backgroundColor='yellow';

// //FirstChild
// // console.log(itemlists.firstChild);
// // //firstElement child
// // console.log(itemlists.firstElementChild);
// // itemlists.firstElementChild.textContent="hello";

// console.log(itemlists.lastChild);
// //LastElement child
// console.log(itemlists.lastElementChild);
// itemlists.lastElementChild.textContent="hello";

//Nextsibling
// console.log(itemlists.nextSibling);
// //nextElement Sibling
// console.log(itemlists.nextElementSibling);

//Previous Sibling
// console.log(itemlists.previousSibling);
// //PreviousElementSibling
// itemlists.previousElementSibling.style.color='green';

//Create a Div
// var newdiv=document.createElement('div');
// var newh2=document.createElement('h2');

// //Add class
// newdiv.className='hello';


// //Add id
// newdiv.id="hello1";

// //Add Attr
// newdiv.setAttribute('title','Hello Div');

// //Create text Node
// var newdivtext=document.createTextNode('Hello World');

// newdiv.appendChild(newdivtext);

// var container = document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newdivtext);
// console.log(newdiv);

// newdiv.style.fontSize='10px';

// container.insertBefore(newdiv,h1);

//var button=document.getElementById('button').addEventListener('click',clickbutton);

//Events
// function clickbutton(e){
    // // console.log('Button clicked');
    // document.getElementById('head').textContent="Changed";
    // document.querySelector('header').style.backgroundColor='green';
    //console.log(e);
    // console.log(e.target);

    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output=document.getElementById('output');

    // output.innerHTML='<h3>'+e.target.id+'</h3>';
    // console.log(e.type);
    
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
//}
// var button=document.getElementById('button');
//var box=document.getElementById('box1');

//button.addEventListener('click',runevent);
//button.addEventListener('dblclick',runevent);
//button.addEventListener('mousedown',runevent);
//button.addEventListener('mouseup',runevent);
//box.addEventListener('mouseenter',runevent);
// box.addEventListener('mouseleave',runevent);

//box.addEventListener('mouseover',runevent);
// box.addEventListener('mouseout',runevent);
 //box.addEventListener('mousemove',runevent);
var iteminput=document.querySelector('input[type="text"]');
 var form=document.querySelector("form");
 var select=document.querySelector('select');

// iteminput.addEventListener('keydown',runevent);
// iteminput.addEventListener('keyup',runevent);
// iteminput.addEventListener('keypress',runevent);
// iteminput.addEventListener('focus',runevent);
// iteminput.addEventListener('blur',runevent);
// iteminput.addEventListener('cut',runevent);
// iteminput.addEventListener('paste',runevent);
// iteminput.addEventListener('input',runevent);

// select.addEventListener('change',runevent);
// select.addEventListener('input',runevent);

select.addEventListener('submit',runevent);

function runevent(e)
{   
    e.preventDefault();
    console.log('EVENT TYPE:' + e.type);

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML='<h4>'+e.target.value+'</h4>';
//box.innerHTML='<h3>Hai'+e.offsetX+'</h3>';
// box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
//  document.body.style.backgroundColor="rgb(" + e.offsetX + "," + e.offsetY + ")";
}
