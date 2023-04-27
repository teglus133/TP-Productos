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
    const listaProductos = document.getElementById("listaProductos")
    listaProductos.innerHTML = ""
    axios.get(`https://dummyjson.com/products/search?q=${inputProducto.value}`)
    .then(function (response) {
        response.data.products.forEach(element => {
            
            const productos = document.createElement("div");
            productos.classList.add("col-sm-3");
            productos.innerHTML = 
            `
            <div id="producto" class="card">
                <img id="imagenProducto" src="${element.thumbnail}" height="250px" width="auto" class="card-img-top">
                <div class="card-body">
                <h5 id="tituloProducto"class="card-title">${element.title}</h5>
                <button id="botonVerMas"class="btn btn-success" onclick="verMas('${element.id}')"data-bs-toggle="modal" data-bs-target="#exampleModal"">Ver mas</button>
                </div>
            </div>`
            listaProductos.appendChild(productos);            
        });

    })
}

const verMas = (id) => {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
        tituloModal = document.getElementById("tituloModal");
        descripcionModal = document.getElementById("descripcionModal");
        precioModal = document.getElementById("precioModal");
        ratingModal = document.getElementById("ratingModal");
        stockModal = document.getElementById("stockModal");
        tituloModal.innerHTML = response.data.title;
        descripcionModal.innerHTML = `Descripcion: ${response.data.description}`;
        precioModal.innerHTML =`Precio: ${response.data.price}`;
        ratingModal.innerHTML = `Rating: ${response.data.rating}`;
        stockModal.innerHTML = `Stock: ${response.data.stock}`;
    }
    )
}



