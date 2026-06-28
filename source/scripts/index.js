const foxGarden = document.querySelector('.fox-garden');
const flowerGarden = document.querySelector('.flower-garden');
const gardenControls = document.querySelector('.garden__button');

const handleGardenActions = (e) => {
  const button = e.target.closest('.button');
  if (!button) return;

  if (button.classList.contains('garden__button-add-flowerbed')) {
    const currentFlowerBeds = flowerGarden.querySelectorAll('.flower-garden__flowerbed');
    const newflowerBed = document.createElement('div');

    newflowerBed.classList.add('flower-garden__flowerbed');
    newflowerBed.textContent = currentFlowerBeds.length + 1;
    flowerGarden.appendChild(newflowerBed);
  }

  if (button.classList.contains('garden__button-remove-flowerbed')) {
    const currentFlowerBeds = flowerGarden.querySelectorAll('.flower-garden__flowerbed');

    if (currentFlowerBeds.length > 0) {
      currentFlowerBeds[currentFlowerBeds.length - 1].remove();
    }
  }

  if (button.classList.contains('garden__button-add-gardenbed')) {
    const currentBeds = foxGarden.querySelectorAll('.fox-garden__bed');
    const newBed = document.createElement('div');

    newBed.classList.add('fox-garden__bed');
    newBed.textContent = currentBeds.length + 1;
    foxGarden.appendChild(newBed);
  }

  if (button.classList.contains('garden__button-remove-gardenbed')) {
    const currentBeds = foxGarden.querySelectorAll('.fox-garden__bed');

    if (currentBeds.length > 0) {
      currentBeds[currentBeds.length - 1].remove();
    }
  }
};

gardenControls.addEventListener('click', handleGardenActions);
