//for the place the values will show

const inputField = document.getElementById('result');

function Clear(){
    inputField.value = '';
}


function Equal(){
    inputField.value = eval(inputField.value)
    if (inputField.value.length > 3) {
        inputField.value = parseFloat(inputField.value).toFixed(2); 
    }
}

function display(input){
    inputField.value += input;
}

function Percent(){
    inputField.value = eval(inputField.value) / 100;

}

function negate(){
    inputField.value = eval(inputField.value) *-1;
    
};

