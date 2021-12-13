$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "equipment.json",
        beforeSend: function() {
            $("#equipment").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#equipment").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#equipment").append(
                        value.name + "<br>" +
                        value.bio + "<br><br>"
                    );
                });
            }); 
        }
    });
});