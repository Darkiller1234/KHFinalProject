function initCommulistPage(contextPath) {
    initCommulistPageBar(contextPath);
}

function initCommulistPageBar(contextPath) {
    const pagingBar = document.querySelector('.user-bar');

    const data = {
        startPage : 1,
        endPage : 5,
        currentPage : 1,
        pageUrl : contextPath + '/manager/user?',
        imgUrl : [
            contextPath + '/resources/static/img/button/arrow_left.png',
            contextPath + '/resources/static/img/button/arrow_right.png'
        ]
    }
    // createPageBar(pagingBar, data)
}