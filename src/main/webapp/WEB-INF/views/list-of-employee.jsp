<html>
<head>
    <%@ page isELIgnored="false" %>
    <meta charset="utf-8" />
    <title>Spring Boot + JPA + Datatables</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
    <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
    <script src="/js/src/datatable.js"></script>
    <link rel="stylesheet" href="/css/src/design.css">
</head>

<body>

<H1>Employee List</H1>
<div class="container" id="searchBox">
    <div class="col-xs-6">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input type="text" id="nameSearch" class="form-control" placeholder="name.." >
        </div>
    </div>
    <div class="col-xs-6">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
            <input type="text" id="emailSearch" class="form-control" placeholder="email.." >
        </div>
    </div>



    <div class="col-xs-6">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
            <input type="text" id="teamSearch" class="form-control" placeholder="team.." >
        </div>
    </div>

    <div class="col-xs-6">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-phone"></i></span>
            <input type="text" id="mobileSearch" class="form-control" placeholder="mobile.." >
        </div>
    </div>
</div>

<p id="test"></p>
<div class="container">
    <table id="employeesTable" class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Email</th>
            <th>Team Name</th>
            <th>Joined Date</th>
            <th>Mobile</th>
            <th></th>
        </tr>
        </thead>

    </table>
    <div>
        <a type="button" class="btn btn-success" href="/add">Add</a>
    </div>
</div>
</body>
</html>
