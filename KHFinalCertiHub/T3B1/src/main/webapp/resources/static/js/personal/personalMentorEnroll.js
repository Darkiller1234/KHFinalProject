function initPersonalMentorEnroll(contextPath) {
    let data1 = {
        name : 'array',
        default : '',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            
        ]
    }
    ajaxGetHaveLicense(null, function (list){
        if(list.length === 0) {
            document.querySelector('.middle-view').innerHTML = ``
            document.querySelector('.bottom-view').innerHTML = `<h1>보유하신 자격증이 없으십니다.</h1>`
        }
        else {
            data1.items = list.map(item => [item.licenseName]);
            data1.default = list[0].licenseName;
            console.log(data1.items);



            let html = list.map(lol => 
                `<div class="tag bgcolor3 font-size-content">${lol.licenseName}</div>`
            ).join('');
            document.querySelector('.look-license').innerHTML = html;


            document.querySelector('.symbol-license').textContent = data1.default
            createSelectBox(document.getElementById('selectbox1'), data1);
            document.querySelector('input[name="array"]').value = data1.default;





            ajaxGetMemberStatus(null, function (result) {
                console.log(result)
                document.querySelector('.mentor-name').textContent = result.memberNickname;
                document.querySelector('.profile-img img').src = contextPath + result.memberImg;
                if(result.memberIntro === undefined){
                    document.querySelector('.member-intro').innerText = ""
                } else {
                    document.querySelector('.member-intro').innerText = result.memberIntro;
                }
                
            })

            const targetDiv = document.querySelector(".button-select > div");

            const observer = new MutationObserver(() => {
                // 텍스트가 변경되었을 때 실행될 동작
                document.querySelector('.symbol-license').innerText = targetDiv.textContent;
            });

            // MutationObserver 설정
            observer.observe(targetDiv, {
                characterData: true, // 텍스트 노드 변경 감지
                childList: true,     // 자식 노드 추가/제거 감지
                subtree: true        // 하위 노드의 변경도 감지
            });



            $('#career-textarea').on("change", function() {
                document.querySelector('.mentor-career').innerText = document.querySelector('#career-textarea').value;            
            })

            $('#intro-textarea').on("change", function() {
                document.querySelector('.mentor-intro').innerText = document.querySelector('#intro-textarea').value;            
            })


            $('#save-mentor-enroll').on("click", () => mentorEnroll())
        }
    })
    
}

function mentorEnroll(){
    let career = document.querySelector('#career-textarea').value;
    let intro = document.querySelector('#intro-textarea').value;
    let licenseName = document.querySelector(".button-select > div").innerText;
    ajaxSetMentorEnroll({career: career, intro: intro, licenseName: licenseName}, function(result) {
        if(result > 0) {
            alert('성공적으로 처리되었습니다!'); 
            window.location.href = '';
        }else {
            alert('응애!');
        }
    })
}