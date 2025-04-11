const productos = [  
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
    ]; 

    // parte 1 a

    const primerNombreDelObj = productos[0].nombre

    console.log(primerNombreDelObj)

    // parte 1b

    const largoArray = productos.length
    console.log(largoArray)

    for (i=0 ; i < productos.length ; i++) {

        console.log("El nombre del producto: " + productos[i].nombre + " tiene un precio de: $" + productos[i].precio )
    }

    // con for.. of

    for (const producto of productos) {
        
        console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
    }

    // parte 1 c

    
    productos.forEach(producto => {
        
        console.log(`El producto: ${producto.nombre} - Tiene un Precio: $${producto.precio}`);
    });