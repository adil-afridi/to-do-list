let list_container = document.querySelector('.list_container')
let input_box  = document.querySelector('.input_box')

function addTask(){
    if(input_box.value === ''){
        alert('Please write something!')
    }else{
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        li.innerHTML = input_box.value 
        list_container.appendChild(ul)
        ul.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }

    input_box.value = "";
    saveData()

}


 list_container.addEventListener('click',(e)=>{
    if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
 })

 function saveData(){
    localStorage.setItem('data',list_container.innerHTML)
 }


 function showTask(){
    list_container.innerHTML = localStorage.getItem('data')
 }

 showTask()
 