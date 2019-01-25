const jwt = require('jwt-simple');
const secret = '13c72881661f2326f9097b8fdf26fe1c';

exports.validateUser = (req, res, next) => {
    try {
        console.log("jwttttttttttttt ", req.headers.authorization.split(" ")[1])
        if (req.headers.authorization.split(" ")[1]) {
            console.log("jwttttttttttttt", `xxx${req.headers.authorization.split(" ")[1]}xx`)
            var x = req.headers.authorization.split(" ")[1]
            var decoded = jwt.decode(req.headers.authorization.split(" ")[1], secret);
            console.log("zaiiid")
            if (decoded) {
                console.log("zaiiid")
                next();
            }
            else res.status(401).json({
                status: 401,
                message: 'not authorized'
            });
        } else res.status(401).json({
            status: 401,
            message: 'not authorized'
        });
    } catch (e) {
        res.status(401).json({
            status: 401,
            message: 'not authorized'
        });
    }
};


exports.authenticateUser = () => {
    console.log(jwt.encode({ user: "adam" }, secret))
    return jwt.encode({ user: "adam" }, secret);
};
