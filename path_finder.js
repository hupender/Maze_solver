var solver=document.querySelector("#solve");
solver.onclick=function() {
    if(previous_end_x<0 || previous_st_x<0) {
        prompt("Slect both starting and ending points");
    }
    else {
        //both points are marked now solve the maze
        var src_x=previous_st_x , src_y=previous_st_y;
        var dest_x=previous_end_x , dest_y=previous_end_y;
        
    }
}