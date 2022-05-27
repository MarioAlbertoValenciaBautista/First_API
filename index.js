var {Router} = require('express');
var router = Router();

router.get('/', (req,res) =>{
    res.json({"Objeto": "Se supone que aquí va el valor"});
});

module.exports = router;