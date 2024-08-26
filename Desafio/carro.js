class Carros {
    constructor(marca, modelo, categoria, ano, quilometragem, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.ano = ano;
        this.quilometragem = quilometragem;
        this.valor = valor;
    }
}

function Get() {
    return fetch("https://apigenerator.dronahq.com/api/EJQkjLAu/Carros")
      .then((response) => response.json())
      .then((data) => console.log(data));
}

Get()

async function postData(url = "https://apigenerator.dronahq.com/api/EJQkjLAu/Carros", data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  
    const novoCarro = new Carros("Toyota", "Corolla", "Sedan", 2022, 15000, 90000); // Criação do objeto

    postData("https://apigenerator.dronahq.com/api/EJQkjLAu/Carros", novoCarro) // Passa o objeto Carros
     .then((data) => {
         console.log(data);  
 });
  
  