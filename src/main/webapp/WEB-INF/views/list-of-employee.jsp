<html>
<head>
    <%@ page isELIgnored="false" %>
    <meta charset="utf-8" />
    <title>Spring Boot + JPA + Datatables</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
    <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
    <script src="/js/src/datatable.js"></script>
</head>

<body>

<H1>Employee List</H1>
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
