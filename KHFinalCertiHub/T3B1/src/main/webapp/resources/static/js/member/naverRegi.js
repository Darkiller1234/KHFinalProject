window.onload = function(){ 
    const nicknameInput = document.querySelector("#membershipForm input[name = memberNickname]");
    let eventFlag;

    nicknameInput.onkeyup = function(ev) {

        clearTimeout(eventFlag);

        const str = ev.target.value;
        if(str.trim().length >=5) {
            eventFlag = setTimeout(function(){
                $.ajax({
                    url:"nicknameCheck.me",
                    data: {checknickName: str},
                    success : function(result){
                        const checkResultnickName = document.querySelector("#checkResultnickName");
                        checkResultnickName.style.display = "block";

                        if(result === "NN"){
                            checkResultnickName.style.color = "#83c5be";
                            checkResultnickName.innerText = "이미 사용중인 닉네임입니다.";

                        }else {
                            checkResultnickName.style.color = "#006d77";
                            checkResultnickName.innerText = "사용 가능한 닉네임입니다.";
                        }
                    }, error : function() {
                        console.log("닉네임 중복 체크 ajax 실패")
                    }
                })
            }, 1000)
        }else {
            document.querySelector("#checkResultnickName").style.display = "none";
        }
    }  
}