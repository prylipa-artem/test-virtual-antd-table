export function fps(id: string) {
  const el = document.getElementById(id);
  if (!el) return void 0;
  if (el.hasAttribute("running")) return void 0;
  el.setAttribute("running", "");
  let previous = Date.now();
  let frameTime = 0;
  let prevFrameTime = 0;
  const filterStrength = 20;
  requestAnimationFrame(function loop() {
    const now = Date.now();
    const currentFrameTime = now - previous;
    frameTime += (currentFrameTime - frameTime) / filterStrength;
    previous = now;
    requestAnimationFrame(loop);
  });
  setInterval(() => {
    if (prevFrameTime === frameTime) {
      prevFrameTime = frameTime;
      return void 0;
    }
    const fps = Math.floor(1000 / frameTime);
    if (fps < 35) {
      el.style.color = "#ef0d4c";
    } else if (fps >= 35 && fps <= 41) {
      el.style.color = "#47b7ec";
    } else {
      el.style.color = "#1bd224";
    }
    el.textContent = `fps: ${Math.floor(fps)}`;
  }, 1000);
}
