$(document).ready(function () {
    $.ajax({
        url: "http://api.pgbcloud.com/count"
    }).then(function (data) {
        $('.views-count').innerHTML(data.count);
    });
});