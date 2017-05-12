/**
 * Created by ASUS on 2017/4/18.
 */
var express = require('express');
var router = express.Router();


router.get('/getTasks', function(req, res, next) {
    var tasks ={
        name:'',
        id:-1,
        platform:''
    };
    res.send(tasks);
});

router.get('/getTask',function (req,res,next) {
   var taskId = req.query.taskId;
   
});

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.render('task', { title: 'Express' });
});

module.exports = router;