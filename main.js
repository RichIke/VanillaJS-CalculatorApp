const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector('.last-entity-clear');

let disNum1 = '';
let disNum2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if( e.target.innerText === '.' && !haveDot){
          haveDot = true;
        } else if (e.target.innerText === '.' && haveDot){
            return;
        }
        // const eL = e.target.innerHTML;
        // console.log(eL);
        disNum2 += e.target.innerHTML;
        display2El.innerHTML = disNum2;
        
    })
});

operationEl.forEach( operation => {
    operation.addEventListener('click', (e) => {
        if (!disNum2) return;
        haveDot = false;
        const operationName = e.target.innerHTML;
        if(disNum1 && disNum2  && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(disNum2);
        }
        
        clearVar(operationName);
        lastOperation= operationName;
        console.log(result);
    })
});

function clearVar(name = "") {
    disNum1 += disNum2 + ' ' + name + ' ';
    display1El.innerHTML = disNum1;
    display2El.innerHTML = '';
    disNum2 = '';
    tempResultEl.innerHTML = result;
}

function mathOperation () {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(disNum2);
    }else if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(disNum2);
    }else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(disNum2);
    }else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(disNum2);
    } else if(lastOperation === '%') {
        result = parseFloat(result) % parseFloat(disNum2);
    }
}

equalEl.addEventListener('click', (e) => {
    if(!disNum1 || !disNum2) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerHTML = result;
    tempResultEl.innerHTML = '';
    disNum2 = result;
    disNum1 = '';
})

clearAllEl.addEventListener('click', (e) => {
    display1El.innerHTML = '0';
    display2El.innerHTML = '0';
    disNum1 = '';
    disNum2 = '';
    result = '';
    tempResultEl.innerHTML = '0';
})

clearLastEl.addEventListener('click', (e) => {
    display2El.innerHTML = '';
    disNum2 = '';
});

window.addEventListener('keydown', (e) => {
    if(
        e.key === '0'||
        e.key === '1'||
        e.key === '2'||
        e.key === '3'||
        e.key === '4'||
        e.key === '5'||
        e.key === '6'||
        e.key === '7'||
        e.key === '8'||
        e.key === '9'||
        e.key === '.'
    ){
        clickButtonEl(e.key);
    } else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%'
    ){
        clickOperation(e.key);
    } else if ( e.key === '*' )
    {
        clickOperation('X');  
    } else if(e.key === 'Enter' || e.key === '=')
    {
       clickEqual();
    }
});

function clickButtonEl(key) {
    numbersEl.forEach(button => {
        if(button.innerHTML === key){
            button.click();
        }
    })
}

function clickOperation(key) {
    operationEl.forEach(button => {
        if(button.innerHTML === key){
            button.click();
        }
    })
}

function clickEqual(){
    equalEl.click();
}









































































