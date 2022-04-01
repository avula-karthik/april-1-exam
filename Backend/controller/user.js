const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var connector = require('../poolconnect');
exports.homePage = function (req, res) {
    const sqlQuery = `CREATE TABLE users(id int AUTO_INCREMENT PRIMARY KEY, username VARCHAR(25), password VARCHAR(200))`;
    connector.query(sqlQuery, function (err, results, fields) {
        res.json(results);
    });
};
exports.registerUser = function (req, res) {
    const { id, username, password } = req.body;
    checkForUsernameQuery = `SELECT * FROM users WHERE username = "${username}"`;
    connector.query(checkForUsernameQuery, function (err, results, fields) {
        if (err) {
            res.json({ err });
        } else {
            if (results.length > 0) {
                res.json({ status: 0, debug_data: 'username already exists' });
            } else {
                let encryptedPassword;
                try {
                    let salt = bcrypt.genSaltSync(10);
                    console.log(salt);
                    encryptedPassword = bcrypt.hashSync(
                        req.body.password,
                        salt
                    );
                    console.log(encryptedPassword);
                } catch (err) {
                    console.log(err);
                }
                const sqlQuery = `INSERT INTO users values ("${id}","${username}","${encryptedPassword}")`;
                connector.query(sqlQuery, function (err, results, fields) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json({ status: 1, data: 'user created' });
                    }
                });
            }
        }
    });
};
exports.loginUser = function (req, res) {
    let { username, password } = req.body;
    let hashedPassword = `SELECT password FROM users WHERE username = "${username}"`;
    const passCorrect = bcrypt.compareSync(password, hashedPassword);
    if (!passCorrect) {
        res.status(400).json('Wrong credentials');
    } else {
        const payload = {
            username: username,
        };
        jwt.sign(
            payload,
            'secret_string',
            { expiresIn: 1200 },
            (err, token) => {
                if (err) {
                    throw err;
                    res.json({ status: 0, debug_data: 'Temp err in beckend' });
                }
                res.status(200).json({ token });
            }
        );
    }
};
