async function getProductos(){
    const res = await fetch("http://localhost:4000/productos");
    const resJson = await res.json();
    return resJson;
}