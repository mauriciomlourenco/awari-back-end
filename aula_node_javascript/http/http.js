// HTTP é um módulo/biblioteca que facilita criar um servidor que escuta em uma porta determinada

//import { createServer } from 'http';
const http = require('http');

// criar servidor
http.createServer(function (req, res){
    //res.write('Primeiro Servidor/ Serviço', 'utf-8');
    //res.write(req.url);
    if(req.url == '/primeirarequest'){
        res.write('Rota da primeira requisicao');
        res.end();
    } else {
        res.statusCode = 400;
        res.write('Deu erro, recurso não disponível');
        res.end();
    }
    
}).listen(8080);