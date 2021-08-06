canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 nasa_mars_imgs_array=["nasaimg1.jpg","nasaimg2.jpg","nasaimg3.jpg","mars.jpg"];
 randomNumber=Math.floor(Math.random()*4);
console.log(randomNumber);

rover_width=100;
rover_height=90;
background_image=nasa_mars_imgs_array[randomNumber];
rover_image="rover.png";
rover_x=10;
rover_y=10;

function  add() {
    background_imgTag= new Image();
    background_imgTag.onload= upload_background;
    background_imgTag.src=background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload=upload_rover;
    rover_imgtag.src=rover_image;
}

function upload_background(){

    ctx.drawImage=(background_imgTag,0,0,canvas.width,canvas.height);

}

function upload_rover()
{
    ctx.drawImage=(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed =="38")
    {
        up();
        console.log(up);
    }

    if(keyPressed =="40")
    {
        down();
        console.log(down);
    }
    if(keyPressed =="37")
    {
        left();
        console.log(left);
    }
    if(keyPressed =="39")
    {
        right();
        console.log(right);
    }
     
}

function up(){
    if(rover_y >=0 ){
        rover_y=rover_y-10;
         console.log("when up arrow key is pressed,x= " +rover_x+" y=" +rover_y);
         upload_background();
         upload_rover();         
    }

}

function down(){
    if(rover_y <=500)
    {
        rover_y= rover_y+10;
        console.log("when down arrow key is pressed,x= " +rover_x+ " y=" +rover_y);
        upload_background();
        upload_rover();
    }
}

function left(){
    if(rover_x >=0){

        rover_x= rover_x-10;
        console.log("when left arrow key is pressed,y=" +rover_y+ " x=" +rover_x);
        upload_background();
        upload_rover();
    }
}

function right(){
    if(rover_x <=700){

        rover_x= rover_x+10;
        console.log("when left arrow key is pressed,y=" +rover_y+ " x=" +rover_x);
        upload_background();
        upload_rover();
    }
}