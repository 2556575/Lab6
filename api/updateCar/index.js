module.exports.updateCar = async function (context) {
    const id = context.req.params.id;
    const updatedCar = context.req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[index] = updatedCar;
    context.res = {
        body: updatedCar
    };
}