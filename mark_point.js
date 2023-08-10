var starting=document.querySelector("#start");
var canvas=document.querySelector("#preview_image");
var canvas_ctx=canvas.getContext("2d");
var ending=document.querySelector("#end");


var previous_st_x=-1,previous_st_y=-1,pixel_st;

starting.onclick=function() {
    // canvas.addEventListener("click ",(event)=>mark_point(event));
    // canvas.addEventListener("click",function(event) {mark_point(event)});
    canvas.onclick=function(event) {mark_point_st(event)};
}

function mark_point_st(event) {
    
    // if a point has been marked and another click is detected then erase the previous one
    if(previous_st_x>=0 && previous_st_y>=0) {
        canvas_ctx.putImageData(pixel_st,previous_st_x,previous_st_y);
    }
    //get the canvas coordinates
    var coord=canvas.getBoundingClientRect();
    // get the coordinates of the marked point and subtract from canvas coordinates to get relative position
    var x=Math.floor(event.clientX-coord.left);
    var y=Math.floor(event.clientY-coord.top);
    document.querySelector("#st_point").innerHTML="Selected Point : "+ x+" , "+y;

    // get the orignal pixel so that if another click is detected the previous is restored
    pixel_st=canvas_ctx.getImageData(x,y,4,4);
    
    // mark the starting point in green
    canvas_ctx.fillStyle="green";
    canvas_ctx.fillRect(x,y,4,4);
    // update the previous x and y
    previous_st_x=x;
    previous_st_y=y;
    // canvas.onclick=function(event) {mark_point(event)};
}


// var a=-1,b=-1,pixel_end;
var previous_end_x=-1,previous_end_y=-1,pixel_end;
ending.onclick=function() {
    canvas.onclick=function(event) {mark_point_end(event)};
}




function mark_point_end(event,color) {
    // if a point has been marked and another click is detected then erase the previous one
    if(previous_end_x>=0 && previous_end_y>=0) {
        canvas_ctx.putImageData(pixel_end,previous_end_x,previous_end_y);
    }
    //get the canvas coordinates
    var coord=canvas.getBoundingClientRect();
    // get the coordinates of the marked point and subtract from canvas coordinates to get relative position
    var x=Math.floor(event.clientX-coord.left);
    var y=Math.floor(event.clientY-coord.top);
    document.querySelector("#end_point").innerHTML="Selected Point : "+ x+" , "+y;

    // get the orignal pixel so that if another click is detected the previous is restored
    pixel_end=canvas_ctx.getImageData(x,y,4,4);
    
    // mark the starting point in green
    canvas_ctx.fillStyle="red";
    canvas_ctx.fillRect(x,y,4,4);
    //update previous x and y
    previous_end_x=x;
    previous_end_y=y;
    // canvas.onclick=function(event) {mark_point(event)};
}