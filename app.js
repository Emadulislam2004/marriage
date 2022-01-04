// select element
const year = document.querySelector('.year');
const gender = document.querySelector('.gender');
const submit = document.querySelector('.submit');
const output = document.querySelector('.card-footer');





// click event
submit.addEventListener('click', function(){

ageCal(gender.value, year.value);



year.value = '';
gender.value = gender.children[0].value;
    
})





