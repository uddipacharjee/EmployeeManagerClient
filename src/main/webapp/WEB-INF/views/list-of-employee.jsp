<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
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
    <script src="webjars/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.js"></script>
    <script src="/js/src/datatable.js"></script>
    <link rel="stylesheet" href="/css/src/design.css">
</head>

<body>
<div id="feedback"></div>
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

<!-- Modal -->
<div class="modal fade" id="editModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="padding:35px 50px;">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4><span class="glyphicon glyphicon-edit"></span> Edit Info</h4>
            </div>
            <div class="modal-body" style="padding:40px 50px;">




                <!--
                <form role="form">
                    <div class="form-group">
                        <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>
                        <input type="text" class="form-control" id="usrname" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
                        <input type="text" class="form-control" id="psw" placeholder="Enter password">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" value="" checked>Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Submit</button>
                </form>
                -->
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>

            </div>
        </div>

    </div>
</div>

</body>
</html>
