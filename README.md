# Tienda
# 📚 El Rincón de los Libros

## 📖 Descripción del proyecto

**El Rincón de los Libros** es una página web desarrollada para simular una tienda online de libros.

El sitio permite visualizar distintos productos, registrar usuarios, enviar mensajes mediante un formulario de contacto y agregar libros a un carrito de compras.

Este proyecto fue desarrollado utilizando **HTML, CSS y JavaScript**, aplicando conceptos de estructura web, diseño responsive, formularios, validaciones y manipulación del DOM.

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

---

## 📂 Estructura del proyecto

```text
El-Rincon-de-los-Libros/
│
├── index.html
│
├── assets/
│   ├── style.css
│   └── script.js
│
└── README.md
```

### `index.html`

Contiene la estructura principal de la página web, incluyendo:

* Encabezado y menú de navegación.
* Sección de inicio.
* Catálogo de libros.
* Formulario de registro.
* Formulario de contacto.
* Carrito de compras.
* Pie de página.

### `assets/style.css`

Contiene los estilos visuales de la página:

* Colores.
* Tipografías.
* Botones.
* Tarjetas de productos.
* Formularios.
* Diseño responsive para computadores, tablets y celulares.

### `assets/script.js`

Contiene las funcionalidades desarrolladas con JavaScript:

* Agregar productos al carrito.
* Contabilizar productos.
* Calcular el total del carrito.
* Mostrar los productos mediante alertas.
* Validar el formulario de registro.
* Verificar que las contraseñas coincidan.
* Validar la longitud de la contraseña.
* Validar el formulario de contacto.

---

## 🛒 Carrito de compras

Cada libro disponible puede ser agregado al carrito utilizando el botón **Comprar**.

El sistema permite:

* Agregar productos.
* Aumentar la cantidad si se agrega nuevamente el mismo producto.
* Mostrar la cantidad total de productos en el carrito.
* Calcular el subtotal de cada producto.
* Calcular el precio total de la compra.

---

## 👤 Registro de usuarios

La página contiene un formulario donde el usuario debe ingresar:

* Nombre completo.
* Correo electrónico.
* Contraseña.
* Confirmación de contraseña.

JavaScript valida que:

* Las contraseñas sean iguales.
* La contraseña tenga un mínimo de 6 caracteres.

Si los datos son correctos, se muestra un mensaje indicando que el registro fue realizado correctamente.

---

## 📩 Formulario de contacto

La página también cuenta con una sección de contacto donde el usuario puede ingresar:

* Nombre.
* Correo electrónico.
* Mensaje.

El sistema comprueba que los campos estén completos antes de mostrar el mensaje de envío exitoso.

---

## 📱 Diseño responsive

El sitio utiliza `Media Queries` para adaptarse a distintos tamaños de pantalla.

Se realizaron ajustes para:

* Computadores.
* Tablets.
* Teléfonos celulares.
* Teléfonos con pantallas pequeñas.

---

## 🎨 Diseño

El diseño utiliza una temática relacionada con una librería, utilizando principalmente colores:

* Café oscuro.
* Beige.
* Dorado.
* Blanco.

Además, se utilizan imágenes externas de **Unsplash** para representar los diferentes libros y la sección principal.

---

## 🚀 Ejecución del proyecto

Para ejecutar el proyecto:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir el archivo `index.html` en un navegador web.
4. Navegar por las diferentes secciones de la página.

No es necesario instalar dependencias adicionales.

---

## ✅ Funcionalidades implementadas

* Navegación entre secciones.
* Catálogo de libros.
* Diseño responsive.
* Carrito de compras.
* Contador de productos.
* Cálculo automático del total.
* Registro de usuarios.
* Validación de contraseñas.
* Formulario de contacto.
* Validaciones con JavaScript.

---

## 📌 Estado del proyecto

Proyecto funcional en desarrollo.

Actualmente las operaciones de registro, contacto y carrito funcionan únicamente en el navegador y no utilizan una base de datos.
