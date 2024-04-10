module.exports.deleteCar = async function (context) {
    const id = context.req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    context.res = {
        body: { message: `Car with id ${id} deleted` }
    };
}