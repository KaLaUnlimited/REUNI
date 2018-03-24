$("#id_form").on('submit', function (e) {
    e.preventDefault();

    var studentID = $("#student_id").val().trim();
    getStudentInfo(studentID);
});

function getStudentInfo(id) {
    $.post('/api/students', {
            id: id
        })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (err) {
            console.error(err);
        });
}
