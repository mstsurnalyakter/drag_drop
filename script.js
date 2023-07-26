// DOM Element

const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");

// Loop throught each boxes element

boxes.forEach((box) => {

    // when a drag element dragged over a box element
    box.addEventListener("dragover", (e) => {
        e.preventDefault();//Prevent default behaviour
        box.classList.add("hoverred")
    })


    // when a draggable element leaves box element
    box.addEventListener("dragleave", (e) =>{
        box.classList.remove("hoverred");
    })

// when a draggable element is draopped on a box element

box.addEventListener("drop", () =>{
    box.appendChild(image);
    box.classList.remove("hoverred")
})
    
});

 