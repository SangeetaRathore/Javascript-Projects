const item =document.querySelector('#item')
const toDoBox = document.querySelector('#to-do-list') 


item.addEventListener('keyup',function(e){
    if(e.key=='Enter'){
        addToDo(this.value)
        this.value = ""
    }   
})



const addToDo = (text) =>{

    // Create the task functionality 
    const listItem = document.createElement('li');
    listItem.innerHTML = `<div class="text">${text}</div>
                    <i class="fa-solid fa-xmark"></i>
                    <button id="button">Edit</button>`

    // add the task in list box
    toDoBox.appendChild(listItem)




    // To show the task is done  
    listItem.addEventListener('click',function(){
        this.classList.toggle('done')
    })      
    



    // Remove the task functionality
    listItem.querySelector('i').addEventListener('click',function(){
        listItem.remove() 
    })

    

    // Edit the task functionality
     listItem.querySelector('#button').addEventListener('click', function() {
        const currentText = listItem.querySelector('.text').innerText;
        item.value = currentText;    // set input box to current text
        listItem.remove();           // remove old item
        item.focus();                // focus input for quick editing
        
    });


}

