$(document).ready(function () {
    $.ajax({
        url: "https://api.pgbcloud.com/count"
    }).then(function (data) {
        $('.views-count').html(data.count);
    });
});