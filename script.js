/* ==========================================================
   STYLESTEP
   CATÁLOGO, CATEGORÍAS, FAVORITOS Y CARRITO
========================================================== */


/* ==========================================================
   PRODUCTOS
========================================================== */

const productos = [

    /* ======================================================
       DAMA
    ====================================================== */

    {
        id: 1,
        nombre: "Sandalia Elegance",
        categoria: "Dama",
        precio: 599,
        stock: 5,
        imagen: "https://images.pexels.com/photos/9267585/pexels-photo-9267585.jpeg",
        descripcion: "Sandalias elegantes y cómodas para ocasiones especiales."
    },

    {
        id: 2,
        nombre: "Tacón Classic",
        categoria: "Dama",
        precio: 799,
        stock: 4,
        imagen: "https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tacón clásico con un diseño elegante y moderno."
    },

    {
        id: 3,
        nombre: "Bota Style",
        categoria: "Dama",
        precio: 899,
        stock: 6,
        imagen: "https://images.pexels.com/photos/26851197/pexels-photo-26851197.jpeg",
        descripcion: "Botas modernas ideales para complementar tu estilo."
    },

    {
        id: 4,
        nombre: "Sandalia Comfort",
        categoria: "Dama",
        precio: 549,
        stock: 8,
        imagen: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Sandalias cómodas y ligeras para el uso diario."
    },

    {
        id: 5,
        nombre: "Tacón Glam",
        categoria: "Dama",
        precio: 899,
        stock: 4,
        imagen: "https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tacones sofisticados para eventos y ocasiones especiales."
    },

    {
        id: 6,
        nombre: "Bota Casual",
        categoria: "Dama",
        precio: 949,
        stock: 6,
        imagen: "https://images.pexels.com/photos/27248250/pexels-photo-27248250.png",
        descripcion: "Botas casuales que combinan comodidad y estilo."
    },


    /* ======================================================
       CABALLERO
    ====================================================== */

    {
        id: 7,
        nombre: "Tenis Urban",
        categoria: "Caballero",
        precio: 699,
        stock: 8,
        imagen: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tenis urbanos cómodos para utilizar todos los días."
    },

    {
        id: 8,
        nombre: "Zapato Formal",
        categoria: "Caballero",
        precio: 849,
        stock: 5,
        imagen: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Zapato formal ideal para trabajo y eventos especiales."
    },

    {
        id: 9,
        nombre: "Tenis Runner",
        categoria: "Caballero",
        precio: 749,
        stock: 7,
        imagen: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tenis deportivos ligeros y cómodos."
    },

    {
        id: 10,
        nombre: "Mocasín Classic",
        categoria: "Caballero",
        precio: 799,
        stock: 5,
        imagen: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Mocasines clásicos para un estilo casual y elegante."
    },

    {
        id: 11,
        nombre: "Tenis Sport",
        categoria: "Caballero",
        precio: 729,
        stock: 7,
        imagen: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tenis deportivos diseñados para mayor comodidad."
    },

    {
        id: 12,
        nombre: "Bota Outdoor",
        categoria: "Caballero",
        precio: 999,
        stock: 3,
        imagen: "https://images.pexels.com/photos/267242/pexels-photo-267242.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Botas resistentes para actividades y aventuras al exterior."
    },


    /* ======================================================
       JUVENIL
    ====================================================== */

    {
        id: 13,
        nombre: "Tenis Street",
        categoria: "Juvenil",
        precio: 649,
        stock: 10,
        imagen: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tenis juveniles con un estilo urbano y moderno."
    },

    {
        id: 14,
        nombre: "Tenis Basic",
        categoria: "Juvenil",
        precio: 599,
        stock: 9,
        imagen: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Diseño sencillo, cómodo y fácil de combinar."
    },

    {
        id: 15,
        nombre: "Tenis Color",
        categoria: "Juvenil",
        precio: 679,
        stock: 8,
        imagen: "https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tenis modernos con un diseño lleno de personalidad."
    },

    {
        id: 16,
        nombre: "Tenis Casual",
        categoria: "Juvenil",
        precio: 629,
        stock: 9,
        imagen: "https://images.pexels.com/photos/27516985/pexels-photo-27516985.jpeg",
        descripcion: "Tenis casuales para escuela, salidas y uso cotidiano."
    },


    /* ======================================================
       NIÑOS
    ====================================================== */

    {
        id: 17,
        nombre: "Tenis Kids Sport",
        categoria: "Niños",
        precio: 499,
        stock: 8,
        imagen: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tenis deportivos cómodos para los más pequeños."
    },

    {
        id: 18,
        nombre: "Tenis Kids",
        categoria: "Niños",
        precio: 549,
        stock: 6,
        imagen: "https://images.pexels.com/photos/4987534/pexels-photo-4987534.jpeg",
        descripcion: "Tenis divertidos con un diseño moderno y colorido."
    },

    {
        id: 19,
        nombre: "Zapatos Kids",
        categoria: "Niños",
        precio: 399,
        stock: 7,
        imagen: "https://images.pexels.com/photos/29737094/pexels-photo-29737094.jpeg",
        descripcion: "Sandalias ligeras y cómodas para días cálidos."
    },

    {
        id: 20,
        nombre: "Botita Kids",
        categoria: "Niños",
        precio: 599,
        stock: 5,
        imagen: "https://images.pexels.com/photos/47220/shoes-pregnancy-child-clothing-47220.jpeg",
        descripcion: "Botitas resistentes y cómodas para los pequeños."
    },

    {
        id: 21,
        nombre: "Tenis Kids Urban",
        categoria: "Niños",
        precio: 529,
        stock: 8,
        imagen: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: "Tenis urbanos infantiles con un diseño moderno."
    }

];


/* ==========================================================
   VARIABLES GENERALES
========================================================== */

let carrito = [];

let favoritos = [];

let categoriaSeleccionada = "Todos";


/* ==========================================================
   MOSTRAR PRODUCTOS
========================================================== */

function mostrarProductos(lista = productos) {

    const contenedor =
        document.getElementById("productos");


    if (!contenedor) {

        console.error(
            "No se encontró el elemento con id='productos'."
        );

        return;
    }


    contenedor.innerHTML = "";


    /* Si no hay resultados */

    if (lista.length === 0) {

        contenedor.innerHTML = `

            <div class="sin-resultados">

                <div class="sin-resultados-icono">
                    🔎
                </div>

                <h3>
                    No encontramos productos
                </h3>

                <p>
                    Intenta buscar otro producto
                    o selecciona otra categoría.
                </p>

            </div>

        `;

        return;
    }


    /* Crear cada tarjeta */

    lista.forEach(producto => {


        const esFavorito =
            favoritos.includes(producto.id);


        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "product-card";


        tarjeta.innerHTML = `

            <!-- IMAGEN -->

            <div class="product-image">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    class="foto-producto"
                    loading="lazy"

                    onerror="
                        this.onerror=null;
                        this.src='https://placehold.co/600x500/f3e8f5/7071BC?text=STYLESTEP';
                    "
                >


                <!-- CATEGORÍA -->

                <span class="product-category">

                    ${producto.categoria}

                </span>


                <!-- FAVORITO -->

                <button
                    class="product-favorite
                    ${esFavorito ? "active" : ""}"

                    onclick="toggleFavorito(${producto.id})"

                    title="Agregar a favoritos">

                    ${esFavorito ? "♥" : "♡"}

                </button>

            </div>


            <!-- INFORMACIÓN -->

            <div class="product-content">


                <h3>

                    ${producto.nombre}

                </h3>


                <p class="product-description">

                    ${producto.descripcion}

                </p>


                <div class="product-meta">


                    <span class="product-price">

                        $${producto.precio.toLocaleString("es-MX")}

                    </span>


                    <span
                        class="stock
                        ${producto.stock <= 3 ? "stock-bajo" : ""}">

                        ${
                            producto.stock > 0

                            ? producto.stock + " disponibles"

                            : "Agotado"
                        }

                    </span>


                </div>


                <button
                    class="add-cart"

                    onclick="agregarCarrito(${producto.id})"

                    ${producto.stock <= 0 ? "disabled" : ""}>

                    🛒 Agregar al carrito

                </button>


            </div>

        `;


        contenedor.appendChild(tarjeta);

    });

}


/* ==========================================================
   FILTRAR POR CATEGORÍA
========================================================== */

function filtrarCategoria(categoria) {


    categoriaSeleccionada =
        categoria;


    /* Actualizar select */

    const select =
        document.getElementById(
            "filtroCategoria"
        );


    if (select) {

        select.value =
            categoria;

    }


    /* Limpiar buscador */

    const buscador =
        document.getElementById(
            "buscador"
        );


    if (buscador) {

        buscador.value = "";

    }


    let resultados = [];


    /* Mostrar todos */

    if (categoria === "Todos") {

        resultados =
            productos;

    }


    /* Filtrar */

    else {

        resultados =
            productos.filter(

                producto =>
                    producto.categoria === categoria

            );

    }


    mostrarProductos(
        resultados
    );


    /* Actualizar texto */

    actualizarTituloCategoria(

        categoria,

        resultados.length

    );


    /* Bajar automáticamente al catálogo */

    const catalogo =
        document.getElementById(
            "catalogo"
        );


    if (catalogo) {

        catalogo.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* ==========================================================
   ACTUALIZAR TÍTULO DEL CATÁLOGO
========================================================== */

function actualizarTituloCategoria(
    categoria,
    cantidad
) {


    const titulo =
        document.getElementById(
            "categoriaActual"
        );


    if (!titulo) {

        return;

    }


    if (categoria === "Todos") {

        titulo.textContent =

            `Mostrando todos los productos (${cantidad})`;

    }


    else {

        titulo.textContent =

            `${categoria} · ${cantidad} productos`;

    }

}


/* ==========================================================
   SELECT DE CATEGORÍAS
========================================================== */

function filtrarProductos() {


    const select =
        document.getElementById(
            "filtroCategoria"
        );


    if (!select) {

        return;

    }


    filtrarCategoria(
        select.value
    );

}
/* ==========================================================
   BUSCADOR
========================================================== */

function buscarProducto() {


    const buscador =
        document.getElementById(
            "buscador"
        );


    const select =
        document.getElementById(
            "filtroCategoria"
        );


    if (!buscador) {

        return;

    }


    const texto =

        buscador.value

        .toLowerCase()

        .trim();


    const categoria =

        select

        ? select.value

        : "Todos";


    const resultados =

        productos.filter(

            producto => {


                /* Buscar por nombre */

                const nombre =

                    producto.nombre

                    .toLowerCase()

                    .includes(texto);


                /* Buscar por descripción */

                const descripcion =

                    producto.descripcion

                    .toLowerCase()

                    .includes(texto);


                /* Buscar por categoría */

                const categoriaTexto =

                    producto.categoria

                    .toLowerCase()

                    .includes(texto);


                /* Categoría seleccionada */

                const coincideCategoria =

                    categoria === "Todos"

                    ||

                    producto.categoria === categoria;


                return (

                    (
                        nombre

                        ||

                        descripcion

                        ||

                        categoriaTexto
                    )

                    &&

                    coincideCategoria

                );

            }

        );


    mostrarProductos(
        resultados
    );
    const titulo =
        document.getElementById(
            "categoriaActual"
        );


    if (titulo) {

        titulo.textContent =

            `${resultados.length} productos encontrados`;
    }

}

/* ==========================================================
   FAVORITOS
========================================================== */

function toggleFavorito(id) {

    /* Quitar favorito */

    if (
        favoritos.includes(id)
    ) {
        favoritos =

            favoritos.filter(

                productoId =>
                    productoId !== id

            );
    }
    /* Agregar favorito */

    else {


        favoritos.push(id);

    }
    actualizarContadorFavoritos();


    /* Mantener la categoría seleccionada */

    mostrarCategoriaActual();

}

/* ==========================================================
   CONTADOR FAVORITOS
========================================================== */

function actualizarContadorFavoritos() {


    const contador =

        document.getElementById(
            "contadorFavoritos"
        );


    if (contador) {

        contador.textContent =

            favoritos.length;
    }

}

/* ==========================================================
   MOSTRAR FAVORITOS
========================================================== */

function mostrarFavoritos() {


    if (
        favoritos.length === 0
    ) {


        alert(

            "Todavía no tienes productos favoritos 💜"

        );


        return;

    }


    const lista =

        productos.filter(

            producto =>

                favoritos.includes(
                    producto.id
                )

        );


    mostrarProductos(
        lista
    );


    const titulo =

        document.getElementById(
            "categoriaActual"
        );


    if (titulo) {


        titulo.textContent =

            `Mis favoritos · ${lista.length} productos`;

    }


    document
        .getElementById("catalogo")
        ?.scrollIntoView({

            behavior: "smooth"

        });

}


/* ==========================================================
   MOSTRAR CATEGORÍA ACTUAL
========================================================== */

function mostrarCategoriaActual() {


    const select =

        document.getElementById(
            "filtroCategoria"
        );


    const categoria =

        select

        ? select.value

        : categoriaSeleccionada;


    if (
        categoria === "Todos"
    ) {


        mostrarProductos(
            productos
        );

        actualizarTituloCategoria(

            "Todos",

            productos.length

        );

        return;

    }

    const lista =

        productos.filter(

            producto =>

                producto.categoria === categoria

        );

    mostrarProductos(
        lista
    );

    actualizarTituloCategoria(

        categoria,

        lista.length

    );

}
/* ==========================================================
   AGREGAR AL CARRITO
========================================================== */

function agregarCarrito(id) {


    const producto =

        productos.find(

            producto =>
                producto.id === id

        );

    if (!producto) {

        return;

    }

    /* Producto agotado */

    if (
        producto.stock <= 0
    ) {
        alert(

            "Este producto está agotado."

        );
        return;

    }

    /* Buscar si ya está en carrito */

    const existente =

        carrito.find(

            item =>
                item.id === id

        );


    if (existente) {


        /* Verificar stock */

        if (

            existente.cantidad
            <
            producto.stock

        ) {


            existente.cantidad++;

        }
        else {
            alert(

                "No tenemos más unidades disponibles de este producto."

            );
            return;
        }

    }
    else {

        carrito.push({

            ...producto,

            cantidad: 1

        });

    }
    actualizarCarrito();

    abrirCarrito();
}

/* ==========================================================
   AUMENTAR CANTIDAD
========================================================== */

function aumentarCantidad(id) {


    const item =

        carrito.find(

            producto =>
                producto.id === id

        );


    const productoOriginal =

        productos.find(

            producto =>
                producto.id === id

        );
    if (
        !item ||
        !productoOriginal
    ) {
        return;
    }
    if (

        item.cantidad
        <
        productoOriginal.stock

    ) {

        item.cantidad++;

        actualizarCarrito();
    }
    else {


        alert(

            `Solo tenemos ${productoOriginal.stock} unidades disponibles.`

        );

    }

}

/* ==========================================================
   DISMINUIR CANTIDAD
========================================================== */

function disminuirCantidad(id) {

    const item =

        carrito.find(

            producto =>
                producto.id === id

        );

    if (!item) {

        return;
    }

    if (
        item.cantidad > 1
    ) {


        item.cantidad--;

    }
    else {
        eliminarCarrito(id);


        return;

    }


    actualizarCarrito();

}


/* ==========================================================
   ELIMINAR PRODUCTO
========================================================== */

function eliminarCarrito(id) {


    carrito =

        carrito.filter(

            item =>
                item.id !== id

        );


    actualizarCarrito();

}

/* ==========================================================
   ACTUALIZAR CARRITO
========================================================== */
function actualizarCarrito() {


    const contenedor =

        document.getElementById(
            "cartItems"
        );


    const contador =

        document.getElementById(
            "contadorCarrito"
        );


    const totalElemento =

        document.getElementById(
            "cartTotal"
        );


    /* Cantidad total */

    const cantidadTotal =

        carrito.reduce(

            (total, item) =>

                total +
                item.cantidad,

            0

        );

    if (contador) {


        contador.textContent =

            cantidadTotal;

    }
    if (!contenedor) {

        return;

    }


    /* Carrito vacío */

    if (
        carrito.length === 0
    ) {


        contenedor.innerHTML = `

            <div class="empty-cart">

                <span>

                    🛒

                </span>


                <h3>

                    Tu carrito está vacío

                </h3>


                <p>

                    Agrega algunos productos
                    para comenzar.

                </p>

            </div>

        `;


        if (totalElemento) {


            totalElemento.textContent =

                "$0.00";

        }


        return;

    }


    contenedor.innerHTML = "";


    let total = 0;

    carrito.forEach(item => {


        const subtotal =

            item.precio *
            item.cantidad;

        total += subtotal;

        const elemento =

            document.createElement(
                "div"
            );

        elemento.className =

            "cart-product";

        elemento.innerHTML = `

            <!-- FOTO -->

            <div class="cart-product-image">

                <img

                    src="${item.imagen}"

                    alt="${item.nombre}"

                    onerror="
                        this.onerror=null;
                        this.src='https://placehold.co/200x200/f3e8f5/7071BC?text=STYLESTEP';
                    "

                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                        border-radius:12px;
                    "

                >

            </div>


            <!-- INFORMACIÓN -->

            <div class="cart-product-info">


                <h4>

                    ${item.nombre}

                </h4>


                <small>

                    ${item.categoria}

                </small>

                <p>

                    $${item.precio.toLocaleString("es-MX")}

                </p>

                <!-- CANTIDAD -->

                <div class="cantidad-carrito">

                    <button

                        onclick="disminuirCantidad(${item.id})">

                        −

                    </button>

                    <span>

                        ${item.cantidad}

                    </span>

                    <button

                        onclick="aumentarCantidad(${item.id})">

                        +

                    </button>


                </div>


            </div>

            <!-- ELIMINAR -->

            <button

                class="remove-product"

                onclick="eliminarCarrito(${item.id})"

                title="Eliminar producto">

                🗑️

            </button>

        `;

        contenedor.appendChild(
            elemento
        );

    });

    /* Mostrar total */

    if (totalElemento) {


        totalElemento.textContent =

            "$" +

            total.toLocaleString(

                "es-MX",

                {

                    minimumFractionDigits: 2,

                    maximumFractionDigits: 2

                }

            );

    }

}

/* ==========================================================
   ABRIR CARRITO
========================================================== */

function abrirCarrito() {


    const carritoPanel =

        document.getElementById(
            "cartSidebar"
        );

    const overlay =

        document.getElementById(
            "overlay"
        );

    if (carritoPanel) {

        carritoPanel
            .classList
            .add("active");

    }

    if (overlay) {

        overlay
            .classList
            .add("active");

    }

}

/* ==========================================================
   CERRAR CARRITO
========================================================== */

function cerrarCarrito() {

    const carritoPanel =

        document.getElementById(
            "cartSidebar"
        );

    const overlay =

        document.getElementById(
            "overlay"
        );

    if (carritoPanel) {

        carritoPanel
            .classList
            .remove("active");

    }

    if (overlay) {

        overlay
            .classList
            .remove("active");

    }

}

/* ==========================================================
   CUENTAS DE CLIENTE Y PEDIDOS
   Persistencia de demostración mediante localStorage.
========================================================== */
const CLAVE_CUENTAS = "stylestep_cuentas";
const CLAVE_SESION = "stylestep_sesion";

function obtenerCuentas() {
    try { return JSON.parse(localStorage.getItem(CLAVE_CUENTAS) || "[]"); }
    catch (_) { return []; }
}
function obtenerSesion() {
    const correo = localStorage.getItem(CLAVE_SESION);
    return correo ? obtenerCuentas().find(c => c.correo === correo) || null : null;
}
function mostrarCuenta() {
    const modal = document.getElementById("modalCuenta");
    if (modal) { modal.classList.add("active"); actualizarVistaCuenta(); }
}
function cerrarCuenta() {
    const modal = document.getElementById("modalCuenta");
    if (modal) modal.classList.remove("active");
}
function mostrarFormularioCuenta(tipo) {
    const registro = tipo === "registro";
    document.getElementById("formLogin").hidden = registro;
    document.getElementById("formRegistro").hidden = !registro;
    document.getElementById("tabLogin").classList.toggle("active", !registro);
    document.getElementById("tabRegistro").classList.toggle("active", registro);
    document.getElementById("mensajeCuenta").textContent = "";
}
function registrarCuenta(event) {
    event.preventDefault();
    const nombre = document.getElementById("registroNombre").value.trim();
    const correo = document.getElementById("registroCorreo").value.trim().toLowerCase();
    const password = document.getElementById("registroPassword").value;
    const confirmar = document.getElementById("registroPasswordConfirmar").value;
    const mensaje = document.getElementById("mensajeCuenta");
    if (password !== confirmar) { mensaje.textContent = "Las contraseñas no coinciden."; return; }
    const cuentas = obtenerCuentas();
    if (cuentas.some(c => c.correo === correo)) { mensaje.textContent = "Ya existe una cuenta con ese correo. Inicia sesión."; return; }
    cuentas.push({ nombre, correo, password, fechaRegistro: new Date().toISOString() });
    localStorage.setItem(CLAVE_CUENTAS, JSON.stringify(cuentas));
    localStorage.setItem(CLAVE_SESION, correo);
    document.getElementById("formRegistro").reset();
    actualizarVistaCuenta();
    alert("¡Registro exitoso! Tu cuenta se creó correctamente.");
}
function iniciarSesion(event) {
    event.preventDefault();
    const correo = document.getElementById("loginCorreo").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;
    const cuenta = obtenerCuentas().find(c => c.correo === correo && c.password === password);
    const mensaje = document.getElementById("mensajeCuenta");
    if (!cuenta) { mensaje.textContent = "Correo o contraseña incorrectos."; return; }
    localStorage.setItem(CLAVE_SESION, correo);
    document.getElementById("formLogin").reset();
    actualizarVistaCuenta();
}
function cerrarSesion() {
    localStorage.removeItem(CLAVE_SESION);
    actualizarVistaCuenta();
    mostrarFormularioCuenta("login");
}
function actualizarVistaCuenta() {
    const cuenta = obtenerSesion();
    const acceso = document.getElementById("cuentaAcceso");
    const perfil = document.getElementById("cuentaPerfil");
    if (!acceso || !perfil) return;
    acceso.hidden = !!cuenta; perfil.hidden = !cuenta;
    document.getElementById("cuentaDescripcion").textContent = cuenta ? "Aquí puedes consultar tu información y tus compras." : "Crea tu cuenta o inicia sesión para consultar tus compras.";
    if (!cuenta) { document.getElementById("mensajeCuenta").textContent = ""; return; }
    document.getElementById("perfilNombre").textContent = cuenta.nombre;
    document.getElementById("perfilCorreo").textContent = cuenta.correo;
    renderizarPedidosCuenta(cuenta.correo);
}
function renderizarPedidosCuenta(correo) {
    const contenedor = document.getElementById("listaPedidosCuenta");
    const pedidos = JSON.parse(localStorage.getItem("stylestep_pedidos") || "[]").filter(p => String(p.correo).toLowerCase() === correo);
    contenedor.innerHTML = "";
    if (!pedidos.length) { contenedor.innerHTML = '<p class="sin-pedidos">Aún no tienes pedidos asociados a esta cuenta.</p>'; return; }
    pedidos.sort((a,b) => new Date(b.fecha) - new Date(a.fecha)).forEach(p => {
        const tarjeta = document.createElement("article"); tarjeta.className = "pedido-cuenta";
        const encabezado = document.createElement("div"); encabezado.className = "pedido-cuenta-cabecera";
        const numero = document.createElement("strong"); numero.textContent = "Pedido #" + p.numero;
        const estado = document.createElement("span"); estado.className = "estado-pedido " + (p.estado === "cancelado" ? "cancelado" : ""); estado.textContent = p.estado === "cancelado" ? "Cancelado" : p.estado === "registrado" ? "Registrado" : p.estado;
        encabezado.append(numero, estado);
        const detalle = document.createElement("p"); detalle.textContent = `${(p.productos || []).reduce((n,x)=>n+Number(x.cantidad||0),0)} artículo(s) · ${new Date(p.fecha).toLocaleDateString("es-MX")} · ${Number(p.total||0).toLocaleString("es-MX",{style:"currency",currency:"MXN"})}`;
        tarjeta.append(encabezado, detalle);
        if (p.estado === "registrado") { const boton = document.createElement("button"); boton.type = "button"; boton.className = "btn-cancelar-pedido"; boton.textContent = "Cancelar pedido"; boton.addEventListener("click", () => cancelarPedido(p.numero)); tarjeta.append(boton); }
        contenedor.append(tarjeta);
    });
}
function cancelarPedido(numero) {
    const cuenta = obtenerSesion();
    if (!cuenta) { alert("Inicia sesión para cancelar un pedido."); return; }
    const pedidos = JSON.parse(localStorage.getItem("stylestep_pedidos") || "[]");
    const pedido = pedidos.find(p => p.numero === numero && String(p.correo).toLowerCase() === cuenta.correo);
    if (!pedido || pedido.estado !== "registrado") { alert("Este pedido ya no se puede cancelar desde tu cuenta."); return; }
    if (!confirm(`¿Seguro que deseas cancelar el pedido #${numero}?`)) return;
    pedido.estado = "cancelado"; pedido.fechaCancelacion = new Date().toISOString();
    localStorage.setItem("stylestep_pedidos", JSON.stringify(pedidos));
    // Restaurar existencias en el catálogo cargado durante esta sesión.
    (pedido.productos || []).forEach(item => { const producto = productos.find(x => x.id === item.id); if (producto) producto.stock += Number(item.cantidad || 0); });
    if (typeof mostrarCategoriaActual === "function") mostrarCategoriaActual();
    renderizarPedidosCuenta(cuenta.correo);
    alert("El pedido se canceló correctamente.");
}

/* ==========================================================
   FINALIZAR COMPRA
========================================================== */
let descuentoAplicado = false;

const COSTO_ENVIO = 99;


/* =========================================
   ABRIR CHECKOUT
========================================= */

function finalizarCompra() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;
    }

    cerrarCarrito();

    cargarResumenCheckout();

    document
        .getElementById("modalCheckout")
        .classList.add("active");
}


/* =========================================
   CERRAR CHECKOUT
========================================= */

function cerrarCheckout() {

    document
        .getElementById("modalCheckout")
        .classList.remove("active");
}


/* =========================================
   RESUMEN
========================================= */

function cargarResumenCheckout() {

    const contenedor =
        document.getElementById("checkoutProductos");

    contenedor.innerHTML = "";

    let subtotal = 0;


    carrito.forEach(producto => {

        const productoSubtotal =
            producto.precio * producto.cantidad;

        subtotal += productoSubtotal;


        contenedor.innerHTML += `

            <div class="checkout-producto">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <div>
                    <strong>${producto.nombre}</strong>

                    <small>
                        ${producto.cantidad} ×
                        $${producto.precio.toLocaleString("es-MX")}
                    </small>
                </div>

                <span>
                    $${productoSubtotal.toLocaleString("es-MX")}
                </span>

            </div>

        `;
    });


    let descuento = 0;

    if (descuentoAplicado) {
        descuento = subtotal * 0.10;
    }


    const total =
        subtotal + COSTO_ENVIO - descuento;


    document.getElementById("checkoutSubtotal")
        .textContent = formatearDinero(subtotal);


    document.getElementById("checkoutEnvio")
        .textContent = formatearDinero(COSTO_ENVIO);


    document.getElementById("checkoutDescuento")
        .textContent = "-" + formatearDinero(descuento);


    document.getElementById("checkoutTotal")
        .textContent = formatearDinero(total);
}


/* =========================================
   CUPÓN STYLE10
========================================= */

function aplicarCupon() {

    const input =
        document.getElementById("checkoutCupon");

    const mensaje =
        document.getElementById("mensajeCupon");

    const codigo =
        input.value.trim().toUpperCase();


    if (codigo === "STYLE10") {

        descuentoAplicado = true;

        mensaje.textContent =
            "✓ 10% de descuento aplicado.";

        mensaje.className = "cupon-correcto";

        document.getElementById("filaDescuento")
            .style.display = "flex";

    } else {

        descuentoAplicado = false;

        mensaje.textContent =
            "El código ingresado no es válido.";

        mensaje.className = "cupon-error";

        document.getElementById("filaDescuento")
            .style.display = "none";
    }


    cargarResumenCheckout();
}


/* =========================================
   VALIDAR DATOS
========================================= */

function validarCheckout() {

    const nombre =
        document.getElementById("checkoutNombre").value.trim();

    const apellidos =
        document.getElementById("checkoutApellidos").value.trim();

    const correo =
        document.getElementById("checkoutCorreo").value.trim();

    const telefono =
        document.getElementById("checkoutTelefono").value.trim();

    const direccion =
        document.getElementById("checkoutDireccion").value.trim();

    const municipio =
        document.getElementById("checkoutMunicipio").value.trim();

    const cp =
        document.getElementById("checkoutCP").value.trim();


    if (
        nombre === "" ||
        apellidos === "" ||
        correo === "" ||
        telefono === "" ||
        direccion === "" ||
        municipio === "" ||
        cp === ""
    ) {

        alert(
            "Por favor completa todos los datos del pedido."
        );

        return false;
    }


    const correoValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!correoValido.test(correo)) {

        alert(
            "Ingresa un correo electrónico válido."
        );

        return false;
    }


    if (!/^\d{5}$/.test(cp)) {

        alert(
            "El código postal debe contener 5 números."
        );

        return false;
    }


    return true;
}


/* =========================================
   CONFIRMAR PEDIDO
========================================= */

function confirmarPedido() {

    if (!validarCheckout()) {
        return;
    }


    /* Comprobar nuevamente el stock */

    for (const item of carrito) {

        const producto =
            productos.find(
                p => p.id === item.id
            );


        if (
            !producto ||
            producto.stock < item.cantidad
        ) {

            alert(
                `Ya no hay suficientes existencias de ${item.nombre}.`
            );

            return;
        }
    }


    /* DESCONTAR INVENTARIO */

    carrito.forEach(item => {

        const producto =
            productos.find(
                p => p.id === item.id
            );

        producto.stock -= item.cantidad;
    });


    /* GENERAR NÚMERO DE PEDIDO */

    const numero =
        "ST" +
        Math.floor(
            100000 + Math.random() * 900000
        );


    document.getElementById("numeroPedido")
        .textContent = "#" + numero;


    /* GUARDAR PEDIDO PARA CONSULTAR SU SEGUIMIENTO */

    const subtotalPedido = carrito.reduce(
        (suma, item) => suma + (item.precio * item.cantidad), 0
    );
    const descuentoPedido = descuentoAplicado ? subtotalPedido * 0.10 : 0;
    const totalPedido = subtotalPedido + COSTO_ENVIO - descuentoPedido;
    const fechaRegistro = new Date();
    const fechaEntrega = new Date(fechaRegistro);
    fechaEntrega.setDate(fechaEntrega.getDate() + 5);

    const pedidoRegistrado = {
        numero: numero,
        nombre: document.getElementById("checkoutNombre").value.trim(),
        apellidos: document.getElementById("checkoutApellidos").value.trim(),
        correo: document.getElementById("checkoutCorreo").value.trim().toLowerCase(),
        telefono: document.getElementById("checkoutTelefono").value.trim(),
        direccion: document.getElementById("checkoutDireccion").value.trim(),
        municipio: document.getElementById("checkoutMunicipio").value.trim(),
        codigoPostal: document.getElementById("checkoutCP").value.trim(),
        fecha: fechaRegistro.toISOString(),
        entregaEstimada: fechaEntrega.toISOString(),
        estado: "registrado",
        subtotal: subtotalPedido,
        envio: COSTO_ENVIO,
        descuento: descuentoPedido,
        total: totalPedido,
        productos: carrito.map(item => ({
            id: item.id,
            nombre: item.nombre,
            imagen: item.imagen,
            precio: item.precio,
            cantidad: item.cantidad
        }))
    };

    const pedidosGuardados = JSON.parse(
        localStorage.getItem("stylestep_pedidos") || "[]"
    );
    pedidosGuardados.push(pedidoRegistrado);
    localStorage.setItem("stylestep_pedidos", JSON.stringify(pedidosGuardados));
    localStorage.setItem("stylestep_ultimo_pedido", numero);
    if (obtenerSesion() && obtenerSesion().correo === pedidoRegistrado.correo) renderizarPedidosCuenta(pedidoRegistrado.correo);

    /* LIMPIAR CARRITO */

    carrito = [];

    descuentoAplicado = false;


    actualizarCarrito();

    mostrarCategoriaActual();


    /* CERRAR CHECKOUT */

    cerrarCheckout();


    /* MOSTRAR CONFIRMACIÓN */

    document
        .getElementById("modalCompraExitosa")
        .classList.add("active");
}


/* =========================================
   CERRAR COMPRA EXITOSA
========================================= */

function cerrarCompraExitosa() {

    document
        .getElementById("modalCompraExitosa")
        .classList.remove("active");


    document
        .getElementById("catalogo")
        ?.scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================================
   FORMATO DE DINERO
========================================= */

function formatearDinero(cantidad) {

    return cantidad.toLocaleString(
        "es-MX",
        {
            style: "currency",
            currency: "MXN"
        }
    );
}

/* ==========================================================
   CUPÓN
========================================================== */

function copiarCodigo() {


    if (
        navigator.clipboard
    ) {


        navigator.clipboard

            .writeText(
                "STYLE10"
            )

            .then(() => {


                alert(

                    "¡Código STYLE10 copiado! 🎉"

                );

            })

            .catch(() => {


                alert(

                    "Tu código de descuento es: STYLE10"

                );

            });

    }


    else {


        alert(

            "Tu código de descuento es: STYLE10"

        );

    }

}


/* ==========================================================
   NEWSLETTER
========================================================== */

function suscribirse(event) {


    if (event) {

        event.preventDefault();

    }


    alert(

        "¡Gracias por suscribirte a STYLESTEP! 💜\n" +

        "Pronto recibirás nuestras novedades y promociones."

    );


    if (event) {

        event.target.reset();

    }

}


/* ==========================================================
   CERRAR MODAL AL HACER CLIC FUERA
========================================================== */

window.addEventListener(

    "click",

    function(event) {


        const modal =

            document.getElementById(
                "modalCuenta"
            );


        if (

            modal &&

            event.target === modal

        ) {


            cerrarCuenta();

        }

    }

);


/* ==========================================================
   INICIAR STYLESTEP
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    function() {


        /* Mostrar catálogo */

        mostrarProductos(
            productos
        );


        /* Contador favoritos */

        actualizarContadorFavoritos();


        /* Carrito */

        actualizarCarrito();


        /* Título inicial */

        actualizarTituloCategoria(

            "Todos",

            productos.length

        );


        console.log(

            "STYLESTEP cargado correctamente 👟💜"

        );

    }

);