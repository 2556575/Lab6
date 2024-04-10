module.exports.getCarById = async function (context) {
    const id = context.req.params.id;
    const car = cars.find(car => car.id === id);
    context.res = {
        body: car
    };
}