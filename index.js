var add = document.getElementById("addToDo");
var input = document.getElementById("inputField");
var toDoContainer = document.getElementById("toDoContainer");
add.addEventListener('click', addItem);
input.addEventListener('keypress', function(e){
  if(e.key==="Enter"){
    addItem()
  }
})

function addItem(e){
  
  if(input.value===''){
    // alert('Enter some text to add into todo list')
    input.setAttribute('placeholder','First enter something GURU...')
    
  }
  else{
    input.removeAttribute('placeholder','Enter something ra nayana')
    input.setAttribute('placeholder','Enter things to do... ')
  //  save();
   const Item_value = input.value;

   const item= document.createElement('div');
   item.classList.add('item');

   const item_content = document.createElement('div');
   item_content.classList.add('content')
   item.appendChild(item_content);

   
   const input_item = document.createElement('input');
   let inputcounter = 1;
   input_item.classList.add('text');
   input_item.type = 'text';
   input_item.id = `input-${inputcounter}`;
   input_item.name = `input-${inputcounter}`
   input_item.value = Item_value;
   input_item.setAttribute('readonly','readonly');
   input_item.addEventListener('dblclick', function(){
    input_item.style.textDecoration = "line-through"
   })
  //  inputcounter++;
   item_content.appendChild(input_item);
   

   const item_action = document.createElement('div')
   item_action.classList.add('actions')

   const edit_btn = document.createElement('button');
   edit_btn.classList.add('edit', 'btn', 'btn-success');
   edit_btn.type = "button";
   edit_btn.innerText = 'Edit';

   const delete_btn = document.createElement('button');
   delete_btn.classList.add('delete', 'btn', 'btn-danger','bi', 'bi-trash');
   
   item_action.appendChild(edit_btn);
   item_action.appendChild(delete_btn);

   item.appendChild(item_action);

   toDoContainer.appendChild(item);

  //  clearing input field after, once it added
  
  input.value="";
  

  //  applying functions for edit and delete buttons
  
   edit_btn.addEventListener('click',(e)=>{
     if(edit_btn.innerText.toLowerCase()=="edit"){
      edit_btn.innerText = "save";
      input_item.removeAttribute('readonly');
      input_item.focus();
     }
     else{
      edit_btn.innerText = "Edit";
      input_item.setAttribute('readonly','readonly')
     }
   })

    delete_btn.addEventListener('click',()=>{
      toDoContainer.removeChild(item);

    })
  }
  
  }

  // saving data in localStorage
  // function save(){
  //   localStorage.setItem('toDolistData',toDoContainer.innerHTML)
  // }

  // function showtasks(){
  //   toDoContainer.innerHTML = localStorage.getItem('toDolistData')
  // }

  // showtasks()