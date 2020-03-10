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
            { "mData": "mobile" },
            { "mData": "id"}
        ],
        "aoColumnDefs":[
            {
                "aTargets":[-1],
                "mRender":function(data){
                    return '<a type="button" class="btn btn-primary" href="/update?id='+data+'">Edit</a>' +
                        '<a type="button" class="btn btn-warning" href="/delete?id='+data+'">Delete</a>';
                }
            },
            {
                "aTargets":[-3],
                "mRender":function(data){
                    const d = new Date(data);
                    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

                    return `${da}-${mo}-${ye}`;
                }
            }

            ]


    })
});