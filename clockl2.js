var A1 = document.getElementById("myAudio1"); 
var A2 = document.getElementById("myAudio2"); 
var A3 = document.getElementById("myAudio3");
var canvas = document.getElementById("canva1");
var ctx = canva1.getContext("2d");
var radius = canva1.height / 2;
var c_height=canva1.height;
var c_width= canva1.width;
  ctx.translate(radius, radius);
  radius = radius * 0.90;
  var canvas1 = document.getElementById("canva2");
  var ctx1 = canva2.getContext("2d");
  var radius = canva2.height / 2;
  ctx1.translate(radius, radius);
  var canvas2 = document.getElementById("canva3");
  var ctx2 = canva3.getContext("2d");
  var radius = canva3.height / 2;
  ctx2.translate(radius, radius);
  var canvas3 = document.getElementById("canva4");
  var ctx3 = canva4.getContext("2d");
  var radius = canva4.height / 2;
  ctx3.translate(radius, radius);
  var answer_no;
drawClock(12,0);

  //setInterval(drawClock, 1000);
var hr, hr1, hr2, hr3;
    var mn,mn1,mn2,mn3;



var playing=false;
var score;
var timeremaining;
var correctAnswer;
var image_name;
var img_no=4;
var image=[];
var imgload=0;
var bar=document.getElementById("bar");
var head=document.getElementById("head");

for(q=0;q<img_no;q++)
{       
        if(q==0){

            image_name="../images/correct.gif";
         }
        else if(q==1){

            image_name="../images/wrong.gif";
         }
        else if(q==2){

            image_name="../images/back1.png";
         }
        else if(q==3){

            image_name="../images/logo.png";
         }
image[q] = new Image();
            image[q].src =image_name;
            image[q].addEventListener('load',()=>{
                imgload++;
                bar.innerHTML=Math.ceil((100/img_no)*(q))+"%";
                bar.style.width=Math.ceil((100/img_no)*(q))+"%";

            if(imgload+1==img_no){
                
                document.getElementById("progress").classList.add("hide");
                
            }
                
                
            });
    
}

document.getElementById("startreset").onclick=function(){
    
      if(playing==true){
       location.reload();//reloading page 
    }else  { //if we are not playing
        
      //  change mode to playing
        playing=true;
        
        score=0;//set score to zero
        document.getElementById("scorevalue").innerHTML=score;
        //document.getElementById("timeremaining").style.display="block";
        show("timeremaining");

       // hide("startreset");
        document.getElementById("startreset").style.display="block";
            timeremaining=120;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;

        //change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";
        
        startCountdown();
        
       // generate a new Q&A
        generateQA();
        
    } 
        // else
        //     {
        //         //wrong answer
        //         soundPlay("../audio/wrong.mp3");
        //         hide("correct");
        //         show("wrong");
        //         setTimeout(function()
        //         {
        //             hide("wrong");
        //         },1000);
        //     }
        
    }
    function startCountdown(){
    action=setInterval(function(){
        timeremaining-=1;
        
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0)//game over
        {
           stopCountdown();
            swal({
                  title: "Your Score is "+score,
                  text: "Game Over!",
                  
                  button: "Yes, I want to play again!!!",
                  timer: 1500
                });
            A3.play();
            hide("timeremaining");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000);
}

function stopCountdown(){
    clearInterval(action);
}
//document.getElementById("canvas").addEventListener("click", function(){
  // /document.getElementById("canva3").onclick=function(){

  //  document.getElementById("question").innerHTML="hello";
  //  } ;


  function drawClock(hr, hr1, hr2, hr3,mn,mn1,mn2,mn3,sc,sc1,sc2,sc3) {
      ctx.translate(-radius,-radius);
        ctx.clearRect(0, 0, 250, 250); 
        ctx1.translate(-radius,-radius);
        ctx1.clearRect(0, 0, c_width, c_height); 
        ctx2.translate(-radius,-radius);
        ctx2.clearRect(0, 0, c_width, c_height); 
        ctx3.translate(-radius,-radius);
        ctx3.clearRect(0, 0, c_width, c_height); 
  ctx.translate(radius, radius);
  ctx1.translate(radius, radius);
  ctx2.translate(radius, radius);
  ctx3.translate(radius, radius);
//        ctx.translate(-radius,-radius);
//        ctx.clearRect(0, 0, canvas.width, canvas.height);
//    drawFace(ctx, radius);
//    drawNumbers(ctx, radius);
    drawTime(ctx, radius,hr,mn,sc);
//    drawFace(ctx1, radius);
//    drawNumbers(ctx1, radius);
    drawTime(ctx1, radius,hr1,mn1,sc1);
//    drawFace(ctx2, radius);
//    drawNumbers(ctx2, radius);
    drawTime(ctx2, radius,hr2,mn2,sc2);
//    drawFace(ctx3, radius);
//    drawNumbers(ctx3, radius);
    drawTime(ctx3, radius,hr3,mn3,sc3);
    //ctx.translate(-200,-200);
  }
//
// function drawFace(ctx, radius) {
//    var grad;
//    ctx.beginPath();
//    ctx.arc(0, 0, 0, 0, 2*Math.PI);
//    ctx.fillStyle = 'yellow';
//    ctx.fill();
//    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
//    grad.addColorStop(0, 'blue');
//    grad.addColorStop(0.5, 'red');
//    grad.addColorStop(1, 'black');
//    ctx.strokeStyle = grad;
//    ctx.lineWidth = radius*0.1;
//    ctx.stroke();
//    ctx.beginPath();
//    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
//    ctx.fillStyle = 'green';
//    ctx.fill();
//  }
//
//
//  function drawNumbers(ctx, radius) {
//    var ang;
//    var num;
//    ctx.font = radius*0.15 + "px arial";
//    ctx.textBaseline="middle";
//    ctx.textAlign="center";
//    for(num = 1; num < 13; num++){
//      ang = num * Math.PI / 6;
//      ctx.rotate(ang);
//      ctx.translate(0, -radius*0.85);
//      ctx.rotate(-ang);
//      ctx.fillText(num.toString(), 0, 0);
//      ctx.rotate(ang);
//      ctx.translate(0, radius*0.85);
//      ctx.rotate(-ang);
//    }
//  }

  function drawTime(ctx, radius,hour,minute,second){
      
      
      var now = new Date();
      // hour=Math.floor((Math.random() * 12) + 1);

      var hour;
      
      //var minute = now.getMinutes();
      //var second = now.getSeconds();
      var minute ;
      var second;
       hour=hour%12;
       hour=(hour*Math.PI/6)+
       (minute*Math.PI/(6*60))+
       (second*Math.PI/(360*60));
      drawHand(ctx, hour, radius*0.3, radius*0.07);
      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      drawHand(ctx, minute, radius*0.7, radius*0.04);
      // second
      second=(second*Math.PI/30);
      drawHand(ctx, second, radius*0.7, radius*0.02);
  }
  //  function drawTime(hour) {
  //   var hour = []
  // while(arr.length < 1){
  //     var randomnumber = Math.floor(Math.random()*112) + 1;
  //     if(arr.indexOf(randomnumber) > -1) continue;
  //     arr[arr.length] = randomnumber;
  // }
  // document.write(arr);
  // }


  function drawHand(ctx, pos, length, width) {

      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }
  //     function clock(hours) {// We create a new Date object and assign it to a variable called "time".
  // //var time = new Date(),
  //     var hours;
  //     hours=1+Math.round(11*Math.random());
  //     // Access the "getHours" method on the Date object with the dot accessor.
  //     //hours = time.getHours(),
      
  //     // Access the "getMinutes" method with the dot accessor.
  //     //minutes = time.getMinutes(),
      
      
  //     //seconds = time.getSeconds();

  // document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + "clock" ;
    
  //   function harold(standIn) {
  //     if (standIn < 10) {
  //       standIn = '0' + standIn
  //     }
  //     return standIn;
  //   }
  // }
  // setInterval(clock,10000);
  function hide(Id)
{
    document.getElementById(Id).style.display="none";
}

//show element
function show(Id)
{
    document.getElementById(Id).style.display="block";
}

function generateQA(){
var text;
    var txt;
    var x =1+Math.round(11*Math.random());
    var y=1+Math.round(59*Math.random());
    var z=1+Math.round(59*Math.random());
    switch(y) {
    case 5:
      txt="five";
      break;
    case 10:
      txt="ten";
      break;
    case 15:
      txt="fifteen";
      break;
    case 20:
      txt="twenty";
      break;
    case 25:
      txt="twenty-five";
      break;
    case 30:
      txt="thirty";
      break;
    case 35:
      txt="thity-five";
      break;
    case 40:
      txt="Fourty";
      break;
    case 45:
      txt="fourty-five";
      break;
    case 50:
      txt="fifty";
    case 55:
      txt="fifty-five";
      
    }
    
    var hr, hr1, hr2, hr3,mn,mn1,mn2,mn3,sc,sc1,sc2,sc3;
    var answers=[];
    var min=[];
    var sec=[];
    //var y =1+Math.round(9*Math.random());
    
    
    correctAnswer=x;
    if(y==45)
    {
      if(x==12)
      {
      x=1;
      }
      else 
      {
      x=x+1;
      }
      // document.getElementById("question").innerHTML=txt + text
  
}
var x1,y1,z1;
if(x<10){

  x1="0"+x;
}
else{x1=x;}

if(y<10) {
  y1="0"+y;
}
else{y1=y;}


if(z<10) {
  z1="0"+z;
} 
else{z1=z;}
     document.getElementById("question").innerHTML=x1+ ":" +y1+":"+z1 +" (hr:min:sec)";

    var correctPosition = 1+Math.round(3*Math.random());
    //document.getElementById("canva"+correctPosition).innerHTML=correctAnswer;//fill one box with the correct answer
    answer_no = correctPosition;
    answers[correctPosition] = correctAnswer;
    //fill other boxes with wrong answers
    
    //var answers=[correctAnswer];
    for(i=1;i<5;i++)
    {
        if(i !=correctPosition)
            {
                var wrongAnswer;
                do
                {
                    wrongAnswer= (1+Math.round(11*Math.random()));
                }while(answers.indexOf(wrongAnswer)>-1);
                //document.getElementById("canva"+i).innerHTML=wrongAnswer;
                  //"hr" + i = wrongAnswer;
                //answers.push(wrongAnswer);
                answers[i] = wrongAnswer;
            }
    }

    hr = answers[1];
    hr1 =answers[2];
    hr2 = answers[3];
    hr3= answers[4];
     for(i=1;i<5;i++){
      minutes=Math.round(Math.random()*3)*15;
      if(i==correctPosition){
        min[i]=y;}
        else{min[i]=minutes}
    
   mn=min[1];
   mn1=min[2];
   mn2=min[3];
   mn3=min[4];
 

}
   for(i=1;i<5;i++) {
   seconds=1+Math.round(59*Math.random());
   if(i==correctPosition) {
    sec[i]=z;  }
    else{sec[i]=seconds}
      sc=sec[1];
      sc1=sec[2];
      sc2=sec[3];
      sc3=sec[4];
     }        drawClock(hr, hr1, hr2, hr3,mn,mn1,mn2,mn3,sc,sc1,sc2,sc3);

}

   for(i=1; i<5; i++)
{
document.getElementById("canva"+i).onclick=function(){
    //if we are playing
    if(playing==true)
    {
        if(this.id=="canva"+answer_no)
        {
            //correct answer
            
            //increase score by 1
            swal({
              
                        position: 'top-end',
                        title: 'Correct!',
                        icon: '../images/correct.gif',
                        timer: 1000,
                        })
//          soundPlay("audio/correct.mp3");
          score+=10;
          document.getElementById("scorevalue").innerHTML=score;
          A1.play();
//            ctx.translate(-radius,-radius);
//        setTimeout(ctx.clearRect(0, 0, 250, 250),12000);
////            drawTime(ctx, radius,hr,mn);
//        ctx1.translate(-radius,-radius);
//        ctx1.clearRect(0, 0, c_width, c_height); 
//        ctx2.translate(-radius,-radius);
//        ctx2.clearRect(0, 0, c_width, c_height); 
//        ctx3.translate(-radius,-radius);
//        ctx3.clearRect(0, 0, c_width, c_height); 
            //Generate new Q&A

            
        }
            else
            {
                if(this.id!="canva"+answer_no)
        {
            //correct answer
            
            //increase score by 1
            
          document.getElementById("scorevalue").innerHTML=score;

                    swal({
                        position: 'top-end',
                          title: 'Wrong!',
                          icon: '../images/wrong.gif',
                          timer: 1000,
                        })
//            soundPlay("../images/wrong.MP3");
               A2.play();
            }
        
            
    }
        generateQA(); 
}
}
}