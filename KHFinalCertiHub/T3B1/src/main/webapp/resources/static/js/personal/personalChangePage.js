// 드롭다운 버튼을 클릭하면 드롭다운 메뉴를 토글합니다.
function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

// 화면 크기가 바뀔 때 드롭다운을 숨깁니다.
window.addEventListener('resize', function() {
    // 화면 크기가 721px 이상이면 드롭다운을 숨깁니다.
    if (window.innerWidth > 720) {
        var dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.remove('show');
    }
});


function initPersonalChangePage(contextPath){
    
    ajaxGetInitData(null, function(result){
        document.querySelector('input[name="name"]').value = result.memberName;
        document.querySelector('input[name="email"]').value = result.email;
        document.querySelector('input[name="phone"]').value = result.phone;
    })
    

    // 비밀번호 변경 버튼 클릭 시 submitChange 함수 실행
    $("#change-btn").on("click", submitChange)

    // 회원 탈퇴 버튼 클릭 시 submitDelete 함수 실행
    $("#dummydelete-btn").on("click", function() {
        submitDelete(contextPath)
    })


    document.querySelector("form").onsubmit = updateBtn;
}




function submitChange() {
    let userPwd = document.getElementById("userPwd").value;
    let newcheckPwd = document.getElementById("newcheckPwd").value;
    let checkPwd = document.getElementById("checkPwd").value;

    // 필수 입력값 검증
    if (!userPwd || !newcheckPwd || !checkPwd) {
        alert("모든 값을 입력해주세요.");
        return; // 입력값이 비어 있으면 모달을 닫지 않음
    }

    // 비밀번호 일치 여부 검증
    if (newcheckPwd !== checkPwd) {
        alert("새로운 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        return; // 비밀번호가 일치하지 않으면 모달을 닫지 않음
    }

    // 여기에 실제 비밀번호 변경 로직을 추가 (예: 폼 제출)
    ajaxSubmitChange({pwd: userPwd, newPwd: newcheckPwd}, function (result){
        if(result === 0){
            alert("비밀번호 변경에 실패하였습니다..");
            return;
        } else if(result === -1){
            alert("현재 비밀번호가 일치하지 않습니다.");
            return;
        } else if(result === 1) {
            alert("비밀번호가 변경되었습니다.");
            // 모달 닫기
            document.getElementById("dummychange-btn").click();
        }
        
    })
    

    
}

// 회원 탈퇴 함수
function submitDelete(contextPath) {
    let userPwdDelete = document.getElementById("userPwddelete").value;

    // 비밀번호 입력 여부 검증
    if (!userPwdDelete) {
        alert("비밀번호를 입력해주세요.");
        return; // 비밀번호가 비어 있으면 모달을 닫지 않음
    }

    ajaxSubmitDelete({pwd: userPwdDelete}, function(result){
        if(result === 0){
            alert("회원 탈퇴를 실패하였습니다..");
            return;
        } else if(result === -1){
            alert("현재 비밀번호가 일치하지 않습니다.");
            return;
        } else if(result === 1) {
            alert("회원 탈퇴가 완료되었습니다.");
            // 모달 닫기
            document.getElementById("delete-btn").click();
            location.href = contextPath + '/main';
        }
    })
}


function updateBtn(event){
    event.preventDefault();
    document.getElementById("tempUpdateBtn").click();
    console.log("lol")
    document.querySelector('#apply-modal .modal-body').textContent = "잠시만 기다려주세요..."
    ajaxSetUpdateData({
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        phone: document.querySelector('input[name="phone"]').value
    }, function(result){
        if(result === 1){
            document.querySelector('#apply-modal .modal-body').textContent = "저장 완료"
        } else {
            document.querySelector('#apply-modal .modal-body').textContent = "오류 발생!"
        }
    })
}