const express = require('express');
const app = express();

const arregloUsuarios = {
    usuarios: [
        "Juan",
        "Maria",
        "Francisca",
        "Pedro"
    ]
};

app.use(express.static('public'));

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const usuario = req.params.usuario;
    const usuarioExiste = arregloUsuarios.usuarios.find((usuarioTemporal) => {
        return usuarioTemporal == usuario;
    });
    if(usuarioExiste){
        next();
    }else{
        res.sendFile(__dirname + '/public/template/who.html');
    }
});

app.get('/abracadabra/usuarios', (req, res) => {
    res.json(arregloUsuarios);
});



app.listen(3000);