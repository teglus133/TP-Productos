const textoProducto = document.getElementById("producto");
textoProducto.onkeyup = () => {
    if (textoProducto.value != "") {
        boton = document.getElementById("boton");
        boton.classList.remove("disabled")
    }
    else {
        boton.classList.add("disabled")
    }
}

document.getElementById("boton").onclick = () => {
    axios.get(`https://dummyjson.com/products/search?q=${textoProducto.value}`)
    .then(function (response) {
        console.log(response.data);
    })
}

