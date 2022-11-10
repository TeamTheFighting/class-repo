document.addEventListener('mousemove', mouseMoveHandler);
function mouseMoveHandler(e) {
  if (e.pageX <= e.view.innerWidth - 60 && e.pageY <= e.view.innerHeight - 65) {
    mouse.style.left = e.pageX + 10 + 'px';
    mouse.style.top = e.pageY + 15 + 'px';
  }
}
