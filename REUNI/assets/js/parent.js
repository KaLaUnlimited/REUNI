$("#id_form").on('submit', function (e) {
    e.preventDefault();

    var parentID = $("#parent_id").val().trim();
    getParentInfo(parentID);
});

function getParentInfo(id) {
    $.post('/parents/checkin', {id: id}).then(function (html) {
        // 1. Add html to page
        $("body").append(html)
        // 2. Show modal with `modal()`
        $('.modal').modal()
        $('#parent_id').val('')
    })
}
