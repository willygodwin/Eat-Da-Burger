const connection = require('./connection')

 function selectAll(tableInput) {
    const queryString = `SELECT * FROM ?;`
    return new Promise((resolve, reject) => {
                
  
        connection.query(
            queryString,
            [tableInput],
            (err, res) => {
                if (err) {
                    reject(err);
                }
                
            // roleNames = res.map(role => {
            //     return {name: role.title, value: role.id }});
            console.log(res);
            resolve(res)
        });      
    });
 }


function insertOne(tableInput, burgerName) {
    const queryString = `INSERT INTO ?(name, devoured) VALUES(?, false);`
    return new Promise((resolve, reject) => {
                
  
        connection.query(
            queryString,
            [tableInput, burgerName],
            (err, res) => {
                if (err) {
                    reject(err);
                }
                
            // roleNames = res.map(role => {
            //     return {name: role.title, value: role.id }});
            console.log(`Succesfully inserted the burger ${burgerName}, info below ${res}`);
            resolve(res)
        });      
    });

}

function updateOne(burgerID) {

    const queryString = `UPDATE burgers  
    SET devoured = true
    WHERE id = ?;`
    return new Promise((resolve, reject) => {
                
  
        connection.query(
            queryString,
            [burgerID],
            (err, res) => {
                if (err) {
                    reject(err);
                }
                
            // roleNames = res.map(role => {
            //     return {name: role.title, value: role.id }});
            console.log(`Succesfully updated the burger ${burgerID}, info below ${res}`);
            resolve(res)
        });      
    });

}



const orm = {
    selectAll,
    insertOne,
    updateOne, 

}

module.exports = orm