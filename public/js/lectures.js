const openFormBtn = document.getElementById('open_form');
const formContainer = document.getElementById('form_container');
const books = document.getElementsByClassName('book-card');
let show = false;
let delay = 100;

for (const book of books){
  book.style.animationDelay = `${delay}ms`;
  delay += 75;
}

//Control how to show the form container
formContainer.style.height = '0px';

openFormBtn.addEventListener('click', () => {
  show = !show;
  
  show 
  ? formContainer.style.height = '410px'
  : formContainer.style.height = '0px';
});
