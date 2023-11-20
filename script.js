function applyAnimation(rotation) {
  box.style.transition = "transform 0.5s ease-in-out";
  box.style.transform = rotation;
 
}

let currentRotationY = 0; 
let currentRotationX = 0; 


applyAnimation(`rotateY(${currentRotationY}deg) rotateX(${currentRotationX}deg)`);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentRotationY -= 90; 
    applyAnimation(`rotateY(${currentRotationY}deg)`);

  }
  if (event.key === "ArrowLeft") {
    currentRotationY += 90; 
    applyAnimation(`rotateY(${currentRotationY}deg)`);
   
  }
  if (event.key === "ArrowUp") {
    currentRotationX -= 90; 
    applyAnimation(`rotateX(${currentRotationX}deg)`);
   
  }
  if (event.key === "ArrowDown") {
    currentRotationX += 90; 
    applyAnimation(`rotateX(${currentRotationX}deg)`);
   
  }
});
