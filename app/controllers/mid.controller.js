const Student = require('../models/mid.model');

exports.create = async (req, res) => {
    try {
        if (!req.body.name || !req.body.age || !req.body.major || !req.body.grade) {
            return res.status(400).send({
                message: 'Name, age, and major cannot be empty',
            });
        }

        const student = new Student({
            name: req.body.name,
            age: req.body.age,
            major: req.body.major,
            grade: req.body.grade,
        });

        const createdStudent = await student.save();
        res.send(createdStudent);
    } catch (err) {
        res.status(500).send({
            message: 'Something went wrong!',
            error: err,
        });
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;

        if (!req.body.name || !req.body.age || !req.body.major || !req.body.grade) {
            return res.status(400).send({
                message: 'Name, age, and major cannot be empty',
            });
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                age: req.body.age,
                major: req.body.major,
                grade: req.body.grade,
            },
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(400).send({
                message: 'Student not found',
            });
        }

        res.send(updatedStudent);
    } catch (err) {
        res.status(500).send({
            message: 'Something went wrong!',
            error: err,
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const students = await Student.find();
        res.send(students);
    } catch (err) {
        res.status(500).send({
            message: 'Something went wrong!',
            error: err,
        });
    }
};

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;

        const student = await Student.findById(id);

        if (!student) {
            return res.status(400).send({
                message: 'Student not found',
            });
        }

        res.send(student);
    } catch (err) {
        res.status(500).send({
            message: 'Something went wrong!',
            error: err,
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedStudent = await Student.findByIdAndRemove(id);

        if (!deletedStudent) {
            return res.status(400).send({
                message: 'Student not found',
            });
        }

        res.send({
            message: 'Student deleted',
        });
    } catch (err) {
        res.status(500).send({
            message: 'Something went wrong!',
            error: err,
        });
    }
};
