const content = document.querySelector(".content")
for(let i = 0; i < 64; i++){
    //Template Literal Alrgr+7 - ${változó}
    content.innerHTML += `<div class="box" id= "${i+1}"></div>`;
}
//NodeList-ként megkapjuk a .box-okat:
const boxes = document.querySelectorAll(".box");
boxes.forEach(element => {
    element.addEventListener("click", (event) => {
        let currentElement = event.target;
        if (currentElement.style.backgroundColor === ""){
            currentElement.style.backgroundColor = "#ff0000";
            currentElement.textContent = event.target.id;
        }
        else{
            currentElement.style.backgroundColor = "";
            currentElement.textContent = null;
        }
        currentElement.style.textAlign = "center";
   })
})