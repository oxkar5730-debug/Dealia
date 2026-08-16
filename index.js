const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir la aplicación estática
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Dealia está funcionando en el puerto ${PORT}`);
});
