/* mini project- To Do List app */
/* 
step-01: set addEventListener in add item btn
step-02: get the input field value
step-03: get parent container
step-04: create tr and set value
step-05: push the vale in parent
step-06: empty input field
step-07: delete btn add event listener and wark do so
step-08: done btn add event listener and wark do so (same as step-08)
step-09: clear all table element
*/

let count = 0;
document.getElementById('input__btn').addEventListener('click', function(){
    count += 1;

    const myInputField = document.getElementById('input__value');
    const myInputValue = myInputField.value;

    //simple validation
    if (myInputValue === '') {
        return alert('Please you must be add valid value');
    }

    const parent = document.getElementById('content__container');

    const createTr = document.createElement('tr');
    createTr.innerHTML = `
        <td>${count}</td>
        <td>${myInputValue}</td>
        <td>
        <button class="btn btn-danger delete__btn">Delete</button>
        <button class="btn btn-primary done__btn">Done</button>
        </td>
    `
    parent.appendChild(createTr);

    myInputField.value = '';
    
    const elements = document.querySelectorAll('.delete__btn');
    //console.log(elements); //return NodeList 
    for (const value of elements) {
        //console.log(value); //return delete btn 
        value.addEventListener('click', function(event){
            //console.log(event.target); //return delete btn
            //console.log(event.target.parentNode.parentNode); //return delete btn tr element

            event.target.parentNode.parentNode.style.display = 'none';
        })
    }

    const elements2 = document.querySelectorAll('.done__btn');
    //console.log(elements2); //return NodeList 
    for (const value of elements2) {
        //console.log(value); //return delete btn 
        value.addEventListener('click', function(events){
            events.target.parentNode.parentNode.style.textDecorationLine = 'line-through';
            events.target.parentNode.parentNode.style.backgroundColor = 'lightpink';
        })
    }
})

document.getElementById('clear__btn').addEventListener('click', function(event){
    //console.log(event.target.parentNode.children[0].children[1]); //return table tbody

    event.target.parentNode.children[0].children[1].style.display = 'none';
})