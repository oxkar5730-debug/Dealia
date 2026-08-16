const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la raíz (igual que Fixia)
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Dealia escuchando en el puerto ${port}`);
});
