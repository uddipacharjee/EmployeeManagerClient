package com.employeeManagerClient.modules.controller;

import com.employeeManagerClient.modules.model.Employee;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

class AjaxResponseBody {

    String msg;
    List<Employee> result;
    void setMsg(String msg){
        this.msg=msg;
    }
    //getters and setters

}
@RestController
public class EmployeeRestController {
    @PostMapping("/rest/post-update")
    public ResponseEntity<?> getSearchResultViaAjax(
            Employee employee, Errors errors) {

        AjaxResponseBody result = new AjaxResponseBody();

        //If error, just return a 400 bad request, along with the error message
        if (errors.hasErrors()) {

            result.setMsg(errors.getAllErrors()
                    .stream().map(x -> x.getDefaultMessage())
                    .collect(Collectors.joining(",")));

            return ResponseEntity.badRequest().body(result);

        }
        System.out.println(employee);
/*
        List<Employee> users = userService.findByUserNameOrEmail(search.getUsername());
        if (users.isEmpty()) {
            result.setMsg("no user found!");
        } else {
            result.setMsg("success");
        }
        result.setResult(users);
*/
        return ResponseEntity.ok(result);

    }
}
