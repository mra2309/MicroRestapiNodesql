'use strict';

module.exports = function(app) {
    var Cusers = require('./controller/Userscontroller');
    var Cnuta = require('./controller/Nutacontroller');

    app.route('/')
        .get(Cusers.index);

    app.route('/users')
        .get(Cusers.users);

    app.route('/users/:user_id')
        .get(Cusers.findUsers);

    app.route('/users')
        .post(Cusers.createUsers);

    app.route('/users')
        .put(Cusers.updateUsers);
    
    app.route('/users')
        .delete(Cusers.deleteUsers);

    app.route('/nuta')
        .get(Cnuta.nuta);
    
    app.route('/nuta')
        .post(Cnuta.createNuta);
};