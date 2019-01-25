const jwt = require('jwt-simple');
const secret= '13c72881661f2326f9097b8fdf26fe1c';

exports.validateUser = (req, res, next) => {
    if (req.headers.Authorization) {
        var decoded = jwt.decode(req.headers.Authorization, secret);
        if (decoded) next();
        else res.status(401).json({
            status: 401,
            message: 'not authorized'
        });
    } else res.status(401).json({
        status: 401,
        message: 'not authorized'
    });
};

exports.authenticateUser = () =>{
    return  jwt.encode({ user:"adam" }, secret); 
};
