import { validar } from "./validaciones-controller.js";

/* FOOTER */
if(window.location.pathname == "/screens/index.html" || window.location.pathname == "/screens/log.html" || window.location.pathname == "/screens/admin-producto.html" || window.location.pathname == "/screens/todosProductos.html"){
    const footer = document.querySelector("[data-footer]");
    const inputFooter = footer.querySelector("input");
    const textareaFooter = footer.querySelector("textarea")
    
    
        inputFooter.addEventListener("blur", (inputFooter) => {
            validar(inputFooter.target);
        });
        textareaFooter.addEventListener("blur", (textareaFooter) => {
            validar(textareaFooter.target);
        });
    
}



/* LOGIN */
if (window.location.pathname == "/screens/log.html"){
    const login = document.querySelector("[data-login]");
    const inputsLogin = login.querySelectorAll("input");
    
    if (login) {
        inputsLogin.forEach(input => {
            input.addEventListener("blur", (input) => {
                validar(input.target);
            })
        });
    }
}


/* NEW PRODUCT && EDIT PRODUCT */

if(window.location.pathname == "/screens/productoNuevo.html" || window.location.pathname == "/screens/editarProducto.html"){
    const form = document.querySelector("[data-form]");
    const inputs = form.querySelectorAll("input");
    const textarea = form.querySelector("textarea");
    
    if (form) {
        inputs.forEach(input => {
            input.addEventListener("blur", (input) => {
                validar(input.target);
            })
        });
    
        textarea.addEventListener("blur", (textarea) => {
            validar(textarea.target);
        });
    }
}







