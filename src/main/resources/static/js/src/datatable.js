$(document).ready( function () {
    var table = $('#employeesTable').DataTable({
        "sAjaxSource": "/rest/employees",
        "sAjaxDataProp": "",
        "order": [[ 0, "asc" ]],
        "aoColumns": [
            { "mData": "name" },
            { "mData": "title" },
            { "mData": "email" },
            { "mData": "teamName" },
            { "mData": "joinedDate" },
            { "mData": "mobile" }
        ]
    })
});