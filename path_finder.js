var solver=document.querySelector("#solve");
solver.onclick=function() {
    if(previous_end_x<0 || previous_st_x<0) {
        prompt("Slect both starting and ending points");
    }
    else {
        //both points are marked now solve the maze
        canvas_ctx.putImageData(image_data,0,0);
        var src_x=previous_st_x , src_y=previous_st_y;
        var dest_x=previous_end_x , dest_y=previous_end_y;
        var que=new queue();
        lower_x=0,lower_y=0,upper_x=canvas.width,upper_y=canvas.height;
        console.log("source points are : " + src_x + " and " + src_y);
        console.log("destination points are : " + dest_x + " and " + dest_y);
        console.log("lower and upper limits of canvas are : " + lower_x + " , " + lower_y + " , " + upper_x + " , " + upper_y);
        // if(!check_color(src_x,src_y)) {
        //     console.log("Mark starting point again");
        // }
        // if(!check_color(dest_x,dest_y)) {
        //     console.log("Mark ending point again");
        // }
        var parent=[];
        var visited=[];
        for(var i=0;i<upper_x;i++) {
            for(var j=0;j<upper_y;j++) {
                var id=upper_x*i+j;
                parent[id]=undefined;
                visited[id]=false;
            }
        }
        
        que.enqueue(src_x,src_y);
        parent[upper_x*src_x+src_y]=-1;
        visited[upper_x*src_x+src_y]=true;
        console.log("queue size is : " + que.size);
        while(!que.is_empty()) {
            var a=que.front();
            var x_val=a.x;
            var y_val=a.y;
            if(x_val==dest_x && y_val==dest_y) {
                console.log("")
                break;
            }
            if(x_val-1>=lower_x && check_color(x_val-1,y_val) && !visited[upper_x*(x_val-1)+y_val]) {
                parent[upper_x*(x_val-1)+y_val]=upper_x*x_val+y_val;
                visited[upper_x*(x_val-1)+y_val]=true;
                que.enqueue(x_val-1,y_val);
            }
            if(x_val+1<upper_x && check_color(x_val+1,y_val) && !visited[upper_x*(x_val+1)+y_val]) {
                parent[upper_x*(x_val+1)+y_val]=upper_x*x_val+y_val;
                visited[upper_x*(x_val+1)+y_val]=true;
                que.enqueue(x_val+1,y_val);
            }
            if(y_val-1>=lower_y && check_color(x_val,y_val-1) && !visited[upper_x*x_val+(y_val-1)]) {
                parent[upper_x*x_val+(y_val-1)]=upper_x*x_val+y_val;
                visited[upper_x*x_val+(y_val-1)]=true;
                que.enqueue(x_val,y_val-1);
            }
            if(y_val+1<upper_y && check_color(x_val,y_val+1) && !visited[upper_x*x_val+(y_val+1)]) {
                parent[upper_x*x_val+(y_val+1)]=upper_x*x_val+y_val;
                visited[upper_x*x_val+(y_val+1)]=true;
                que.enqueue(x_val,y_val+1);
            }
        }
        // if the destination is visited then it means a path is possible
        if(visited[upper_x*dest_x+dest_y]) {
            console.log("Path exists");
            var dest_id=upper_x*dest_x+dest_y;
            while(dest_id!=-1) {
                fill_color(parent[dest_id]);
                dest_id=parent[dest_id];
            }
        }
        else {
            console.log("Not exist");
        }
    }
}
function check_color(x,y) {
    var img=canvas_ctx.getImageData(x,y,1,1);
    var data=img.data;
    // console.log(data[0]+" , "+data[1]+" , "+data[2]+" , "+data[3]);
    if(data[3]==0 || (data[0]==255 && data[1]==255 && data[2]==255) || (data[0]==255 && data[1]==0 && data[2]==0 && data[3]!=0) || (data[0]==0 && data[1]==128 && data[2]==0 && data[3]!=0)) {
        return true;
    }
    else {
        return false;
    }
}

function fill_color(id) {
    var x=id/upper_x;
    var y=id%upper_x;
    // console.log("X is : "+x+ " and y is : " + y);
    canvas_ctx.fillStyle="blue";
    canvas_ctx.fillRect(x,y,1,1); 
}