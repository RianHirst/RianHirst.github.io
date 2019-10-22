let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/reds.jpg') {
      myImage.setAttribute ('src','images/reds2.jpg');
    } else {
      myImage.setAttribute ('src','images/reds.jpg');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Reds sub page, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Reds sub page, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}