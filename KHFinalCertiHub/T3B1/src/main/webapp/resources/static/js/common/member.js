document.addEventListener("DOMContentLoaded", function () {
    adjustContentPosition();    
});

window.addEventListener("resize", adjustContentPosition);

function adjustContentPosition() {
    const content = document.querySelector(".content");
    const screenHeight = window.innerHeight;
    const contentHeight = content.offsetHeight;

    content.style.top = `${(screenHeight - contentHeight) / 2}px`;
}