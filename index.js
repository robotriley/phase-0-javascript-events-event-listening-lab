function addingEventListener() {
    const input = document.getElementById('button');

input.addEventListener('click', clickAlert);

function clickAlert() {
    alert('I was clicked!');
  }
}
addingEventListener();

/* const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert); */