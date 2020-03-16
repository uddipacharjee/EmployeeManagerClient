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
            {//href="/update?id=' + data + '"
                "aTargets": [-1],
                "mRender": function (data) {
                    console.log("ids:"+data);
                    /*
                    return '<a id="edit'+data+'" type="button" class="btn btn-primary" href="/update?id=' + data + '">Edit</a>' +
                        '<a type="button" class="btn btn-warning" href="/delete?id=' + data + '">Delete</a>';

                    */
                    return '<button id="edit'+data+'" type="button" class="edit btn btn-primary" data-id='+data+'>Edit</button>'+
                        '<button type="button" class="btn btn-warning">Delete</button>';
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

        ],
        /*
        "fnInitComplete":function () {
            $('#employeesTable').on('click', '.edit', function () {
                const data = table.columns(6);
                //console.log(this.value());
                alert( 'You clicked on '+data+'\'s row' );
            } );
        },
        */
        /*
        "drawCallback": function( settings ) {
            $(document).on('click','.edit',function () {
                var editId=$(this).attr('id');
                console.log(editId);
                alert(editId);
            })
        }
        */

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

    $(document).on('click','.edit',function () {
        var editId=$(this).attr('id');
        let id=$(this).data('id');

        $.ajax({
            url: "/rest/update?id="+id,
            contentType: "application/json",
            dataType: 'json',
            success: function(data) {
                console.log(data);
                //$("#modalHolder").html(data);
                var empId=data.id;
                var name=data.name;
                var title=data.title;
                var email=data.email;
                var teamName=data.teamName;
                var joinedDate=data.joinedDate;
                var mobile=data.mobile;
                alert("ID:"+data.id);
                let htmlData = '<form id="editForm" method="post" action="/rest/update" modelAttribute="employee"' +
                    '<div class="form-group">\n' +
                    '   <input type="hidden" id="empId" name="empId" value="'+empId+'">\n' +
                    '</div>' +
                    ' <div class="form-group">\n' +
                    '   <label for="name"><span class="glyphicon glyphicon-user"></span> Username</label>\n' +
                    '   <input type="text" class="form-control" id="name" value="'+name+'">\n' +
                    ' </div>' +
                    '<div class="form-group">\n' +
                    '   <label for="title"><span class="glyphicon glyphicon-book"></span> Title</label>\n' +
                    '   <input type="text" class="form-control" id="title" value="'+title+'">\n' +
                    ' </div>' +
                    '<div class="form-group">\n' +
                    '   <label for="email"><span class="glyphicon glyphicon-envelope"></span> Email</label>\n' +
                    '   <input type="text" class="form-control" id="email" value="'+email+'">\n' +
                    ' </div>' +
                    '<div class="form-group">\n' +
                    '   <label for="teamName"><span class="glyphicon glyphicon-sunglasses"></span> Team Name</label>\n' +
                    '   <input type="text" class="form-control" id="teamName" value="'+teamName+'">\n' +
                    ' </div>' +
                    '<div class="form-group">\n' +
                    '   <label for="joinedDate"><span class="glyphicon glyphicon-calendar"></span> Joining Date</label>\n' +
                    '   <input type="text" class="form-control" id="joinedDate" value="'+joinedDate+'">\n' +
                    ' </div>' +
                    '<div class="form-group">\n' +
                    '   <label for="mobile"><span class="glyphicon glyphicon-phone"></span> Mobile Number</label>\n' +
                    '   <input type="text" class="form-control" id="mobile" value="'+mobile+'">\n' +
                    ' </div>' +
                    '<button id="btn-submit" type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Submit</button>\n'+
                    '</form>';

              /*
              let htmlData='<form id="editForm" modelAttribute="employee"> \n' +
                  '\n' +
                  '        <fieldset class="form-group">\n' +
                  '            <form:label path="name">Name</form:label>\n' +
                  '            <input path="name" type="text" class="form-control"\n' +
                  '                         value="'+name+'"/>\n' +
                  '            <form:errors path="name" cssClass="text-warning" />\n' +
                  '        </fieldset>\n' +
                  '        <fieldset class="form-group">\n' +
                  '            <form:label path="title">Title</form:label>\n' +
                  '            <input path="title" type="text" class="form-control"\n' +
                  '                        value="'+title+'" required="required"/>\n' +
                  '            <form:errors path="title" cssClass="text-warning" />\n' +
                  '        </fieldset>\n' +
                  '        <fieldset class="form-group">\n' +
                  '            <form:label path="email">Email</form:label>\n' +
                  '            <input path="email" type="text" class="form-control"\n' +
                  '                        value="'+email+'" required="required"/>\n' +
                  '            <form:errors path="email" cssClass="text-warning" />\n' +
                  '        </fieldset>\n' +
                  '        <fieldset class="form-group">\n' +
                  '            <form:label path="teamName">Team Name</form:label>\n' +
                  '            <input path="teamName" type="text" class="form-control"\n' +
                  '                        value="'+teamName+'" required="required"/>\n' +
                  '            <form:errors path="teamName" cssClass="text-warning" />\n' +
                  '        </fieldset>\n' +
                  '        <fieldset class="form-group">\n' +
                  '            <form:label path="joinedDate">Joining Date</form:label>\n' +
                  '            <input path="joinedDate" type="text" class="form-control"\n' +
                  '                        value="'+joinedDate+'" required="required"/>\n' +
                  '            <form:errors path="joinedDate" cssClass="text-warning" />\n' +
                  '        </fieldset>\n' +
                  '        <fieldset class="form-group">\n' +
                  '            <form:label path="mobile">Mobile number</form:label>\n' +
                  '            <input path="mobile" type="text" class="form-control"\n' +
                  '                        value="'+mobile+'" required="required"/>\n' +
                  '            <form:errors path="mobile" cssClass="text-warning" />\n' +
                  '        </fieldset>\n' +
                  '        <button type="submit" class="btn btn-success">Submit</button>\n' +
                  '    </form>';

               */
                $("#editModal").find('.modal-body').html(htmlData);
                $("#editModal").modal();
                $('#joinedDate').datepicker({
                    format:'dd/mm/yyyy'
                });
                //alert(data.name);
                $("#editForm").on('submit',function (event) {
                    //alert("sdn");
                    //stop submit the form, we will post it manually.
                    event.preventDefault();

                    fire_ajax_submit();

                });

            }
        });



    });


    function fire_ajax_submit() {

        var employee = {};
        employee["id"]= $("#empId").val();
        employee["name"] = $("#name").val();
        employee["title"] = $("#title").val();
        employee["email"] = $("#email").val();
        employee["teamName"] = $("#teamName").val();
        employee["joinedDate"] = $("#joinedDate").val();
        employee["mobile"] = $("#mobile").val();

        //alert("Hello "+employee["name"]);
        //$("#btn-submit").prop("disabled", true);
        //alert("Employee: "+$("#empId").val());

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: $("#editForm").attr("action"),
            data: JSON.stringify(employee),
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (data) {
                location.href="/employees";
                //alert("response"+data);
                /*
                var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                    + JSON.stringify(data, null, 4) + "&lt;/pre&gt;";
                $('#feedback').html(json);

                console.log("SUCCESS : ", data);
                //$("#btn-submit").prop("disabled", false);
               // */

            },
            error: function (e) {
                /*
                var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                    + e.responseText + "&lt;/pre&gt;";
                $('#feedback').html(json);

                console.log("ERROR : ", e);
                //$("#btn-submit").prop("disabled", false);
                */
            }
        });
        $("#editModal .close").click()

    }



    //alert("jfghdghkjghdkjg");


/*
    $("#edit6").on('click',function () {
        console.log("hello");
        alert(this.id);

    });

    $("#id2").findClass("sfsf").findById(".sdfsd")

 */

});
