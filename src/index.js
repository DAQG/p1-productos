const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("Landing page - Grupo 5")
})

app.get('/integrantes', (req,res)=>{
    res.json([
        {
            "nombre": "Daniel",
            "apellido": "Quishpe",
            "edad": 21
        },
        {
            "nombre": "Danny",
            "apellido": "Vinueza",
            "edad": 20
        },
        {
            "nombre": "Carolina ",
            "apellido": "Alvarado",
            "edad": 21
        },
        {
            "nombre": "Nestor ",
            "apellido": "Chumania",
            "edad": 21
        }
    ])
})
app.get('/products',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
    `)
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
