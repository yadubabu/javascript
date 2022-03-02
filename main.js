//alert("Hello World");
//console.log("Hai how r u");
//console.error('This is error');
//console.warn('This is warning');
//var,let,const
//const age=30;
//age=31;
//console.log(age);
//strings,numbers,boolean,null,undefined

const name='john';
const age=30;
const isCool=true;
const rating=4.5;
const x=null;
const y=undefined;
let z;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
//concatenating
console.log("my name is" + name + "my age is" + age)
//Template String
console.log('My name is ${name} and I am ${age}');
const hello='my name is ${name} and I am ${age}';
console.log(hello);
const n='technology,computer,it,code';
const s="hello world";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5))
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
console.log(n.split(','));
//Arrays-varibles that hold multiple values
const numbers=new Array(1,2,3,4,5);
console.log(numbers);
const fruits=['apples','oranges','pears'];
fruits[3]='mangos';
fruits.push('bananas');
fruits.unshift('jellies');
fruits.pop();
console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

const person={
    firstname:'john',
    lastname:'doe',
    agge:30,
    hobbies:['music','movies','sports'],
    address:{street:'50 main st',city:'Boston',state:'MA' }
}
console.log(person);
console.log(person.firstname,person.lastname);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstname,lastname,address:{city}}=person;
console.log(firstname);
console.log(city);

person.email='mohini548@gmail.com';
console.log(person);

const todos=[
    {
    id : 1,
    text:'Take out trash',
    isCompleted:true
    },{
        id : 2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id : 3,
        text:'Dentist appt',
        isCompleted:false
    }
            ]   
 console.log(todos[1].text);

 const todoJSON=JSON.stringify(todos);
 console.log(todoJSON);

 //for
 for(let i=0;i<=10;i++)
 {
     console.log('For loop Number:'+i);
 }
 //while loop
 let i=0;
 while(i<10)
 {
     console.log(i);
     i++;
 }
 for(let i=0;i<todos.length;i++)
 {
     console.log(todos[i].text);
 }
 for(let todo of todos)
 {
     console.log(todo.id);
 }
 // forEach,map,filter
// todos.forEach(function(todo){
  //   console.log(todo.text);
 //});
 const todoText=todos.map(function(todo){
     return todo.text;
});
console.log(todoText);
const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

const a=20;
const b=10;
if(a==10)
{
    console.log('A is 10');
}else if(a>10)
{
    console.log('A is greater than 10');
}else
{
    console.log('A is less than 10');
}
if(a>5 || b>10)
    {
        console.log('a is more than 5 or b is more than 10');
    }
    if(a>5 && b>=10)
    {
        console.log('a is more than 5 and b is more than or equal to 10');
    }

const c=11;
const color=c>10 ? 'red':'blue';
console.log(color);
 const col='green';
switch(col){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is Not red or blue');
        break;
            }
function addNum(num1=1,num2=1)
{
    return num1+num2;
}
console.log(addNum(5,9));
//addNum();
//onst addnum=(n1,n2)=>n1+n2;
//console.log(addnum(5,5));
//const addnum=(n1,n2)=>{return n1+n2;}
//console.log(addnum(5,5));
const addnum=n1=>n1+7;
console.log(addnum(5));
//Construction function
function Person(firstname,lastname,dob)
{
    this.firstname=firstname;
    this.lastname=lastname;
    //this.dob=dob;
    this.dob=new Date(dob);
    this.getBirthYear=function(){
        return this.dob.getFullYear();
    
    }
    this.getFullName=function(){
        return this.firstname;
        

    }
}

//Initiate Object
const persons1=new Person('john','doe','8-8-1972');
console.log(persons1.firstname);
const persons2=new Person('Mary','smith','4-5-1968');
console.log(persons2.dob);
console.log(persons2.dob.getFullYear());

console.log(persons1.getBirthYear());
console.log(persons1.getFullName());
//class
class Person1{ 
    constructor (firstname,lastname,dob)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=dob;
}
getBirthYear()
{
    return this.dob.getFullYear();
}
getFullName()
{
    return $(this.firstname) + $(this.lastname) ;
}
}
console.log(window);
//alert(1);
//Single element
//console.log(document.getElementById('my-form'));
const form=document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//Multiple element
//console.log(document.querySelectorAll('.items'));
console.log(document.getElementsByClassName('items'));
console.log(document.getElementsByTagName('li'));
const items=document.querySelectorAll('item');

//items.forEach((item)=>console.log(item));
const ul=document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();

ul.firstElementChild.textContent="hello";
ul.children[1].innerText="Brad";
ul.lastElementChild.innerHTML="<h1>Hello</h1>";

const btn=document.querySelector('.btn');
//btn.style.background='red';
//btn.style.color='black';
//btn.addEventListener('click',(e)=>{
  //  console.log('click');
    btn.addEventListener('mouseover',(e)=>{
       e.preventDefault();
     //  console.log(e.target);
     document.querySelector('#my-form').style.backgroundname='#ccc';
     document.querySelector('body').classList.add('bg-dark');
     document.querySelector('items').lastElementChild.innerHTML='<h1>Hello</h1>';
});
const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();
//    console.log(nameInput);
  //  console.log(nameInput.value);
  if(nameInput.value ==='' || emailInput.value ===''){
     // alert('Please enter fields');
      msg.classList.add('error');
      msg.innerHTML="Please enter all fields";
      setTimeout(()=>msg.remove(),3000);
  } else{
const li=document.createElement('li');
li.appendChild(document.createTextNode('${nameInput.value}:${emailInput.value}'));
      //console.log('Success');
 userList.appendChild(li);
 //clear fields
 nameInput='';
 emailInput='';
    }

}