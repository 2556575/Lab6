module.exports.getAllCars = async function (context) {
    context.res = {
        body: cars
    };
}