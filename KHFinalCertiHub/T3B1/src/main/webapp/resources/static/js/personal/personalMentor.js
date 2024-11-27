function initPersonalMentor(contextPath) {
    initSelectBox(contextPath)
}

function initSelectBox(contextPath) {


    let data1 = {
        name: 'array',
        default: '',
        imgUrl: `${contextPath}/resources/static/img/button/triangle_down.png`,
        items: [

        ]
    }
    ajaxGetHaveLicense(null, function (list) {
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
            if (result.memberIntro === undefined) {
                document.querySelector('.member-intro').innerText = ""
            } else {
                document.querySelector('.member-intro').innerText = result.memberIntro.replace(/<br>/gi, '\n');
            }
            if (result.mentorIntro === undefined) {
                document.querySelector('#career-textarea').value = "";
            } else {
                document.querySelector('#career-textarea').value = result.career.replace(/<br>/gi, '\n');
                document.querySelector('.mentor-career').innerText = result.career;
            }
            if (result.career === undefined) {
                document.querySelector('#intro-textarea').value = "";
            } else {
                document.querySelector('#intro-textarea').value = result.mentorIntro;
                document.querySelector('.mentor-intro').innerText = result.mentorIntro;
            }

            const selectBoxList = document.querySelectorAll('.valid-choose');

            const data2 = {
                name: 'license',
                default: '',
                imgUrl: `${contextPath}/resources/static/img/button/triangle_down.png`,
                items: [
                    ['질문가능'],
                    ['질문불가'],
                ]
            }
            if (result.mentorValid === 'Y') {
                data2.default = '질문가능';
                document.querySelector('.mentor-valid').innerHTML = `<img src="${contextPath}/resources/static/img/button/valid_icon.png">` + data2.default
                document.querySelector('.mentor-valid').classList.remove('bgcolor4');
                document.querySelector('.mentor-valid').classList.add('accept');
            } else {
                data2.default = '질문불가';
                document.querySelector('.mentor-valid').innerHTML = `<img src="${contextPath}/resources/static/img/button/stop_icon.png">` + data2.default
                document.querySelector('.mentor-valid').classList.add('bgcolor4');
                document.querySelector('.mentor-valid').classList.remove('accept');
            }

            createSelectBox(selectBoxList[0], data2)


            ajaxGetMentorLikeCount(null, function (result) {
                document.querySelector('#likeCount').innerHTML += converseDigit(result);
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

            const targetDiv2 = document.querySelector(".valid-choose > .custom-select > .button-select > div");

            const observer2 = new MutationObserver(() => {
                console.log(document.querySelector('.mentor-valid').innerHTML)
                if (targetDiv2.innerText === '질문가능') {
                    document.querySelector('.mentor-valid').innerHTML = `<img src="${contextPath}/resources/static/img/button/valid_icon.png">` + '질문가능'
                    document.querySelector('.mentor-valid').classList.remove('bgcolor4');
                    document.querySelector('.mentor-valid').classList.add('accept');
                } else {
                    document.querySelector('.mentor-valid').innerHTML = `<img src="${contextPath}/resources/static/img/button/stop_icon.png">` + '질문불가'
                    document.querySelector('.mentor-valid').classList.add('bgcolor4');
                    document.querySelector('.mentor-valid').classList.remove('accept');
                }
            });

            // MutationObserver 설정
            observer2.observe(targetDiv2, {
                characterData: true, // 텍스트 노드 변경 감지
                childList: true,     // 자식 노드 추가/제거 감지
                subtree: true        // 하위 노드의 변경도 감지
            });
        })





        $('#career-textarea').on("change", function () {
            document.querySelector('.mentor-career').innerText = document.querySelector('#career-textarea').value;
        })

        $('#intro-textarea').on("change", function () {
            document.querySelector('.mentor-intro').innerText = document.querySelector('#intro-textarea').value;
        })


        $('#save-mentor').on("click", () => mentorSave())

    })
}

function mentorSave(){
    let career = document.querySelector('#career-textarea').value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    let intro = document.querySelector('#intro-textarea').value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    let licenseName = document.querySelector(".button-select > div").innerText;
    let valid = document.querySelector(".valid-choose > .custom-select > .button-select > div").innerText;
    ajaxSetMentor({career: career, intro: intro, liName: licenseName, valid: valid}, function(result) {
        console.log(result)
        if(result === 1){
            document.querySelector(".modal-body").textContent = "저장 성공"
        }
    })
}