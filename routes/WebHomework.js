/**
 * Created by ASUS on 2017/5/8.
 */
var express = require('express');
var router = express.Router();
var converse = require('../3D/CoordinateConverse');
var sylvester = require('sylvester');
var perlin = require('perlin-noise');
var RX = function (a) {
    var cos = Math.cos(a / 180 * Math.PI);
    var sin = Math.sin(a / 180 * Math.PI);
    return $M([
        [1,0,0],
        [0,cos,sin],
        [0,-sin,cos]
    ]);
};
var RY = function (a) {
    var cos = Math.cos(a / 180 * Math.PI);
    var sin = Math.sin(a / 180 * Math.PI);
    return $M([
        [cos,0,-sin],
        [0,1,0],
        [sin,0,cos]
    ]);
};

var RZ = function (a) {
    var cos = Math.cos(a / 180 * Math.PI);
    var sin = Math.sin(a / 180 * Math.PI);
    return $M([
        [cos,sin,0],
        [-sin,cos,0],
        [0,0,1]
    ]);
};

var ws = [
];
var x = -100;
var z = -100;
var noise = perlin.generatePerlinNoise(300,300);
while(x<100) {
    while (z<100) {
        var delta = Math.random() * 3+0.5;
        var y = (noise[Math.floor( (x+100) * 300 + (z+100))]) * 18  ;
        ws.push({
            x:x,
            y:y,
            z:z
        });
        z+=delta;
    }
    z=-100;
    x += Math.random() * 3+0.5;
}
/* GET users listing. */
router.get('/', function(req, res, next) {

    res.render('webHomework');
});
var R= $M([
    [0.67,-0.4,-0.64],
    [0,0.84,-0.52],
    [0.75,0.34,0.56]
]);
var C = $M([
    [3],
    [2.5],
    [-2.6]
]);
router.get('/getStarsPos', function(req, res, next) {


    res.send(ws);
});
var users = [
    {
        name:"liuzhili",
        comment:"刘妹妹是帅哥",
        date:"2017-6-18"
    },
    {
        name:"77777",
        comment:"77即是正义",
        date:"2017-6-18"
    },
    {
        name:"赵益达",
        comment:"是你的益达",
        date:"2017-6-18"
    },
    {
        name:"章皓明",
        comment:"我是一个抖M",
        date:"2017-6-18"
    }
];
router.post('/postUsers', function(req, res, next) {
    users.push(req.body);
    res.send(users);
});
router.get('/getUsers', function(req, res, next) {

    res.send(users);
});
router.get('/moveCamera', function(req, res, next) {
    C = $M([
        [C.e(1,1) + parseInt(req.query.x)],
        [C.e(2,1) + parseInt(req.query.y)],
        [C.e(3,1) + parseInt(req.query.z)]
    ]);
    res.send(C);
});
router.get('/rotateCamera', function(req, res, next) {
    var result = RX(req.query.x).x(R);
    result = RY(req.query.y).x(result);
    R = RZ(req.query.z).x(result);
    res.send(R);
});
module.exports = router;