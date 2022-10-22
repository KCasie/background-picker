// ATTEMPT ONE


// document.querySelector('#purple').onclick = partyPurple;


// function partyPurple() {
//   document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1594222082006-37e1b3c41243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')";
// }







// ATTEMPT TWO


document.querySelector('#purple').onclick = partyPurple;
document.querySelector('#green').onclick = partyGreen;
document.querySelector('#blue').onclick = partyBlue;
document.querySelector('#pink').onclick = partyPink;

function partyPurple() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1594222082006-37e1b3c41243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')";
  document.body.style.color = "orange";
};

function partyGreen() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1618599512101-da54d87556b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80')";
  document.body.style.color = "black";
};

function partyBlue() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1546457028-6dcb9863fc1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
  document.body.style.color = "#33d633";
};

function partyPink() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1546457028-48b8bc63fe98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
  document.body.style.color = "white";
};




























// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue
// document.getElementById('pink').onClick = partyPink

// const body = document.querySelector('body');

// function partyPurple() {
//   body.style.backgroundColor = 'rgba(241,63,247,1)'
//   body.style.color = 'white'
// }

// function partyGreen() {
//   body.style.backgroundColor = 'rgba(0,253,81,1)'
//   body.style.color = 'white'
// }

// function partyBlue() {
//   body.style.backgroundColor = 'rgba(0,254,255)'
//   body.style.color = 'white'
// }

// function partyPink() {
//   body.style.backgroundColor = 'rgba(60,13,20)'
//   body.style.color = 'white'
// }