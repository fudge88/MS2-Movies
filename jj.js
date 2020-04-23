alphaOrder.addEventListener("click", (event)=> 
    //targeting the title parameter provided by the api's array
    Array.from(document.querySelectorAll(".card[data-title]"))
    .forEach((item) => item.parentNode.appendChild(item)));
});