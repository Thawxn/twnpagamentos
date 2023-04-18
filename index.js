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

app.get('/pay', async (req, res) => {
    let id = '' + Date.now();
    let emailDopagador = 'thawan@gmail.com'

    let dados = {
        items: [
            item = {
                id: id,
                title: '2x xbox 3x camisas',
                quantity: 1,
                currency_id: 'BRL',
                unit_price: parseFloat(150)
            }
        ],
        payer: {
            email: emailDopagador
        },
        external_reference: id
    } 

    try{
        let pagamentos = await MercadoPago.preferences.create(dados);
        console.log(pagamentos);
        res.redirect(pagamentos.body.init_point)
    }catch(err){
        console.log(err.message)
    }

    
})

app.post('/not', (req, res) => {
    console.log(req.query);
    res.send("ok");
})

app.listen(80, (req, res) => {
    console.log('Aplicação rodando com sucesso!')
});