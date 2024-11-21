function initPersonalView(contextPath) {
    // 현재 페이지의 URL 주소
    const url = new URL(window.location.href);
    // URL의 파라미터값을 가진 객체
    const urlParam = url.searchParams;
    getMemberInfo(urlParam.get('pno'));
}


function getMemberInfo(pno){
    ajaxGetMemberInfo({pno: pno}, function(result){
        setMemberInfo(result);
    })
}


function setMemberInfo(result){
    
}