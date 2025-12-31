let processes = [];
let pid = 1;

function addProcess() {
  const burst = document.getElementById("burst").value;
  if (!burst) return;

  processes.push({ pid: pid++, burst });
  display();
}

function display() {
  const list = document.getElementById("queue");
  list.innerHTML = "";

  processes.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `P${p.pid} - Burst: ${p.burst}`;
    list.appendChild(li);
  });
}

function run() {
  alert("Processes executed in FCFS order.");
}
