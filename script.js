const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("bibliotheque-theme");


if(savedTheme === "dark"){

    document.body.classList.add("dark");

    if(themeToggle){

        themeToggle.textContent="☀️";

    }

}



if(themeToggle){

    themeToggle.addEventListener("click",()=>{


        document.body.classList.toggle("dark");


        const darkMode = document.body.classList.contains("dark");


        localStorage.setItem(
            "bibliotheque-theme",
            darkMode ? "dark" : "light"
        );


        themeToggle.textContent = darkMode ? "☀️" : "🌙";


    });

}


const menuToggle = document.getElementById("menuToggle");

const sidebar = document.getElementById("sidebar");

const closeSidebar = document.getElementById("closeSidebar");

const overlay = document.getElementById("overlay");





function openSidebar(){


    sidebar.classList.add("active");

    overlay.classList.add("active");


}




function closeMenu(){


    sidebar.classList.remove("active");

    overlay.classList.remove("active");


}




if(menuToggle){


    menuToggle.addEventListener(
        "click",
        openSidebar
    );


}



if(closeSidebar){


    closeSidebar.addEventListener(
        "click",
        closeMenu
    );


}



if(overlay){


    overlay.addEventListener(
        "click",
        closeMenu
    );


}



document.addEventListener(
    "keydown",
    (e)=>{


        if(e.key==="Escape"){

            closeMenu();

        }


    }
);




/* fermer après clic sur un lien */


const sidebarLinks = document.querySelectorAll(
    ".mobile-sidebar a"
);



sidebarLinks.forEach(link=>{


    link.addEventListener(
        "click",
        closeMenu
    );


});


const revealElements = document.querySelectorAll(
    ".reveal"
);



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "visible"
            );


        }


    });


},

{

    threshold:0.15

}

);




revealElements.forEach(element=>{


    observer.observe(element);


});





/*====================================
       LIEN ACTIF AUTOMATIQUE
=====================================*/


const currentPage =
window.location.pathname.split("/").pop();



const navLinks =
document.querySelectorAll(".nav-links a");



navLinks.forEach(link=>{


    const linkPage =
    link.getAttribute("href");



    if(linkPage === currentPage){


        link.classList.add("active");


    }


});