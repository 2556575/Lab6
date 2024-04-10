// Fetch all cars
fetch('/api/getAllCars')
    .then(response => response.json())
    .then(data => console.log(data));

// Fetch a car by ID
fetch('/api/getCarById?id=1')
    .then(response => response.json())
    .then(data => console.log(data));

// Add a new car
fetch('/api/addCar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCar),
})
.then(response => response.json())
.then(data => console.log(data));

// Update a car
fetch('/api/updateCar', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedCar),
})
.then(response => response.json())
.then(data => console.log(data));

// Delete a car
fetch('/api/deleteCar?id=1', {
    method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log(data));