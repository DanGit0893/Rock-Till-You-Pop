let girlHeight = 225;
let girl = document.getElementById("Girl")
let boyHeight = 225;
let boy = document.getElementById("Boy")
let girlTotal = 0;
let boyTotal = 0;


class Player {
    constructor(){
        this.name =""
        
    }

}

const boyPlayer = new Player();
const girlPlayer = new Player ();


    
const game = {
    startGame(){
        let startDiv = document.getElementById("start")
        let gameCanvas = document.getElementById("game")
        let gameOver = document.getElementById("game-over")
        startDiv.style.display = "none"
        gameCanvas.style.display = "block"
        gameOver.style.display = "none"
        game.setName()
    },
    gameOver(){
        let startDiv = document.getElementById("start")
        let gameCanvas = document.getElementById("game")
        let gameOver = document.getElementById("game-over")
        startDiv.style.display = "none"
        gameCanvas.style.display = "none"
        gameOver.style.display = "block"
        
    
    },
    resetGame(){
        location.reload()

    },
   
    girlGetBigger (){
        girlHeight += 5
        girl.height = girlHeight
        girlTotal += 1
    },
    boyGetBigger () {
        boyHeight += 5
        boy.height = boyHeight
        boyTotal += 1
    },
    setName(){
        girlPlayer.name = prompt("Enter a name for the girl avatar:")
        boyPlayer.name = prompt("Enter a name for the boy avatar:")
        const girlID = document.getElementById("girlTitle")
        const boyID = document.getElementById("boyTitle")
        girlID.innerText = `${girlPlayer.name}`
        boyID.innerText = `${boyPlayer.name}`
        console.log(girlID)


    },
    boyWins(){
        alert(`${boyPlayer.name} wins!`)
        game.gameOver()
        
    },
    girlWins(){
        alert(`${girlPlayer.name} wins!`)
        game.gameOver()
        
        
    },
        
    
}



window.addEventListener("keyup", function(event){
    if (event.key === "a"){
        game.boyGetBigger()
        console.log(boy)
        console.log(boyTotal)
        }
        
        if(boyTotal === 70){
            boy.classList.add("popout")
            setTimeout(() => {
                game.girlWins()
            }
            ,900)
        }

    }
)
window.addEventListener("keyup", function(event){
    if (event.code === "ArrowDown"){
        game.girlGetBigger()
        console.log(girl)
        console.log(girlTotal)
        }
        
        if(girlTotal === 70){
            girl.classList.add("popout")
            setTimeout(() => {
                game.boyWins()
            }
            ,900)
        }
    }
)



    