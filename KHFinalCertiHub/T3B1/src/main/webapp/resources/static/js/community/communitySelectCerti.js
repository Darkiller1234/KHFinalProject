function commuSCInit(context) {
    $("#sex").focus(function() {
        document.querySelector('#sex2').classList.remove('disvisible');
        console.log("Input field is focused");
        const searchValue = $(this).val(); // Input 값을 가져옵니다.
        $("#sex2").empty();
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
        
                    // Append the new div to the #sex2 element
                    $("#sex2").append(newDiv);
                });
            },
            error: function(res) {
                console.log("자격증 종류 가져오기 ajax 오류");
            }
        });
        console.log("Input value changed: " + $(this).val());
    });
    $("#sex").on("change", function() {
        const searchValue = $(this).val(); // Input 값을 가져옵니다.
        $("#sex2").empty();
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
        
                    // Append the new div to the #sex2 element
                    $("#sex2").append(newDiv);
                });
            },
            error: function(res) {
                console.log("자격증 종류 가져오기 ajax 오류");
            }
        });
        console.log("Input value changed: " + $(this).val());
    });
    // $("#sex").blur(function() {
    //     document.querySelector('#sex2').classList.add('disvisible');
    //     console.log("Input field lost focus");
    // });

    function getCertiList(){

    }
}