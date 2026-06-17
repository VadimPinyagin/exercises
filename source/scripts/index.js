const button = document.querySelector('.garden__group-button');
const garden = document.querySelector('.fox-garden');

button.addEventListener('click', () => {

  const currentBeds = garden.querySelectorAll('.fox-garden__bed');
  const nextNumber = currentBeds.length + 1;

  const newBed = document.createElement('div');
  newBed.classList.add('fox-garden__bed');
  newBed.textContent = nextNumber;

  garden.appendChild(newBed);
});
