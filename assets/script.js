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

    document
        .getElementById("panel-carrito")
        .classList.add("activo");

    document
        .getElementById("fondo-carrito")
        .classList.add("activo");

    mostrarProductosCarrito();
}

function cerrarCarrito() {

    document
        .getElementById("panel-carrito")
        .classList.remove("activo");

    document
        .getElementById("fondo-carrito")
        .classList.remove("activo");
}
function mostrarProductosCarrito() {

    const contenedor =
        document.getElementById("productos-carrito");

    const totalElemento =
        document.getElementById("total-carrito");

    contenedor.innerHTML = "";

    let total = 0;


    if (carrito.length === 0) {

        contenedor.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío 📚
            </p>
        `;

        totalElemento.textContent = "$0";

        return;
    }


    carrito.forEach(function(producto, indice) {

        const subtotal =
            producto.precio * producto.cantidad;

        total += subtotal;


        const item =
            document.createElement("div");

        item.classList.add("item-carrito");


        item.innerHTML = `

            <h3>${producto.nombre}</h3>

            <p class="item-carrito-precio">
                $${producto.precio.toLocaleString("es-CL")}
            </p>

            <div class="controles-cantidad">

                <button onclick="disminuirCantidad(${indice})">
                    -
                </button>

                <span>
                    ${producto.cantidad}
                </span>

                <button onclick="aumentarCantidad(${indice})">
                    +
                </button>

            </div>

            <button
                class="eliminar-producto"
                onclick="eliminarProducto(${indice})">

                🗑️ Eliminar

            </button>

        `;


        contenedor.appendChild(item);

    });


    totalElemento.textContent =
        "$" + total.toLocaleString("es-CL");
}
function aumentarCantidad(indice) {

    carrito[indice].cantidad++;

    actualizarCarrito();

    mostrarProductosCarrito();
}


function disminuirCantidad(indice) {

    carrito[indice].cantidad--;

    if (carrito[indice].cantidad <= 0) {

        carrito.splice(indice, 1);

    }

    actualizarCarrito();

    mostrarProductosCarrito();
}


function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    actualizarCarrito();

    mostrarProductosCarrito();
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


        // Validar correo electrónico
        const dominiosPermitidos = [
            "gmail.com",
            "hotmail.com",
            "outlook.com",
            "yahoo.com",
            "icloud.com",
            "live.com",
            "proton.me",
            "protonmail.com"
        ];

        const partesEmail = email.toLowerCase().split("@");

        if (
            partesEmail.length !== 2 ||
            partesEmail[0].length === 0 ||
            !dominiosPermitidos.includes(partesEmail[1])
        ) {
            alert("❌ Ingresa un correo válido. Ejemplos: usuario@gmail.com, usuario@hotmail.com");
            return;
        }

        

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
