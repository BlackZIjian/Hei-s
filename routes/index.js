var express = require('express');
var router = express.Router();


router.get('/getCurrentGame', function(req, res, next) {
    var currentGame ={
        name:'Zelda',
        video_url:'http://ojcwyb2ht.bkt.clouddn.com/The%20Legend%20of%20Zelda.MP4',
        url:'https://www.nintendo.co.jp/zelda/',
        description:'《塞尔达传说：荒野之息（The Legend of Zelda: Breath of the Wild）》给玩家带来相当棒的自由与冒险的氛围。游戏的初期，你就可以自由地探索海拉尔大陆的每一个角落。接着你便会不停发现能够勾起你兴趣的神秘地标、复杂的隐藏谜题、可以斩获财宝与武器的敌人营地。你可以自由选择探索方向，并且完全不会被主线所干扰，荒野之息更迷人的一点是他将整个游戏系统与复杂而又相对简单的生存游戏优雅地融合在了一起。我已经游玩了将近50个小时，但是我还是有大量神奇的精巧谜题和未知地点没有去探索。每次放下游戏机之后我都会迫不及待数着还有多久才能够回海拉尔山脉。'
    };
    res.send(currentGame);
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
