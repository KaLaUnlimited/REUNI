// $("#id_form").on('submit', function (e) {
//     e.preventDefault();
//     var studentID = $("#student_id").val().trim();
//     getStudentInfo(studentID);
// });
function getMatchInfo(){
// var row={
//     par_name:par_name,
//     par_gvt_id:par_gvt_id,
//     student_name:student_name,
//     student_id:student_id
// }

    $.get('/api/admin/getAll').then(function (matchData) {
        console.log(matchData);
        // 1. Add html to page
        for (const match of matchData) {
            $("#desc > tbody").append($(`
                <tr>
                    <td>${match.student_name}</td>
                    <td>${match.student_id}</td>
                    <td>${match.par_name}</td>
                    <td>${match.par_gvt_id}</td>
                </tr>
            `));
        }
        // 2. Show modal with `modal()`
    //     $('.modal').modal()
    //     $('#student_id').val('')
    // })
});
}


getMatchInfo();
