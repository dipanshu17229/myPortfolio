console.log("hi");

// Grabbing current theme saved in browser.
let theme = localStorage.getItem('theme');

// Initially, this will be null, so set "light" by default.
if(theme== null){
    setTheme('light');
}
else{
    // else, just show whatever theme is on local storage and save that as well.
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for(var i=0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        var mode = this.dataset.mode;
        console.log("trigger:" , mode);
        setTheme(mode);
    });
}

function setTheme(mode){
    if(mode=="light"){
        document.getElementById('theme-style').href = "default.css";
    }
    else if(mode=="blue"){
        document.getElementById('theme-style').href = "blue.css";
    }
    else if(mode=="green"){
        document.getElementById('theme-style').href = "green.css";
    }
    else if(mode=="purple"){
        document.getElementById('theme-style').href = "purple.css";
    }

    // Setting the value of the theme in local storage of the browser.
    localStorage.setItem('theme', mode);
}