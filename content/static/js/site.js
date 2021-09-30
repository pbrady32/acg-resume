function get_count() {
    $.ajax({
        url: "https://api.pgbcloud.com/count"
    }).then(function (count_data) {
        $('.views-count').html(count_data.count);
        console.log(count_data.count)
    });
}

$(document).ready(function () {
    $.ajax({
        url: "https://api.pgbcloud.com/add"
    }).then(function (add_result) {
        console.log(add_result.result);
        get_count();
    });
});