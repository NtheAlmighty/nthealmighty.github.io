
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {

    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/blam-gorter-fridges.png") {

        myImage.setAttribute("src", "images/blam-gorter-fridges2.png");

    } else {

        myImage.setAttribute("src", "images/blam-gorter-fridges.png");

    }

});

let myButton = document.querySelector("button");

myButton.addEventListener("click", () => {

    setUserName();

});

let myHeading = document.querySelector("h1");

function setUserName() {

    const myName = prompt("Please enter your fucking name.");
    
    if (!myName) {

        setUserName();

    } else {

        localStorage.setItem("name", myName);
        myHeading.textContent = `poopin is cool, ${myName}. keep    poopin sib.`;

    }

}

if (!localStorage.getItem("name")) {

    setUserName();

    } else {

    const storedName = localStorage.getItem("name");
    myHeading.textContent = `poopin is cool, ${storedName}. keep    poopin sib.`;

}