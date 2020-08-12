const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")


//configurar pasta publica
server.use(express.static("public"))

//habilitar uso do req body
server.use(express.urlencoded({extended: true}))


// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server, 
    noCache: true
})


//configurar caminhos da minha aplicação
//pagina inicial
//req = requisição
//res = resposta
server.get("/", (req, res) =>{
    return res.render("index.html")
})

server.get("/create-point", (req, res) =>{
    //req.query: Query Strings da nossa url



    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) =>{

    const query = `
    INSERT INTO places (
        image, 
        name, 
        address, 
        address2, 
        state, 
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(erro){ 
        if(erro){
            console.log(erro)
            return res.send("Erro no Cadastro")
        }

        console.log ("Cadastrado com Sucesso")
        console.log (this)


        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)

    //req.body: Corpo do formulário
    
})




server.get("/search", (req, res) =>{
    const search = req.query.search

    if(search == ""){
        return res.render("search-results.html", {total:0})
    }


    //pegar os dados do db
    
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(erro, rows){
        if(erro){
            return console.log(erro)
        }

        //total de lugares encontrados
        const total = rows.length       


        //mostrar a pagina html com os dados do database
        return res.render("search-results.html", { places: rows, total })
    })



    
})
//ligar o servidor
server.listen(3000)