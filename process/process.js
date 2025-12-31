const states = ["new", "ready", "running", "waiting", "terminated"];
let currentIndex = 0;

function nextState() {
  document.querySelectorAll(".state").forEach(s => s.classList.remove("active"));

  document.getElementById(states[currentIndex]).classList.add("active");

  currentIndex = (currentIndex + 1) % states.length;
}
