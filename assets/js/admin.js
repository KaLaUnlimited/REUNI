// $("#id_form").on('submit', function (e) {
//     e.preventDefault();
//     var studentID = $("#student_id").val().trim();
//     getStudentInfo(studentID);
// });
function getMatchInfo(id) {
    $.get('/admin', {id: id}).then(function (matchData) {
        // 1. Add html to page
        $("#desc > tbody").append("<tr><td>"+matchData.student_name+"</td><td>" + matchData.student_id+"</td><td>" +matchData.par_name+"</td><td>"+matchData.par_gvt_id+ "</td></tr>");
        // 2. Show modal with `modal()`
    //     $('.modal').modal()
    //     $('#student_id').val('')
    // })
}



