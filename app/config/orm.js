const connection = require('./connection')

 function selectAll(tableInput) {
    const queryString = `SELECT * FROM ${tableInput};`
    return new Promise((resolve, reject) => {
                
  
        connection.query(
            queryString,
            (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                
            // roleNames = res.map(role => {
            //     return {name: role.title, value: role.id }});
            console.log(res);
            resolve(res)
        });      
    });
 }




function insertOne(tableInput, burgerName) {
    const queryString = `INSERT INTO ${tableInput}(name, devoured) VALUES(?, false);`
    return new Promise((resolve, reject) => {
                
  
        connection.query(
            queryString,
            [burgerName],
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

function updateOne(tableInput,burgerID, newDevoured) {
    let queryString = ''
    if(newDevoured){
        queryString = `UPDATE ${tableInput}  
        SET devoured = true
        WHERE id = ?;`
    } else{
        queryString = `UPDATE ${tableInput}  
        SET devoured = false
        WHERE id = ?;`
    }
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