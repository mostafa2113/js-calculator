let buttons = document.getElementsByTagName('button');
let screen = document.getElementById('screen');


for(var i = 0; i <buttons.length;i++){
    buttons[i].addEventListener("click", (e)=>{
    if(e.target.textContent=="="){
        screen.textContent = eval(screen.textContent);
    }
    else if(e.target.textContent == "log"){
        screen.textContent = Math.log(screen.textContent)/Math.log(10);
    }
    else if(e.target.textContent == "clear"){
        screen.textContent = "";
    }
    else if(e.target.textContent == "del"){
        screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
    }
    else{
        screen.textContent += e.target.textContent;
    }
}
);
}












