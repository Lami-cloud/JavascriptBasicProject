let addToDoButton =document.getElementById('addTodo');
let todoContainer=document.getElementById('todoContainer');
let inputText=document.getElementById('inputText');
let clearButton=document.getElementById('clearTodo')

addToDoButton.addEventListener('click',function(){
    let paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML=inputText.value;
    inputText.value='';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through';
})
paragraph.addEventListener('dblclick', function(){
    todoContainer.removeChild(paragraph);
})

clearTodo.addEventListener('click', function(){
    paragraph.remove();
})
})