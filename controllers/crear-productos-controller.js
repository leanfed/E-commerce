import { productoServices } from "../services/productos.js";


if(localStorage.getItem("autenticado") === "true"){

    const form = document.querySelector("[data-form]");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const nombre = document.querySelector("[data-name]").value;
        const url = document.querySelector("[data-url]").value;
        const description = document.querySelector("[data-description]").value;
        const price = document.querySelector("[data-price]").value;
        const category = document.querySelector("[data-category]").value;
    
        productoServices.crearProducto(nombre,url,price,description,category).then(respuesta => {
            window.location.href = "/screens/completarRegistro.html";
            console.log(respuesta)
        }).catch(err => {
            window.location.href = "/screens/wrong.html";
            console.log(err);
        })
    });
}else{
    window.location.href = "/screens/log.html";
    alert("Debe iniciar sesión");
}

