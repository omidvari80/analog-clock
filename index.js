const SECONDHAND = document.querySelector('.second-hand');
const MINSHAND = document.querySelector('.min-hand');
const HOURHAND = document.querySelector('.hour-hand');
      
function setDate() {
  const NOW = new Date();
  const SECONDS = NOW.getSeconds();
  const SECONDSDEGREES = ((SECONDS / 60) * 360) + 90;
  SECONDHAND.style.transform = `rotate(${SECONDSDEGREES}deg)`;

  const MINS = NOW.getMinutes();
  const MINSDEGREES = ((MINS / 60) * 360) + ((SECONDS/60)*6) + 90;
 MINSHAND.style.transform = `rotate(${MINSDEGREES}deg)`;

 const HOUR= NOW.getHours();
  const HOURDEGREES = ((HOUR / 12) * 360) + ((MINS/60)*30) + 90;
  HOURHAND.style.transform = `rotate(${HOURDEGREES}deg)`;
}

setInterval(setDate, 1000);

setDate();
