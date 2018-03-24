$("#id_form").on('submit', function (e) {
    e.preventDefault();
    var studentID = $("#student_id").val().trim();
    getStudentInfo(studentID);
});
function getStudentInfo(id) {
    $.post('/students/checkin', {id: id}).then(function (html) {
        // 1. Add html to page
        $("body").append(html)
        // 2. Show modal with `modal()`
        $('.modal').modal()
        $('#student_id').val('')
    })
}



