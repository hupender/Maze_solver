var starting=document.querySelector("#start");
var canvas=document.querySelector("#preview_image");
var canvas_ctx=canvas.getContext("2d");
// var st_color="green";

starting.onclick=function() {
    // canvas.addEventListener("click ",(event)=>mark_point(event));
    // canvas.addEventListener("click",function(event) {mark_point(event)});
    canvas.onclick=function(event) {mark_point(event)};
}

var x=-1,y=-1,pixel;
function mark_point(event) {
    
    // if a point has been marked and another click is detected then erase the previous one
    if(x>=0 && y>=0) {
        canvas_ctx.putImageData(pixel,x,y);
    }
    //get the canvas coordinates
    var coord=canvas.getBoundingClientRect();
    // get the coordinates of the marked point and subtract from canvas coordinates to get relative position
    x=Math.floor(event.clientX-coord.left);
    y=Math.floor(event.clientY-coord.top);

    // get the orignal pixel so that if another click is detected the previous is restored
    pixel=canvas_ctx.getImageData(x,y,5,5);
    
    // mark the starting point in green
    canvas_ctx.fillStyle="green";
    canvas_ctx.fillRect(x,y,5,5);
    canvas.onclick=function(event) {mark_point(event)};
}