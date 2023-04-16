let express = require('express');
let MercadoPago = require('mercadopago');
let app = express();

MercadoPago.configure({
    sandbox: true,
    access_token: "TEST-461854662530850-041616-4b18e8a76d46a21ca43fc457a7277e32-734435291"
});


app.get('/', (req, res) => {
    res.send('Hello Word')
});

app.listen(3000, (req, res) => {
    console.log('Aplicação rodando com sucesso!')
});