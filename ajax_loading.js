$(document).ready(function() {
    getData();
});

function getData() {
    $.ajax({
        type: "GET",
        url: "https://www.jasonbase.com/things/KjGB.json",
        success: function(response) {
            var data = response.data;
            var html = "";
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                html += "<a href=\" ./cause_detail.html?key=" + element.key +
                    "\"><div class=\"item\">" +
                    "<div>" +
                    "<div class=\"image\">" + "<img src=\" " + element.image + "\" />" + "</div>" +
                    "<p>" + element.title + "</p>" +
                    "</div>" +
                    "</div></a>";
            }
            $('.cause-image').prepend(html);
        },
        error: function() {
            console.log(error);
        }
    });
}