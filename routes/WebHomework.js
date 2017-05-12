/**
 * Created by ASUS on 2017/5/8.
 */
var express = require('express');
var router = express.Router();
var converse = require('../3D/CoordinateConverse');
var sylvester = require('sylvester');
var perlin = require('perlin-noise');

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


    var result = [];
    for(var i =0;i<ws.length;i++) {
        var re = converse.converse(ws[i].x,ws[i].y,ws[i].z,80,R,C,0.3,0.001,0.001,req.query.width,req.query.height);
        if(re != "error") {
            result.push(re);
        }
    }
    res.send(result);
});
module.exports = router;