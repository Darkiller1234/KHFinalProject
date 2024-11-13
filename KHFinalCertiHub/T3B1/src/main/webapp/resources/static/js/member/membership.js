
window.onload = function(){ 
    const idInput = document.querySelector("#membershipForm input[name=memberId]");
    let eventFlag;

    idInput.onkeyup = function(ev) { // 키가 입력 될때마다 호출
        clearTimeout(eventFlag); // 아직 실행되지 않은 ajax요청을 취소

        const str = ev.target.value;
        if(str.trim().length >= 5) {
            eventFlag = setTimeout(function(){ // 1초 뒤에 값을 확인 후 ajax 요청
                // ajax 요청
                $.ajax({
                    url:"idCheck.me",
                    data: {checkId: str},
                    success : function(result){
                        const checkResult = document.querySelector("#checkId");
                        checkResult.style.display = "block";

                        if(result === "NNNNN"){
                            checkResult.style.color ="#83c5be";
                            checkResult.innerText = "이미 사용중인 아이디입니다.";

                            document.querySelector("#membershipForm button[type=submit]").disabled = true;
                        }else {
                            checkResult.style.color = "#006d77";
                            checkResult.innerText = "사용 가능한 아이디입니다.";

                            document.querySelector("#membershipForm button[type=submit]").disabled = false;
                        }
                    }, error : function() {
                        console.log("아이디 중복 체크 ajax 실패")
                    }
                })
            }, 1000)
        }else {
            document.querySelector("#membershipForm button[type=submit]").disabled = true;
            document.querySelector("#checkId").style.display = "none";
        }
    }

}