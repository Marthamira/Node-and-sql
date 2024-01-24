const sqlite3 = require ("sqlite3");
const db = new sqlite3.Database('./db.sqlite');
const md5 = require('md5')
// db.run('CREATE TABLE AverageTemp (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)');
// db.run('INSERT INTO AverageTemp(id, year, temperature) VALUES (1, 2022, 30.6)',(error)=>{
//     if(error){
//         console.log(error)
//     }
// })
// Retriving all rows
// db.all('SELECT * FROM AverageTemp', function(error, rows){
//     if(error){
//         console.log(error)
//         return;
//     }
//     console.log(rows)
// });

//Retriving single row
// db.all('SELECT * FROM AverageTemp', (error, rows)=>{
//     if(error){
//         console.log(error)
//         return;
//     }
//     console.log(rows.find(row=>row.id===1))

// });

// db.get('SELECT * FROM AverageTemp WHERE year=2023', (error, rows)=>{
//     if(error){
//         console.log(error)
//         return;
//     }
//     console.log(rows)

// });

// db.each('SELECT * FROM AverageTemp WHERE year = 2023', (error, row)=>{
//     if(error){
//         console.log(error)
//         return;
//     }
//     console.log(`${row.year} had a temperature of ${row.temperature} `)
// })

// db.serialize((error) => {
//     db.run('DROP TABLE AverageTemp');
//     db.run('CREATE TABLE AverageTemp (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)', (error)=>console.log(error));
//     db.run('INSERT INTO AverageTemp (year, temperature) VALUES (2023, 28.6)', error=>{
//         console.log(error)
//     });
//   });

// db.run(
//     'CREATE TABLE user(id INTEGER PRIMARY KEY, name text, email text UNIQUE, password text)',
//     (err)=>{
//         if(err){
//             console.log(err)
//             return;
//         }
//         const insert = 'INSERT INTO user(name, email, password) VALUES(?,?,?)'
//         db.run(insert, [ admin','admin@example.com', md5("admin12345")])
//         db.run(insert, [ user','user@example.com', md5("user12345")])
//     }
// )

module.exports = db;