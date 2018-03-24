$("#id_form").on('submit', function (e) {
    e.preventDefault();
    var parentID = $("#parent_id").val().trim();
    getParentInfo(parentID);
});
function getParentInfo(parentId) {
    $.post('/parents/checkin', {par_gvt_id: parentId}).then(function (html) {
        // 1. Add html to page
        $("body").append(html)
        // 2. Show modal with `modal()`
        $('.modal').modal()
        $('#parent_id').val('')
    })
}
