let cars = []; // Initialize your cars array
document.addEventListener('DOMContentLoaded', () => {
    const loadCarsBtn = document.getElementById('loadCarsBtn');
    const carList = document.getElementById('carList');


    loadCarsBtn.addEventListener('click', () => {
        // No need to fetch, use the cars variable directly
        carList.innerHTML = '';
        cars.forEach((car, index) => {
            const carCard = document.createElement('div');
            carCard.classList.add('car-card');
            carCard.innerHTML = `
                <h2>${car.make} ${car.model}</h2>
                <p><strong>Year:</strong> ${car.year}</p>
                <p><strong>Make:</strong> ${car.make}</p>
                <p><strong>Model:</strong> ${car.model}</p>
                <p><strong>Color:</strong> R${car.color}</p>
                <p><strong>Price:</strong> R${car.price}</p>
                <button class="btn btn-remove" data-index="${index}">Remove</button>
            `;
            carList.appendChild(carCard);
        });
    });
});

function addCar(newCar) {
    fetch('/api/addCar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Add the new car to the cars array
            cars.push(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

carForm.addEventListener('submit', event => {
    event.preventDefault();
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;
    addCar({ make, model, year, color, price });
    carForm.reset();
});

document.getElementById('removeCarBtn').addEventListener('click', event => {
    event.preventDefault();
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    removeCar(make, model);
    carForm.reset();
});

function removeCar(make, model) {
    // Find the index of the car with the specified make and model
    const index = cars.findIndex(car => car.make === make && car.model === model);
    
    // If the car is found, remove it from the cars array
    if (index !== -1) {
        cars.splice(index, 1);
    }
}
carList.addEventListener('click', event => {
    if (event.target.classList.contains('btn-remove')) {
        const index = event.target.dataset.index;
        removeCar(index);
    }
});