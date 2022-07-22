const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const pausetBtn = document.querySelector("#pauseBtn");
const AitBtn = document.querySelector("#AiBtn");


const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
let paddleSpeed = 5;
let intervalID;
let ballSpeed;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
};
let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
};
let AiAlive =true;
let fastAi =30;
// this might be in the objetc
let upping1 = false
let downing1 = false
let upping2 =false
let downing2=false
let paused=false
let count=0
//key donw, key up and next tick ==move
window.addEventListener("keydown", changeDirection);
window.addEventListener("keyup", changeDirectionstop);

resetBtn.addEventListener("click", resetGame);
pausetBtn.addEventListener("click",()=>{
    paused ? paused=false :paused=true
 })
AitBtn.addEventListener("click",()=>{
    resetGame()
    fastAi =30;
    AiAlive ? AiAlive=false :AiAlive=true

})

gameStart();

function gameStart(){
    createBall();
    nextTick();
};
function nextTick(){
    intervalID = setTimeout(() => {
         
        clearBoard();
        drawPaddles();
        
        drawBall(ballX, ballY);  
       
        checkCollision();
        if(!paused){
            if(AiAlive){
                if(count>fastAi){
                    ai()
                    count=0

                }else{
                    count+=1
                }

            }
            moveBall();
            movePaddles()

        }
        nextTick();

    }, 16.6)
};
function ai(){
    
 if(Math.abs(paddle2.y+paddle2.height/2-ballY)<10){
    upping2=false
    downing2=false
 }else{
     
     if(ballY<paddle2.y+paddle2.height/2){
        upping2=true
        downing2=false
    
     }
     if(ballY>paddle2.y+paddle2.height/2){
        downing2=true
        upping2=false
     }
 }   
}
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function drawPaddles(){
    ctx.strokeStyle = paddleBorder;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    ctx.fillStyle = paddle2Color;
    if(AiAlive){ctx.fillStyle=`hsl(0, ${100}%, ${fastAi*1}%)`}
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};
function createBall(){
    ballSpeed = 3;
    paddleSpeed =5
    if(Math.round(Math.random()) == 1){
        ballXDirection =  1; 
    }
    else{
        ballXDirection = -1; 
    }
    if(Math.round(Math.random()) == 1){
        ballYDirection = Math.random() * 1; //more random directions
    }
    else{
        ballYDirection = Math.random() * -1; //more random directions
    }
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX, ballY);
};
function moveBall(){
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballYDirection);
};
function drawBall(ballX, ballY){
    if(!paused){
    ctx.fillStyle = ballColor;
    }else{
        ctx.fillStyle = "white";

    }
    ctx.strokeStyle = ballBorderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};
function checkCollision(){
    if(ballY <= 0 + ballRadius){
        ballYDirection *= -1;
    }
    if(ballY >= gameHeight - ballRadius){
        ballYDirection *= -1;
    }
    if(ballX <= 0){
        player2Score+=1;
        fastAi +=5
        updateScore();
        createBall();
        return;
    }
    if(ballX >= gameWidth){
        player1Score+=1;
        fastAi +=-5

        updateScore();
        createBall();
        return;
    }
    if(ballX <= (paddle1.x + paddle1.width + ballRadius)){
        if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
            ballX = (paddle1.x + paddle1.width) + ballRadius; // if ball gets stuck
            ballXDirection *= -1;
            ballSpeed += 1;
            paddleSpeed +=.5
           
            
        }
    }
    if(ballX >= (paddle2.x - ballRadius)){
        if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
            ballX = paddle2.x - ballRadius; // if ball gets stuck
            ballXDirection *= -1;
            ballSpeed += 1;
          paddleSpeed +=.5

        }
    }
};
function changeDirection(event){
    //to do it better needs a keydown and up
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    
        const paddle2Up = 38;
        const paddle2Down = 40;

    //code of ws & up down

    switch(keyPressed){
        case(paddle1Up):
           // if(paddle1.y > 0){
                upping1 =true                //
           // }
            break;
            case(paddle1Down):
           // if(paddle1.y < gameHeight - paddle1.height){
                 downing1 =true
                //
           // }
            break;
            case(paddle2Up):
           // if(paddle2.y > 0){
            if(!AiAlive){
                upping2 =true               //
            }
           // }
            break;
            case(paddle2Down):
           // if(paddle2.y < gameHeight - paddle2.height){
            if(!AiAlive){

                downing2=true               //
            }
           // }
            break;
    }
};
function changeDirectionstop(event){
    //to do it better needs a keydown and up
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;
    //code of ws & up down

    switch(keyPressed){
        case(paddle1Up):
            //if(paddle1.y > 0){
                 upping1 =false                //paddle1.y -= paddleSpeed;
            //}
            break;
            case(paddle1Down):
            //if(paddle1.y < gameHeight - paddle1.height){
                 downing1 =false
                //paddle1.y += paddleSpeed;
           // }
            break;
            case(paddle2Up):
            //if(paddle2.y > 0){
                 upping2 =false             //paddle2.y -= paddleSpeed;
            //}
            break;
            case(paddle2Down):
            //if(paddle2.y < gameHeight - paddle2.height){
                 downing2=false               //paddle2.y += paddleSpeed;
            //}
            break;
    }
};
function movePaddles(){
    if(upping1 && paddle1.y > 0){
        paddle1.y -= paddleSpeed;
    }
    if(downing1 && paddle1.y < gameHeight - paddle1.height){
        paddle1.y += paddleSpeed;
    }
    if(upping2 && paddle2.y > 0){
        paddle2.y -= paddleSpeed;
    }
    if(downing2 && paddle2.y < gameHeight - paddle2.height){
        paddle2.y += paddleSpeed;
    }
    //conditions in move
};
function updateScore(){
    scoreText.textContent = `${player1Score} : ${player2Score}`;
};
function resetGame(){
    paused=false
    player1Score = 0;
    player2Score = 0;
    paddle1 = {
        width: 25,
        height: 100,
        x: 0,
        y: 0
    };
    paddle2 = {
        width: 25,
        height: 100,
        x: gameWidth - 25,
        y: gameHeight - 100
    };
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    ballXDirection = 0;
    ballYDirection = 0;
    updateScore();
    clearInterval(intervalID);
    gameStart();
};