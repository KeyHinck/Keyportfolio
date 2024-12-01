let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks= document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*="'+id+'"]').classList.add('active')
            })
        }
        
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle('active');
}



const serviceBox = document.querySelector('.service-box');
const videoPopup = document.querySelector('.video-popup');
const video = videoPopup.querySelector('video');

let hoverTimeout;

serviceBox.addEventListener('mouseover', () => {
    hoverTimeout = setTimeout(() => {
        videoPopup.style.opacity = '1'; // Make the popup visible
        video.play(); // Autoplay the video
    }, 1000); // 2-second delay before video appears
});

serviceBox.addEventListener('mouseout', () => {
    clearTimeout(hoverTimeout); // Cancel hover timeout
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset video to start
    videoPopup.style.opacity = '0'; // Hide the popup
});
