<%@ include file="common/header.jspf"%>

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
        <tbody>
        <c:forEach items="${employees}" var="employee">
            <tr>
                <td>${employee.name}</td>
                <td>${employee.title}</td>
                <td>${employee.email}</td>
                <td>${employee.teamName}</td>
                <td><fmt:formatDate pattern="dd/MM/yyyy" value="${employee.joinedDate}"/></td>
                <td>${employee.mobile}</td>
                <td>
                    <a type="button" class="btn btn-primary" href="/update?id=${employee.id}">Edit</a>
                    <a type="button" class="btn btn-warning" href="/delete?id=${employee.id}">Delete</a>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
    <div>
        <a type="button" class="btn btn-success" href="/add">Add</a>
    </div>
</div>
<%@include file="common/footer.jspf"%>
