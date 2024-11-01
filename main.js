function Carro(modelo, marca) {
    this.modelo = modelo;
    this.marca = marca;

    this.acelerar = function() {
        console.log('zuum');
    };
}

function CarroVW(modelo, velocidade) {
    Carro.call(this, modelo, "Volkswagen")

    this.velocidade = velocidade
}

function CarroFiat(modelo, velocidade) {
    Carro.call(this, modelo, "Fiat")

    this.velocidade = velocidade
}

function CarroBugatti(modelo, velocidade) {
    Carro.call(this, modelo, "Bugatti")

    this.velocidade = velocidade
}

const polo = new CarroVW('Polo', "100KM/h")
const uno = new CarroFiat('Uno', "140KM/h")
const veyron = new CarroBugatti('Veyron', "200KM/h")


console.log(polo.marca);
console.log(uno.marca);
console.log(veyron.marca);
