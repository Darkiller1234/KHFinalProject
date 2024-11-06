function initNoticeWrite(contextPath) {
    const summernote = $('#summernote')

    summernote.summernote({
        placholder: '이곳에 글을 작성해주세요.(3000Bytes 까지 가능)',
        tabsize: 2,
        height: 500,
        disableResizeEditor: true
    });
}