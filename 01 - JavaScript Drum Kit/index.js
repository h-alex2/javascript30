const keyElement = document.querySelectorAll(".key");
const kdbElement = document.querySelectorAll(".key");

function playSound(e) {
  let keyName = e.type === "click" ? (e.target.children[0] || e.target).innerText.toLowerCase() : e.key.toLowerCase();
  const key = document.querySelector(`div[data-key=${keyName}]`)
  const audio = document.querySelector(`audio[data-key=${keyName}]`)

  if (!key) return;

  audio.currentTime = 0; //되감기
  audio.play();

  key.classList.add("playing");

}

window.addEventListener("keydown", playSound);
kdbElement.forEach(key => key.addEventListener("click", playSound));
