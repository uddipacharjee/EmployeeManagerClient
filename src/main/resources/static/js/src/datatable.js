$(document).ready( function () {
    var table = $('#employeesTable').DataTable({
        //"dom": '<"top"i>rt<"bottom"><"clear">',
        //"dom": 'frtip',
        //"sDom": '<"top">l<"container" t>ip',
        "sDom": 'ltrip',//remove f
        //"select" : 'true',
        "sAjaxSource": "/rest/employees",
        "sAjaxDataProp": "",
        "order": [[0, "asc"]],
        "aoColumns": [
            {"mData": "name"},
            {"mData": "title"},
            {"mData": "email"},
            {"mData": "teamName"},
            {"mData": "joinedDate"},
            {"mData": "mobile"},
            {"mData": "id"}
        ],
        "aoColumnDefs": [
            {
                "aTargets": [-1],
                "mRender": function (data) {
                    return '<a type="button" class="btn btn-primary" href="/update?id=' + data + '">Edit</a>' +
                        '<a type="button" class="btn btn-warning" href="/delete?id=' + data + '">Delete</a>';
                }
            },
            {
                "aTargets": [-3],
                "mRender": function (data) {
                    const d = new Date(data);
                    const ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(d);
                    const mo = new Intl.DateTimeFormat('en', {month: 'short'}).format(d);
                    const da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(d);

                    return `${da}-${mo}-${ye}`;
                }
            }

        ]


    });
    /*
    table.columns().every( function () {
        let that = this;

        $('#nameSearch' ).on( 'keyup change clear', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
    */
    /*
    $('#nameSearch').on('keyup click',function () {
        if ( table.columns().search() !== this.value ) {
            that
                .search( this.value )
                .draw();
        }
    });
    console.log("hello");

     */
    /*
        $('#nameSearch').on( 'keyup click', function () {
            //table.search($('#nameSearch').val()).draw();
            var x=table.column;
            document.getElementById("test").innerHTML=x;
        } );

     */
    $("#nameSearch").on('keyup click',function () {
        table.columns(0).search(this.value).draw();
    });

    $("#emailSearch").on('keyup click',function () {
        table.columns(2).search(this.value).draw();
    });

    $("#teamSearch").on('keyup click',function () {
        table.columns(3).search(this.value).draw();
    });
    $("#mobileSearch").on('keyup click',function () {
        table.columns(5).search(this.value).draw();
    });
});