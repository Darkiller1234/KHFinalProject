// 탭 게시물
$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');

        // 선택한 카테고리를 hidden input에 설정
        var categoryText = $("#" + tab_id + " li:first-child").text(); // 예시로 첫 번째 항목 가져오기
        $('#category').val(categoryText);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const resultItems = document.querySelectorAll('.result-item');
    const modal = document.getElementById('licenseModal');
    const closeBtn = document.querySelector('.close-btn');

    resultItems.forEach(item => {
        item.querySelector('.result-btn').addEventListener('click', function () {
            const licenseName = item.querySelector('.result-btn').textContent;
            const examScope = item.getAttribute('data-exam-scope');
            const docExamFee = item.getAttribute('data-doc-exam-fee');
            const pracExamFee = item.getAttribute('data-prac-exam-fee');

            // 시험 범위에 있는 \n을 <br>로 변환
            const formattedExamScope = examScope.replace(/\n/g, "<br>");

            document.getElementById('modalLicenseName').textContent = licenseName;
            document.getElementById('modalLicenseScope').innerHTML = formattedExamScope;  // innerHTML 사용

            document.getElementById('modalDocExamFee').textContent = docExamFee;
            document.getElementById('modalPracExamFee').textContent = pracExamFee;

            modal.style.display = 'block';  // 모달창 표시
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';  // 모달창 닫기
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

