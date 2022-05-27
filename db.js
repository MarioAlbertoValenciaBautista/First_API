    var mysql = require("mysql2");
    var conexion = mysql.createConnection({
        host: 'localhost',
        database: 'familiares',
        user: 'root',
        password: '786101'
    });

    conexion.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log("conetsion etsitosa");
        }
    });

   /* conexion.hermana(function(){
        conexion.query('SELECT * from hermanas', function(error,results, fields){
            if (error){throw error;}
    
            results.forEach(result =>{
                console.log(result);
            });
        });
        return results;
    });*/

    //para obtener consulta de la DB
    /*conexion.query('SELECT * from hermanas', function(error,results, fields){
        if (error){throw error;}

        results.forEach(result =>{
            console.log(result);
        });
    });*/

   module.exports = conexion;