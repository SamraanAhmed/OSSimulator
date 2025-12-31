function simulatePaging() {
  const ref = document.getElementById("refString").value.split(",").map(Number);
  const frameCount = parseInt(document.getElementById("frames").value);
  const frames = [];
  let pageFaults = 0;
  let displayDiv = document.getElementById("framesDisplay");
  displayDiv.innerHTML = "";

  ref.forEach((page, idx) => {
    const frameDiv = document.createElement("div");
    frameDiv.classList.add("frame");

    if (!frames.includes(page)) {
      // Page fault
      if (frames.length < frameCount) {
        frames.push(page);
      } else {
        frames.shift(); // FIFO replacement
        frames.push(page);
      }
      pageFaults++;
      frameDiv.classList.add("fault");
    } else {
      // Page hit
      frameDiv.classList.add("hit");
    }

    frameDiv.innerText = page;
    displayDiv.appendChild(frameDiv);

    document.getElementById("pageFaults").innerText = pageFaults;
  });
}
