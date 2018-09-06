document.addEventListener('DOMContentLoaded', () => {
  const FormInput = document.querySelector('#new-item-form');
  FormInput.addEventListener('submit', handleInput);

  const ButtonInput = document.querySelector('#delete-button');
  ButtonInput.addEventListener('click', handleButton)
});

const handleButton = function() {
  const buttonDelete = document.querySelector('#reading-list')
  buttonDelete.textContent = "The list is empty";
};

const handleInput = function(event) {
  event.preventDefault()

  const resultFromForm = `The title is: ${event.target.title.value}
  The author is: ${event.target.author.value}
  The category is: ${event.target.category.value}`

  const resultBook = document.createElement('div')
  resultBook.textContent = resultFromForm;
  resultBook.classList.add('flex-box-item');


  const list = document.querySelector('#reading-list');
  list.appendChild(resultBook);

  document.querySelector('#new-item-form').reset();
};
