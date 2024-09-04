const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para manejar la autenticación
app.set('view engine', 'ejs');``
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/Scripts')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/myRouter'));

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});
