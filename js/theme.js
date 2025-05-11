let colorIndex = 0;
const colors=['red', 'green', 'orange','blue','gray'];

document.getElementById('theme-color').addEventListener('click',function(event){
  event.preventDefault();

  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex++;
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  } else {
    console.log(colors[colorIndex]);
  }
})