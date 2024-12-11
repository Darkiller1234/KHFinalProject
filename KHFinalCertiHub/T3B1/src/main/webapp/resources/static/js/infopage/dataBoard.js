document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".content");

    contents.forEach((content) => {
        content.innerHTML = content.innerHTML.replace(/\n/g, "<br><br>");
    });
});
