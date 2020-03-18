<%@ include file="common/header.jspf"%>

<div class="container">
    <form:form method="post" modelAttribute="employee">

        <fieldset class="form-group">
            <form:label path="name">Name</form:label>
            <form:input path="name" type="text" class="form-control"
                        required="required"/>
            <form:errors path="name" cssClass="text-warning" />
        </fieldset>
        <fieldset class="form-group">
            <form:label path="title">Title</form:label>
            <form:input path="title" type="text" class="form-control"
                        required="required"/>
            <form:errors path="title" cssClass="text-warning" />
        </fieldset>
        <fieldset class="form-group">
            <form:label path="email">Email</form:label>
            <form:input path="email" type="text" class="form-control"
                        required="required"/>
            <form:errors path="email" cssClass="text-warning" />
        </fieldset>
        <fieldset class="form-group">
            <form:label path="teamName">Team Name</form:label>
            <form:input path="teamName" type="text" class="form-control"
                        required="required"/>
            <form:errors path="teamName" cssClass="text-warning" />
        </fieldset>
        <fieldset class="form-group">
            <form:label path="joinedDate">Joining Date</form:label>
            <form:input path="joinedDate" type="text" class="form-control"
                        required="required"/>
            <form:errors path="joinedDate" cssClass="text-warning" />
        </fieldset>
        <fieldset class="form-group">
            <form:label path="mobile">Mobile number</form:label>
            <form:input path="mobile" type="text" class="form-control"
                        required="required"/>
            <form:errors path="mobile" cssClass="text-warning" />
        </fieldset>
        <button type="submit" class="btn btn-success">Submit</button>
    </form:form>
</div>
<%@ include file="common/footer.jspf"%>
<script>
    $('#joinedDate').datepicker({
        //format:'dd/mm/yyyy'
        format:'yyyy-mm-dd'
    });
</script>