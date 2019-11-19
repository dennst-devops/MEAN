const controller = require('../controllers/controller');
const path = require('path');

module.exports = (app) => {
    app.get('/api/things', controller.getAll);
    app.get('/api/things/:id', controller.getOneThing);
    app.post('/api/things/createThing', controller.createThing);
    app.put('/api/things/:id/editThing', controller.editThing);
    // app.get('/api/:id/reviews', controller.getAllReviews);
    // app.put('/api/things/:id/createReview', controller.createReview);
    app.delete('/api/things/:id/deleteThing', controller.deleteThing);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}