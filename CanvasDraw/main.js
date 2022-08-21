function draw(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /*ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 55);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 55);*/

    /*ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(25, 30);
    ctx.lineTo(10,20 )
    ctx.fill();*/
    /*ctx.save();
    ctx.translate(30, 30);
    ctx.rotate( (3.14159/180)*(-45) );
    ctx.fillStyle = "rgb(0,0,200)";
    ctx.fillRect(30, 30, 1, 50);
    ctx.restore();
    */
    
    
    ctx.moveTo(10, 10);
    ctx.lineTo( 30, 15);
    ctx.moveTo(45,55);
    ctx.lineTo(60, 75);
    ctx.strokeStyle = "rgb(0, 0, 200)";
    ctx.stroke();



}