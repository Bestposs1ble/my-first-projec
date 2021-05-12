let express = require ('express');
let router = express.Router();

router.get('/',(req,res) => {
    res.render('login')
});
router.post('/login',(req,res) =>{
    let name = req.body.name;
    let pass  =req.body.pass;
    if(req.session.user !=undefined && name == req.session.user.name
        && pass == req.session.user.pass
    ){
        res.send("success");
    }
    else{
        res.send("fail");
    }
})

module.exports = router;