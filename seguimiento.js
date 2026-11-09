const formatoDinero = n => Number(n || 0).toLocaleString("es-MX",{style:"currency",currency:"MXN"});
const fechaBonita = valor => new Date(valor).toLocaleDateString("es-MX",{day:"numeric",month:"long",year:"numeric"});

document.getElementById("formSeguimiento").addEventListener("submit", function(e){
  e.preventDefault();
  const numero = document.getElementById("numeroPedido").value.trim().replace(/^#/,"").toUpperCase();
  const correo = document.getElementById("correoPedido").value.trim().toLowerCase();
  const pedidos = JSON.parse(localStorage.getItem("stylestep_pedidos") || "[]");
  const pedido = pedidos.find(p => String(p.numero).toUpperCase() === numero && String(p.correo).toLowerCase() === correo);
  const aviso = document.getElementById("mensajeBusqueda");
  if(!pedido){
    document.getElementById("resultadoPedido").hidden = true;
    aviso.textContent = "No encontramos un pedido con esos datos. Verifica el número y el correo utilizado al comprar.";
    return;
  }
  aviso.textContent = "";
  mostrarPedido(pedido);
});

function mostrarPedido(p){
  document.getElementById("resultadoPedido").hidden = false;
  document.getElementById("pedidoNumero").textContent = "#"+p.numero;
  document.getElementById("estadoEtiqueta").textContent = p.estado === "registrado" ? "Pedido registrado" : p.estado === "cancelado" ? "Pedido cancelado" : p.estado;
  document.getElementById("fechaEntrega").textContent = fechaBonita(p.entregaEstimada);
  const dias = Math.ceil((new Date(p.entregaEstimada).setHours(0,0,0,0)-new Date().setHours(0,0,0,0))/86400000);
  document.getElementById("tiempoRestante").textContent = p.estado === "cancelado" ? "Este pedido fue cancelado y ya no está programado para entrega." : dias > 1 ? `Faltan aproximadamente ${dias} días para la entrega.` : dias === 1 ? "La entrega está estimada para mañana." : dias === 0 ? "La entrega está estimada para hoy." : "La fecha estimada de entrega ya pasó; consulta con la tienda para confirmar el estado.";
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = "";
  (p.productos || []).forEach(item=>{
    const fila=document.createElement("div");
    fila.className="tracking-product";
    const img=document.createElement("img"); img.src=item.imagen || ""; img.alt=item.nombre || "Producto";
    const info=document.createElement("div");
    const nombre=document.createElement("strong"); nombre.textContent=item.nombre;
    const detalle=document.createElement("small"); detalle.textContent=`${item.cantidad} × ${formatoDinero(item.precio)}`;
    const importe=document.createElement("b"); importe.textContent=formatoDinero(item.cantidad*item.precio);
    info.append(nombre,detalle); fila.append(img,info,importe); lista.append(fila);
  });
  document.getElementById("datosCliente").textContent = `${p.nombre || ""} ${p.apellidos || ""} · ${p.correo || ""} · ${p.direccion || ""}, ${p.municipio || ""}, C.P. ${p.codigoPostal || ""}`;
  document.getElementById("resumenSubtotal").textContent=formatoDinero(p.subtotal);
  document.getElementById("resumenEnvio").textContent=formatoDinero(p.envio);
  document.getElementById("resumenDescuento").textContent="-"+formatoDinero(p.descuento);
  document.getElementById("resumenTotal").textContent=formatoDinero(p.total);
  document.getElementById("resultadoPedido").scrollIntoView({behavior:"smooth",block:"start"});
}

window.addEventListener("DOMContentLoaded",()=>{
  const ultimo=localStorage.getItem("stylestep_ultimo_pedido");
  if(ultimo) document.getElementById("numeroPedido").value=ultimo;
});
