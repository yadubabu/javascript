var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var  filter=document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addition);
//Delete Event
itemlist.addEventListener('click',removeitem);

//Filter event
filter.addEventListener('keyup',filteritems);

function addition(e){
    e.preventDefault();

    //Get Input Value
    var newitem=document.getElementById('item').value;
    
    //Create new li element
    var li=document.createElement('li');
    //Add class
    li.className="list-group-item";
    //console.log(li);
    //Add text node with Input box
    li.appendChild(document.createTextNode(newitem));

    //Create del button element
    var delbtn=document.createElement('button');
    delbtn.className="btn btn-danger btn-sm float-right delete";
    itemlist.appendChild(li);

    //Append Text Node
    delbtn.appendChild(document.createTextNode('X'))
    li.appendChild(delbtn);
}

// Delete Item

function removeitem(e){
if(e.target.classList.contains('delete'))
    if(confirm("Are you sure ")){
        var li=e.target.parentElement;
        itemlist.removeChild(li);
    }

}
//Filter Items
function filteritems(e){
    //covert text to lowercase
    
    var text= e.target.value.toLowerCase();
//Get lis
    var items=itemlist.getElementsByTagName('li');

   
    //Convert to an array
    Array.from(items).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}