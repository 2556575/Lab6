module.exports.addCar = async function (context) {
    const newCar = context.req.body;
    cars.push(newCar);
    context.res = {
        body: newCar
    };
}