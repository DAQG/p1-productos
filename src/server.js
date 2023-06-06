const express = require('express')//importacion el modulo
const path = require('path'); // para las rutas donde estan los archivos 
const { engine }  = require('express-handlebars')
// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views')) // especificacion de vistas
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs' 
}))
app.set('view engine','.hbs')

// Middlewares 
app.use(express.urlencoded({extended:false}))


// Variables globales

// Rutas 
app.get('/',(req,res)=>{
    res.render('index')
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

// Archivos estáticos
app.use(express.static(path.join(__dirname,'public'))) // dirname variable global 
// nunca copiar y pegar la ruta xq no va a dar respuesta

module.exports = app

// para ejecutar el start npm start
// para ejecutar el dev npm run dev