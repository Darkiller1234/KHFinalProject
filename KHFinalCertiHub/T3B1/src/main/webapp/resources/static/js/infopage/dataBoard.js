document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".content");

    contents.forEach((content) => {
        content.innerHTML = content.innerHTML.replace(/\n/g, "<br><br>");
    });
});
function topScroll() {
    /*
        IE, FireFox
        document.documentElement.scrollTop = y축 스크롤 거리
        => 크롬, 사파리 등등에도 존재하나 값이 항상 0

        Chrome, safari, opera, edge ...
        document.body.scrollTop : y  = y축 스크롤 거리

        브라우저마다 다르므로 둘다 체크
        만약 Y축 스크롤이 된 상태일 경우 실행한다.
    */
    const position =
        document.documentElement.scrollTop || document.body.scrollTop;

    if (position) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}