let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gettyimages-1164815276-d3f8a50d-ac89-4f35-8a11-2038c8268e95.jpg'){
        myImage.setAttribute('src', 'images/muppets-most-wanted.jpg');
    } else{
        myImage.setAttribute('src', 'images/gettyimages-1164815276-d3f8a50d-ac89-4f35-8a11-2038c8268e95.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Green is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Green is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}