var ApiEsquemaView = require('../views/reference'),
    ApiEsquemaModel = require('../models/dataAccess')


var ApiEsquema = function(conf) {
    this.conf = conf || {};

    this.view = new ApiEsquemaView();
    this.model = new ApiEsquemaModel({
        parameters: this.conf.parameters
    });

    this.response = function() {
        this[this.conf.funcionalidad](this.conf.req, this.conf.res, this.conf.next);
    };
};


ApiEsquema.prototype.get_EsquemaDetalle = function(req, res, next) {

    var self = this;

    var params = [{ name: 'esquemaID', value: req.query.esquemaID, type: self.model.types.INT },
    { name: 'esquemaDetalleID', value: req.query.esquemaDetalleID, type: self.model.types.INT }];

    self.model.query('uspGetEsquemaDetalle', params, function(error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

ApiEsquema.prototype.get_putEsquema = function(req, res, next) {

    var self = this;

    var params = [{ name: 'diasGracia', value: req.query.diasGracia, type: self.model.types.INT },
    { name: 'plazo', value: req.query.plazo, type: self.model.types.INT },
    { name: 'financieraID', value: req.query.financieraID, type: self.model.types.INT },
    { name: 'nombre', value: req.query.nombre, type: self.model.types.STRING },
    { name: 'descripcion', value: req.query.descripcion, type: self.model.types.STRING },
    { name: 'interesMoratorio', value: req.query.interesMoratorio, type: self.model.types.INT },
    { name: 'tasaInteres', value: req.query.tasaInteres, type: self.model.types.INT },
    { name: 'fechaInicio', value: req.query.fechaInicio, type: self.model.types.STRING },
    { name: 'fechaFin', value: req.query.fechaFin, type: self.model.types.STRING },
    { name: 'porcentajePenetracion', value: req.query.porcentajePenetracion, type: self.model.types.INT },
    { name: 'tipoTiieCID', value: req.query.tipoTiieCID, type: self.model.types.INT },
    { name: 'tiie', value: req.query.tiie, type: self.model.types.INT },
    { name: 'usuarioID', value: req.query.usuarioID, type: self.model.types.INT }];

    self.model.query('uspInsEsquema', params, function(error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};
ApiEsquema.prototype.get_updEsquema = function(req, res, next) {

    var self = this;

    var params = [{ name: 'esquemaID', value: req.query.esquemaID, type: self.model.types.INT },
    { name: 'diasGracia', value: req.query.diasGracia, type: self.model.types.INT },
    { name: 'plazo', value: req.query.plazo, type: self.model.types.INT },
    { name: 'financieraID', value: req.query.financieraID, type: self.model.types.INT },
    { name: 'nombre', value: req.query.nombre, type: self.model.types.STRING },
    { name: 'descripcion', value: req.query.descripcion, type: self.model.types.STRING },
    { name: 'interesMoratorio', value: req.query.interesMoratorio, type: self.model.types.INT },
    { name: 'tasaInteres', value: req.query.tasaInteres, type: self.model.types.INT },
    { name: 'fechaInicio', value: req.query.fechaInicio, type: self.model.types.STRING },
    { name: 'fechaFin', value: req.query.fechaFin, type: self.model.types.STRING },
    { name: 'porcentajePenetracion', value: req.query.porcentajePenetracion, type: self.model.types.INT },
    { name: 'tipoTiieCID', value: req.query.tipoTiieCID, type: self.model.types.INT },
    { name: 'tiie', value: req.query.tiie, type: self.model.types.INT },
    { name: 'usuarioID', value: req.query.usuarioID, type: self.model.types.INT }];

    self.model.query('uspSetEsquema', params, function(error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};
ApiEsquema.prototype.get_delEsquema = function(req, res, next) {

    var self = this;

    var params = [{ name: 'esquemaID', value: req.query.esquemaID, type: self.model.types.INT }];

    self.model.query('uspDelEsquema', params, function(error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};
module.exports = ApiEsquema;