const item =document.querySelector('#item')
const toDoBox = document.querySelector('#to-do-list') 


item.addEventListener('keyup',function(e){
    
    if(e.key=='Enter'){
        addToDo(this.value)
        this.value = ""
    }
    
})


const addToDo = (item) =>{
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item}
                    <i class="fa-solid fa-xmark"></i>`
   toDoBox.appendChild(listItem)
}

