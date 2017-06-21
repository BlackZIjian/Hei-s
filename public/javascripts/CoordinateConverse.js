/**
 * Created by ASUS on 2017/5/8.
 */
var CoordinateConversion = {};

CoordinateConversion.converse = function (x,y,z,l,RC,C,f,dx,dy,width,height) {
    var R = RC.inverse();
    var T = (R.x(C)).x(-1);
    var K = $M([
       [R.e(1,1),R.e(1,2),R.e(1,3),T.e(1,1)],
        [R.e(2,1),R.e(2,2),R.e(2,3),T.e(2,1)],
        [R.e(3,1),R.e(3,2),R.e(3,3),T.e(3,1)],
        [0,0,0,1]
    ]);
    var vw = $M([
        [x],
        [y],
        [z],
        [1]
    ]);
    var vc = K.x(vw);
    if(vc.e(3,1) < 20)
        return "error";
    var m = $M([
        [f,0,0,0],
        [0,f,0,0],
        [0,0,1,0]
    ]);
    var zv = (m.x(vc)).x(1 / vc.e(3,1));

    var m2 = $M([
        [1/dx,0,width/2],
        [0,1/dy,height/2],
        [0,0,1]
    ]);

    var result = m2.x(zv);
    return {
        u:result.e(1,1),
        v:result.e(2,1),
        l:l*f/vc.e(3,1)
    }
};