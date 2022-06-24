        export default function thisfunc () {
        
var button = document.getElementById("show");
let opened = false;
button.addEventListener("click", thisfunc)
var elements = document.querySelectorAll(".platformbuttons");
        console.log(opened)
            
            if(opened){
                
                for (let i = 0; i < elements.length; i++) {
                    button.innerText = "Show Links";
                    button.style.opacity = 0.68;
                    elements.item(i).classList.add("displaynone")
                }
                opened = false;}
            else if(!opened){
                button.innerText = "Hide Links";
                button.style.opacity = 0.4;
                for (let i = 0; i < elements.length; i++) {
                    elements.item(i).classList.remove("displaynone")
                }
                opened = true;}
    }
     