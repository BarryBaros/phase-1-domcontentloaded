// Your code goes here
document.addEventListener("DOMContentLoaded", function (){
    console.log("The DOM has loaded")

     // Select the paragraph element with id="text"
    const text = document.querySelector('#text');

     //Update the text content
    text.textContent = "This is really cool!";
    console.log(text);
}
)
console.log("I loaded beofore the DOM Loaded.");