var starting=document.querySelector("#start");
var canvas=document.querySelector("#preview_image");
var canvas_ctx=canvas.getContext("2d");
starting.onclick=function() {
    canvas.onclick=function(event) {
        var coord=canvas.getBoundingClientRect();
        var x=Math.floor(event.clientX-coord.left);
        var y=Math.floor(event.clientY-coord.top);
        // create a new data pixel
        // var pixel=canvas_ctx.createImageData(1,1);
        // pixel[0]=255;
        // pixel[1]=0;
        // pixel[2]=0;
        // pixel[3]=1;
        // canvas_ctx.putImageData(pixel,x,y);
        // console.log("width is :" + pixel.width + " and height is :"+ pixel.height);

        // var x=event.clientX;
        // var y=event.clientY;
        console.log("X is :"+ x+ " and Y is :" + y + " canavas is :"+ coord.height+ " and :"+ coord.width);
        // var pixel=canvas_ctx.getImageData(x,y,1,1);
        // // var len=pixel.data;
        // // var rec=canvas_ctx.getImageData(0,0,1,1);
        // // rec[0]=0;
        // // rec[1]=255;
        // // rec[2]=0;
        // // rec[3]=255;
        // pixel[0]=255;
        // pixel[1]=0;
        // pixel[2]=0;
        // pixel[3]=255;
        // canvas_ctx.putImageData(pixel,x,y);

        canvas_ctx.fillStyle="green";
        canvas_ctx.fillRect(x,y,5,5);
        // console.log(data.length);      
        
        // console.log("Color is " + data[0] + " "+ data[1]+ " "+data[2]+" " + data[3]);
        
    }
    

}