function commuSCInit(context) {
    $("#searchCerti").focus(function() {
        document.querySelector('#searchResult').classList.remove('disvisible');
        const searchValue = $(this).val(); // Input 값을 가져옵니다.
        $("#searchResult").empty();
        $.ajax({
            url: "selectCerti/getCertiList",
            data: {
                searchString: `${searchValue}`
            },
            success: function(res) {
                res.forEach(r => {
                    // Create a new div element
                    const newDiv = $("<div></div>")
                        .text(r.licenseName)  // Set the text content
                        .addClass("certi-item") // Optionally add a class
                        .css("cursor", "pointer"); // Make it visually clickable
        
                    // Add a click event to the newly created div
                    newDiv.on("click", function() {
                        location.href = `${context}/community/main?certiNo=${r.licenseNo}`
                    });
        
                    // Append the new div to the #searchResult element
                    $("#searchResult").append(newDiv);
                });
            },
            error: function(res) {
                console.log("자격증 종류 가져오기 ajax 오류");
            }
        });
    });
    $("#searchCerti").on("change", function() {
        const searchValue = $(this).val(); // Input 값을 가져옵니다.
        $("#searchResult").empty();
        $.ajax({
            url: "selectCerti/getCertiList",
            data: {
                searchString: `${searchValue}`
            },
            success: function(res) {
                res.forEach(r => {
                    // Create a new div element
                    const newDiv = $("<div></div>")
                        .text(r.licenseName)  // Set the text content
                        .addClass("certi-item") // Optionally add a class
                        .css("cursor", "pointer"); // Make it visually clickable
        
                    // Add a click event to the newly created div
                    newDiv.on("click", function() {
                        location.href = `${context}/community/main?certiNo=${r.licenseNo}`
                    });
        
                    // Append the new div to the #searchResult element
                    $("#searchResult").append(newDiv);
                });
            },
            error: function(res) {
                console.log("자격증 종류 가져오기 ajax 오류");
            }
        });
    });
    $(document).on('mousedown', function(event) {
        if (!$(event.target).closest('#searchResult, #searchCerti').length) {
            // 클릭이 searchResult 또는 searchCerti 외부에서 발생하면
            document.querySelector('#searchResult').classList.add('disvisible');
        }
    });

}