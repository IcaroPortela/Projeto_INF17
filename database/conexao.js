const mysql = require("mysql2")
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'MeuGame'
})
class Database {

    createDatabase(db) {
        con.query(`create database ${db}`, () => {
            console.log('Banco de dados criado!')
        })
    }

    createTable(table, props) {
        con.query(`create table ${table}(${props})`, () => {
            console.log(`${table} criada com sucesso!`)
        })
    }

    insert(v1, v2, v3, v4, v5, v6, v7, v8) {
        con.query(`insert into usuario(nome, senha, idade, itens, coins, jews, sexo, email)\
        values('${v1}', '${v2}', '${v3}', ${v4}, ${v5}, ${v6}, '${v7}', '${v8}')`)
    }

    deleteData(props, values) {
        con.query(`delete from usuario where = ${props} = ${values}`)
    }
    
    select() {
        con.query('select senha as senha from usuario', (err, rows, fields) => {
            if (err) throw err;
            for (let i in rows) {
                console.log(rows[i])
            }
            return rows
        })
    }
    update(atributo, v1, v2) {
        con.query(`update usuario set ${atributo}= ${v1} where ${atributo} = ${v2}`)
    }
}

module.exports = Database;