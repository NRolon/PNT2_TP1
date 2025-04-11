const productos = [  
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
    ]; 

    // Acceder a propiedades individuales: 

    const primerNombreDelObj = productos[0].nombre

    console.log(primerNombreDelObj)

    // Recorrido con for...of: 

    const largoArray = productos.length
    console.log(largoArray)

    for (i=0 ; i < productos.length ; i++) {

        console.log("El nombre del producto: " + productos[i].nombre + " tiene un precio de: $" + productos[i].precio )
    }

    // con for.. of

    for (const producto of productos) {
        
        console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
    }

    // Recorrido con .forEach(): 

    
    productos.forEach(producto => {
        
        console.log(`El producto: ${producto.nombre} - Tiene un Precio: $${producto.precio}`);
    });

    // Obtener solo los nombres con .map(): 

    const nuevoArray = productos.map(p =>
        p.nombre
    )

    console.log("El nuevo array es: ", nuevoArray)

    // Filtrar por categoría con .filter(): 

    const nuevoArray2 = productos.filter( p => p.categoria === "Ropa"    )
    
    
    console.log("El nuevo array filtrado es: " , nuevoArray2)

    // Filtrar por precio con .filter(): 

    const nuevoArray3 = productos.filter( p => p.precio > 3000)
    
    console.log("El nuevo array filtrado por precio es: " , nuevoArray3)

    // Buscar un producto específico con .find(): 

    const nuevoArray4 = productos.find( p => p.nombre === "Gorra")

    console.log("El nuevo array con la busqueda de palabra Gorra es: " , nuevoArray4)


    // Verificar con .some():
    
    const resultadoBusquedaPrecio = productos.some ( p => p.precio > 10000 )

    console.log("El resultado de la busqueda es: ", resultadoBusquedaPrecio)

    //  Verificar con .every(): 

    const resultadoVerificacion = productos.every ( p => p.precio > 1000 )
    
    console.log("El resultado de la verificacion es: ", resultadoVerificacion)

    //  Verificar existencia con .includes():

    const resultadoExistencia = nuevoArray.includes("Campera")

    console.log("El nuevo array es: " ,nuevoArray)
    console.log("El resultado de la existencia es: ", resultadoExistencia)

    // . Ordenar con .sort(): 

    productos.sort((a, b) => a.precio - b.precio);

    console.log("Productos ordenados de menor a mayor precio", productos)

    // Generar mensajes personalizados con .map():

    const mensajesPersonalizados = productos.map(p => 
        `El producto ${p.nombre} cuesta $${p.precio} y pertenece a la categoría ${p.categoria}.`
      );

    console.log(mensajesPersonalizados)

    // Agregar productos con spread: 

    const nuevoProductoAAgregar = { id: 7, nombre: "Campera", precio: 12000, categoria: "Ropa" };

    const listaActualizada =  [...productos, nuevoProductoAAgregar]

    console.log(listaActualizada)