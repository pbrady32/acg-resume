$(document).ready(function () {
    $.ajax({
        url: "https://api.pgbcloud.com/add"
    }).then(function (data) {
        console.log(data.result);
    });

    $.ajax({
        url: "https://api.pgbcloud.com/count"
    }).then(function (data) {
        $('.views-count').html(data.count);
        console.log(data.count)
    });
});