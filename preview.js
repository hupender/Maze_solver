var input=document.querySelector("#input_image");
input.onchange = function() {get_preview()};
info=document.querySelector("#info");

var canvas=document.querySelector("#preview_image");
var canvas_ctx=canvas.getContext("2d");
var image_data;
function get_preview() {
    var img=new Image();
    img.src=URL.createObjectURL(input.files[0]);
    // img.src=input.src;
    img.height=canvas.height;   
    img.width=canvas.width;
    img.onload=function() { 
        canvas_ctx.drawImage(img,0,0,img.width,img.height);
        image_data=canvas_ctx.getImageData(0,0,canvas.width,canvas.height);
        var data=image_data.data;
        for(var i=0;i<data.length;i+=4) {
            // var avg=(data[i]+data[i+1]+data[i+2])/3;
            // data[i]=avg;
            // data[i+1]=avg;
            // data[i+2]=avg;
            var sum=data[i]+data[i+1]+data[i+2];
            var color_val=0;
            if(sum>383) {
                color_val=255;
            }
            data[i]=color_val;
            data[i+1]=color_val;
            data[i+2]=color_val;
            data[i+3]=255;
        }
        canvas_ctx.putImageData(image_data,0,0);
    }
}


// var canvas=document.querySelector("#preview_image");
// var canvas_ctx=canvas.getContext("2d");

// var input=document.querySelector("#input_image");
// input.addEventListener('change', (event) => {
//     var file=event.target.files[0];
//     var reader=new FileReader();

//     //way 1
//     // reader.addEventListener('load',(event)=> {
//     //     img = new Image();
//     //     img.src=event.target.result;
//     //     img.height=canvas.height;
//     //     img.width=canvas.width;
//     //     img.onload()=function() {
//     //         canvas_ctx.drawImage(img,0,0,img.height,img.width);
//     //     }
//     //     // canvas_ctx.drawImage(img,0,0,img.height,img.width);
//     // });

//     //way 2

//     reader.onload=function(event) {
//         img = new Image();
//         img.src=event.target.result;
//         img.height=canvas.height;
//         img.width=canvas.width;
//         img.onload=function() {
//             canvas_ctx.drawImage(img,0,0,img.width,img.height);
//         }
//     }
//     reader.readAsDataURL(file);
// });


//way 3

// var canvas = document.querySelector("#preview_image");
// var canvas_ctx = canvas.getContext("2d");
// var input = document.querySelector("#input_image");
// // other way
// input.onchange=function() {get_preview()};
// function get_preview() {
//     var file=input.files[0];
//     var reader = new FileReader();
//     reader.onload=function(event) {
//         img = new Image();
//         img.src = event.target.result;
        
//         img.height = canvas.height;
//         img.width  = canvas.width ;
//         img.onload = function(){
//             canvas_ctx.drawImage(img, 0, 0, img.width, img.height);
//         }
//     }
//     reader.readAsDataURL(file);
// }