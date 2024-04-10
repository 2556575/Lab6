let cars = [];

module.exports = async function (context, req) {
    context.log('Adding a new car');

    const newCar = req.body;
    newCar.id = cars.length > 0 ? cars[cars.length - 1].id + 1 : 1;
    cars.push(newCar);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: newCar
    };
}