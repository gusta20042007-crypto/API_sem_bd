    //Importando a biblioteca express
    import express from 'express'

    //Cria uma instância da aplicação Express
    const app = express()


    // Permite receber dados JSON no req.body
    app.use(express.json())

    /*
        Métodos HTTP

        GET    -> Buscar/Listar dados
        POST   -> Criar dados
        PUT    -> Atualizar um recurso completo
        PATCH  -> Atualizar parte de um recurso
        DELETE -> Remover dados

        Uma rota é composta por:
        1) Método HTTP
        2) Endereço (endpoint)

        Exemplo:
        GET /usuarios
        POST /usuarios
    */


    // Array temporário para armazenar usuários (apaga ao reiniciar o servidor)
    const users = []


    // Rota responsável por cadastrar um novo usuário
    app.post('/usuarios', (req, res) =>{

        // req = dados recebidos do cliente
        // body = corpo da requisição

        // Adiciona os dados enviados no corpo da requisição ao array
        users.push(req.body)
        
        // res = resposta enviada ao cliente
        // status(201) = informa que o recurso foi criado com sucesso
        // json(req.body) = retorna os dados recebidos em formato JSON
        res.status(201).json(req.body)
    })


    // Rota responsável por listar todos os usuários cadastrados
    app.get('/usuarios', (req, res) => {

        // Retorna a lista de usuários em formato JSON com status 200 (OK)
        res.status(200).json(users)
    });


    // Inicia o servidor na porta 3000
    app.listen(3000)