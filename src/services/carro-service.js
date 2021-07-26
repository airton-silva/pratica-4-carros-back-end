class CarroService {
    constructor() {
      this.carros = [];
      this.id = 0;
    }
   
    add(carro) {
      this.id++;
      carro.id = this.id;
      this.carros.push(carro);
    }
   
    getAll() {
      return this.carros;
    }
   
    getById(id) {
      return this.carros.find((carro) => carro.id == id);
    }
   
    update(id, carro) {
      this.carros.forEach(function (e) {
        if (id && id == e.id) {
          for (var i in carro) {
            e[i] = carro[i];
          }
        }
      });
    }
   
    delete(id) {
      this.carros = this.carros.filter(function (el) {
        return el.id != id;
      });
    }
  }
   
  module.exports = CarroService;