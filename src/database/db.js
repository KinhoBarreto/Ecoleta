//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados   
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto do db para nossas operações
// db.serialize(() => {
//     //criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT, 
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT, 
//             city TEXT, 
//             items TEXT
//         );

//     `)


//     //inserir dados

//     const query = `
//         INSERT INTO places (
//             image, 
//             name, 
//             address, 
//             address2, 
//             state, 
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `



//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim America", 
//         "Numero 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletronicos e Lampadas"
//     ]

//     function afterInsertData(erro){ 
//         if(erro){
//             return console.log(erro)
//         }

//         console.log ("Cadastrado com Sucesso")
//         console.log (this)
//     }

//     db.run(query, values, afterInsertData)


//     //consultar dados 

    // db.all(`SELECT * FROM places`, function(erro, rows){
    //     if(erro){
    //         return console.log(erro)
    //     }
    //     console.log ("Aqui estao seus registros")
    //     console.log (rows)
    // })


//    //Deletar dados
//     db.run(`DELETE FROM places WHERE id = ?`, [9], function(erro){
//         if (erro){
//             console.log(erro)
//         }
//         console.log("Registro deletado com sucesso")

//     })

// })
