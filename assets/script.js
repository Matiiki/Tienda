// ==========================================
// CARRITO DE COMPRAS
// ==========================================

let carrito = [];


// Agregar un libro al carrito
function agregarAlCarrito(nombre, precio) {

    const productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    actualizarCarrito();

    alert(`"${nombre}" fue agregado al carrito.`);
}


// Actualizar el carrito
function actualizarCarrito() {

    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    const contador = document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = cantidadTotal;
    }
}


// Mostrar el contenido del carrito
function mostrarCarrito() {

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "🛒 TU CARRITO\n\n";
    let total = 0;

    carrito.forEach(producto => {

        const subtotal = producto.precio * producto.cantidad;

        mensaje += `${producto.nombre}\n`;
        mensaje += `Cantidad: ${producto.cantidad}\n`;
        mensaje += `Subtotal: $${subtotal.toLocaleString("es-CL")}\n\n`;

        total += subtotal;
    });

    mensaje += "----------------------\n";
    mensaje += `TOTAL: $${total.toLocaleString("es-CL")}`;

    alert(mensaje);
}


// ==========================================
// REGISTRO
// ==========================================

const formularioRegistro =
    document.querySelector("#registro form");

if (formularioRegistro) {

    formularioRegistro.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre =
            document.getElementById("nombre").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmar =
            document.getElementById("confirmar").value;


        // Validar contraseña
        if (password !== confirmar) {

            alert("❌ Las contraseñas no coinciden.");

            return;
        }


        // Validar longitud
        if (password.length < 6) {

            alert(
                "❌ La contraseña debe tener al menos 6 caracteres."
            );

            return;
        }


        alert(
            `✅ Registro exitoso.\n\nBienvenido/a ${nombre}!`
        );

        formularioRegistro.reset();
    });
}


// ==========================================
// FORMULARIO DE CONTACTO
// ==========================================

const formularioContacto =
    document.querySelector("#contacto form");

if (formularioContacto) {

    formularioContacto.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre =
            document.getElementById("nombre-contacto").value.trim();

        const email =
            document.getElementById("email-contacto").value.trim();

        const mensaje =
            document.getElementById("mensaje").value.trim();


        if (nombre === "" || email === "" || mensaje === "") {

            alert("❌ Por favor completa todos los campos.");

            return;
        }


        alert(
            `✅ Mensaje enviado correctamente.\n\nGracias por contactarnos, ${nombre}.`
        );

        formularioContacto.reset();
    });
}


// ==========================================
// BOTONES "COMPRAR"
// ==========================================

const botonesComprar =
    document.querySelectorAll(".producto .boton");

botonesComprar.forEach(function(boton) {

    boton.addEventListener("click", function(event) {

        event.preventDefault();

        const producto =
            boton.closest(".producto");

        const nombre =
            producto.querySelector("h3").textContent;

        const precioTexto =
            producto.querySelector(".precio").textContent;

        // Eliminar $ y puntos
        const precio =
            Number(
                precioTexto
                    .replace("$", "")
                    .replace(/\./g, "")
            );

        agregarAlCarrito(nombre, precio);
    });

});


// ==========================================
// MENSAJE DE BIENVENIDA
// ==========================================

console.log(
    "📚 Bienvenido a El Rincón de los Libros"
);
