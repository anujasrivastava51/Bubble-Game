var timer = 60;
var score = 0;
var hitrn = 0;
// To create Bubble with random number
function makeBubble() {
   var clutter = '';

   for (let i = 1; i <= 75; i++) {
      let randomNumber = Math.floor(Math.random() * 10)
      clutter += ` <div class="bubble">${randomNumber}</div>`;
   }
   document.querySelector('#pbtm').innerHTML = clutter;
   pbtm.style.innerHTML = clutter

}

// code for hit 
function getNewHit() {
   hitrn = Math.floor(Math.random() * 10)
   document.querySelector("#hitVal").textContent = hitrn;

}
// code for timer 
// var timer = 60;
function runTimer() {
   let timerInt = setInterval(() => {
      if (timer > 0) {
         timer--
      } else {
         clearInterval(timerInt);
         const container = 

         document.querySelector('#pbtm').innerHTML = `<div id="container">
                            <h1>Time Over</h1>
                            <h1>Your Score:${score}</h1>
                            <button id="btn">Restart</button></div>`

         const btn = document.getElementById("btn");
         btn.addEventListener('click',()=>{
            window.location.reload()
         })
      }
      document.querySelector('#timerValue').textContent = timer;
   }, 1000)

}

// var score = 0
function increaseScore() {
   score += 10;
   document.querySelector('#scoreVal').textContent = score
}


// Event bubbling for playing game 

// event bubbling:-Jispe bhi click karoge wo element par event raise hoga, aur event listner naa milne par event eleent k parent par listner dhundhega,waha bhi naa milne par event parent ke parent ke parent par listener dhundhega

document.querySelector("#pbtm").addEventListener('click', (e) => {
   var clickednum = Number(e.target.textContent);
   if (clickednum === hitrn) {
      increaseScore()
      makeBubble();
      getNewHit();
   }
})

// here in we have made listner to the parent jo ki pbtm hain bubbles kyuki agar bubble pe lagate to 168 baar lagana pdta . 

makeBubble();
getNewHit();
runTimer();




