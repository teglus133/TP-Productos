const inputProducto = document.getElementById("producto");
inputProducto.onkeyup = () => {
    if (inputProducto.value != "") {
        boton = document.getElementById("boton");
        boton.classList.remove("disabled")
    }
    else {
        boton.classList.add("disabled")
    }
}

document.getElementById("boton").onclick = () => {
    axios.get(`https://dummyjson.com/products/search?q=${inputProducto.value}`)
    .then(function (response) {
        response.data.products.forEach(element => {
            const listaProductos = document.getElementById("listaProductos")
            const productos = document.createElement("div");
            productos.innerHTML = 
            `<div id="producto" class="card" style="width: 18rem;">
                <img id="imagenProducto" src="${element.thumbnail}" class="card-img-top">
                <div class="card-body">
                <h5 id="tituloProducto"class="card-title">${element.title}</h5>
                <button id="botonVerMas"class="btn btn-success">Ver mas</button>
                </div>
            </div>`
            //const tituloProducto = document.getElementById("tituloProducto")
            //const imagenProducto = document.getElementById("imagenProducto")
            //tituloProducto.innerHTML = 
            //imagenProducto.src = ;
            listaProductos.appendChild(productos);
        });
        
    })
}

botonVerMas = document.getElementById("botonVermas")