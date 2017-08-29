const app = require('./server/config');
const port = 3000;

app.listen(process.env.port || 3000, () => console.log(`O server foi iniciado na porta ${port}`));