const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use(no-cors({
        origin: ['http://localhost:3001/','https://umaajayevenets.netlify.app/'],
        credentials: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser(secret));
};