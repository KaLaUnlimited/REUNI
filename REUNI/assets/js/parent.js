$("#id_form").on('submit', function (e) {
    e.preventDefault();

    var parentID = $("#parent_id").val().trim();
    getParentInfo(parentID);
});

function getParentInfo(id) {
    $.post('/parent', {
            par_gvt_id: Number(id)
        })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (err) {
            console.error(err);
        });
}