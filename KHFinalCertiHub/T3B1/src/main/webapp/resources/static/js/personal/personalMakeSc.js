function persoMSInit(contextPath){
    document.getElementById('start-cal').value = new Date().toISOString().substring(0, 10);
    document.getElementById('end-cal').value = new Date().toISOString().substring(0, 10);
    
    document.getElementById('repeat-start-cal').value = new Date().toISOString().substring(0, 10);
    document.getElementById('repeat-end-cal').value = new Date().toISOString().substring(0, 10);
    

    let data1 = {
        name : 'alarm',
        default : '10분 전',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['10분 전'],
            ['1시간 전'],
            ['1일 전'],
            ['일정 시작시간에']
        ]
    }

    createSelectBox(document.getElementById('alarm-select'), data1);

    let data2 = {
        name : 'repeat',
        default : '반복 안 함',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['1일 마다'],
            ['1주 마다'],
            ['1개월 마다'],
            ['반복 안 함']
        ]
    }

    createSelectBox(document.getElementById('repeat-select'), data2);

    let data3 = {
        name : 'repeat-select',
        default : '계속 반복',
        imgUrl : `${contextPath}/resources/static/img/button/triangle_down.png`,
        items : [
            ['일정 횟수 반복'],
            ['계속 반복'],
            ['시작/종료 날짜 지정']
        ]
    }

    createSelectBox(document.getElementById('repeat-count-select'), data3);


    const alarmInput = document.querySelector('#repeat-select .custom-select .button-select div');
    const repeatcount = document.querySelector('#repeat-count-select .custom-select .button-select div');
    const repeatCountSelect = document.getElementById('repeat-count-select');
    const repeatcountinput = document.getElementById('repeat-count-input');
    const repeaddataset = document.getElementById('repeat-date-set');

    if (alarmInput.innerText === '반복 안 함') {
        repeatCountSelect.classList.add('display-none');
        repeatcountinput.classList.add('display-none');
        repeaddataset.classList.add('display-none');
    } else {
        if (repeatcount.innerText !== '일정 횟수 반복') {
            repeatcountinput.classList.add('display-none');
        } else {
            repeatcountinput.classList.remove('display-none');
        }
        if (repeatcount.innerText !== '시작/종료 날짜 지정') {
            repeaddataset.classList.add('display-none');
        } else {
            repeaddataset.classList.remove('display-none');
        }
        repeatCountSelect.classList.remove('display-none');
    }


    if (alarmInput && repeatCountSelect) {
        document.querySelectorAll('.item').forEach(element => {
            element.addEventListener('mousedown', () => {
                if (alarmInput.innerText === '반복 안 함') {
                    repeatCountSelect.classList.add('display-none');
                    repeatcountinput.classList.add('display-none');
                    repeaddataset.classList.add('display-none');
                } else {
                    if (repeatcount.innerText !== '일정 횟수 반복') {
                        repeatcountinput.classList.add('display-none');
                    } else {
                        repeatcountinput.classList.remove('display-none');
                    }
                    if (repeatcount.innerText !== '시작/종료 날짜 지정') {
                        repeaddataset.classList.add('display-none');
                    } else {
                        repeaddataset.classList.remove('display-none');
                    }
                    repeatCountSelect.classList.remove('display-none');
                }
                
                
            });
        });
    } else {
        console.warn("Required elements not found in the DOM.");
    }
}