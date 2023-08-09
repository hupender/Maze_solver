var input=document.querySelector("#input_image");
input.onchange = function() {get_preview()};

var canvas=document.querySelector("#preview_image");
var canvas_ctx=canvas.getContext("2d");

function get_preview() {
    var img=new Image();
    img.src=URL.createObjectURL(input.files[0]);
    // img.src=input.src;
    img.height=canvas.height;   
    img.width=canvas.width;
    img.onload=function() {
        canvas_ctx.drawImage(img,0,0,img.width,img.height);
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