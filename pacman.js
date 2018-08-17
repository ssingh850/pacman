let pelletCount = document.querySelectorAll(".pellet")
let fruitCount = document.querySelectorAll(".fruit")
let player= document.querySelector("#player")
let clearbox= document.querySelector("#clearbox")
let clearbox1= document.querySelector("#clearbox1")
let pDisplay = document.querySelector("#pelletDisplay")
let ghost1= document.querySelecetor("#ghost1")
let ghost2= document.querySelecetor("#ghost2")
let ghost3= document.querySelecetor("#ghost3")
let ghost4= document.querySelecetor("#ghost4")
let counter = 0
var sound1 = new Audio('pacman_chomp.mp3')
var sound2 = new Audio('pacman_eatfruit.mp3')
var sound3 = new Audio('pacman_eatghost.mp3')

<!-- Pellet Counter-->
    pelletCount.forEach(pellet => {
        pellet.addEventListener("collide", e => {
            sound1.play();
            counter += 1
            if (counter==1) {
                pDisplay.innerHTML=`You've eaten ${counter} pellet!`
                
            }
            
            if (counter> 1) {
                pDisplay.innerHTML=`You've eaten ${counter} pellets!`
            }
            
            pellet.setAttribute("position", "-5 -5 -5")
            if(counter==30){
                pDisplay.innerHTML=`You've eaten all the pellets! You win.`
            }
        })
    })
//Fruit counter
    fruitCount.forEach(fruit => {
        fruit.addEventListener("collide", e => {
            console.log("fruit works")
            sound3.play();
        fruit.setAttribute("position", "-5 -5 -5")
        counter += 25
        pDisplay.innerHTML=`You've eaten ${counter} pellets!`
        })
    })


///teleportation    
clearbox.addEventListener("collide", e => {
    sound2.play();
    player.setAttribute("position", "-300 0 0")  
})

clearbox1.addEventListener("collide", e => {
    sound2.play();
    player.setAttribute("position", "300 0 0")  
})


//move Ghosts

// ghost1.innerHTML += <a-animation attribute="position" begin="2000" from="1 1 1" to="2 4 -8" dur="10000" repeat="indefinite"></a-animation>


// // <a-animation attribute="position" begin="2000" from="50 -1.75 1" dur="10000" repeat="indefinite"></a-animation>`













