const Carro = require("../models/carro-model");
const CarroService = require("../services/carro-service");
var carroService = new CarroService();
 
exports.get = (req, res) => {
  res.json(carroService.getAll());
};

// exports.getcontReg = (req, res) => {
//   res.json(carroService.getContRegiste(req.params.reg));
// };

exports.getByModel = (req, res) => {
  res.json(carroService.getByModel(req.query.model));
};


exports.getQty = (req, res) =>{
  res.json(carroService.getQty(req.query.qty));
};
  
 
exports.getById = (req, res) => {
  res.json(carroService.getById(req.params.id));
};
 
exports.post = (req, res) => {
  res.json(carroService.add(new Carro(req.body.name, req.body.model, 
                                      req.body.anoFabric, req.body.anoModel, 
                                      req.body.dataVenda)));
};
 
exports.put = (req, res) => {
  res.json(
    carroService.update(
      req.params.id,
      new Carro(req.body.name, req.body.model, 
                req.body.anoFabric, req.body.anoModel, 
                req.body.dataVenda)
    )
  );
};
 
exports.delete = (req, res) => {
  res.json(carroService.delete(req.params.id));
};

exports.paginatedResults = (req, res, next) => {
  res.json(carroService.getById(req.params, next));
};