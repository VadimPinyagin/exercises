const garden = document.querySelector('.fox-garden');
const gardenControls = document.querySelector('.garden__button');

const handleGardenActions = (e) => {
  const button = e.target.closest('.button');
  if (!button) return;

  if (button.classList.contains('garden__button-add')) {
    const currentBeds = garden.querySelectorAll('.fox-garden__bed');
    const newBed = document.createElement('div');

    newBed.classList.add('fox-garden__bed');
    newBed.textContent = currentBeds.length + 1;
    garden.appendChild(newBed);
  }

  if (button.classList.contains('garden__button-remove')) {
    const currentBeds = garden.querySelectorAll('.fox-garden__bed');

    if (currentBeds.length > 0) {
      currentBeds[currentBeds.length - 1].remove();
    }
  }
};

gardenControls.addEventListener('click', handleGardenActions);
