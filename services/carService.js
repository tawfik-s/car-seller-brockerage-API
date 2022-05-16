const Car = require("../models/car_model");


exports.getCars = async (req, res) => {
    try {
        const Cars = await Car.find();
        console.log(Cars);
        res.send(Cars);
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }

}

exports.CreateCar = async (req, res) => {

    try {
        const car = new Car({
            Car_name: req.body.Car_name,
            Car_type: req.body.Car_type,
            Car_color: req.body.Car_color,
            tags: req.body.tags,
            description: req.body.description
        });
        const result = await car.save();
        console.log(result);
        res.status(200).send({ message: 'done' });
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }
}


exports.DeleteCar = async (req, res) => {
    try {
        const result = await Car.deleteOne({ _id: req.params.id });   //deleteMany to delete more than one
        console.log(result);
        res.status(200).send({ message: 'done' });
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }
}

exports.UpdateCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) res.send({ message: 'there is no such item' });
        car.Car_name = req.body.Car_name;
        car.Car_type = req.body.Car_type;
        car.Car_color = req.body.Car_color;
        car.tags = req.body.tags;
        car.description = req.body.description;
        const result = await car.save();
        console.log(result);
        res.status(200).send({ message: 'done' });
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }
}

exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        console.log(car);
        res.send(car);
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }
}