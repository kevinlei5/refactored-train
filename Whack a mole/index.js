const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
const start = document.querySelector('#startbtn');
const stop = document.querySelector('#stopbtn');
const timeCount = document.querySelector('.time-count span')
let startGame, startTime, countDown = 10;
let score = 0 


// start.addEventListener('click', run){

function run() {
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'assets/mole.png'

    img.addEventListener('click', () => {
        score += 1
        scoreEl.textContent = score
        img.src = 'assets/mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500) // how long a mole stays
    
    // function timeLeft() { // timer 
    //     countDown--
    //     console.log(countDown)
    //     timeCount.textContent = countDown
       
    //     if (countDown === 0) {
    //         countDown == 0;
    //         alert('GAME OVER! Your final score is ' + score)
    //     }
    // }
    // let countDownTimerId = setInterval(timeLeft, 1000)
}
    run()

document.addEventListener('DOMContentLoaded', () => {
    
    startTime = setInterval(() => {
        timeCount.innerHTML = countDown;
        countDown--;
        if (countDown === 0) {
            clearInterval(startGame)// how do i restart the game and it keeps ending on second 2
            
            alert('GAME OVER! Your final score is ' + score)
        }
    }, 1000);
    
    
});

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})