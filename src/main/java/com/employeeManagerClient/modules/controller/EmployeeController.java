package com.employeeManagerClient.modules.controller;

import com.employeeManagerClient.modules.model.Employee;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.text.SimpleDateFormat;
import java.util.*;

@Controller
public class EmployeeController {
    @Autowired
    RestTemplate restTemplate;

    @InitBinder
    protected void initBinder(WebDataBinder binder){
        SimpleDateFormat dateFormat=new SimpleDateFormat("dd/MM/yyyy");
        StringTrimmerEditor stringTrimmerEditor=new StringTrimmerEditor(true);

        binder.registerCustomEditor(Date.class,new CustomDateEditor(dateFormat,false));
        binder.registerCustomEditor(String.class,stringTrimmerEditor);
        //System.out.println("strintrimmer");
    }

    @GetMapping("/employees")
    public String showEmployeeList(ModelMap model){

        String url="http://localhost:3000/find-all";
        Object[] objects=restTemplate.getForObject(url,Object[].class);
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<Employee> employees = (ArrayList<Employee>) mapper.convertValue(
                Arrays.asList(objects),
                new TypeReference<List<Employee>>() { });
        /*
        for (Object o:Arrays.asList(objects)) {
            employees.add((Employee) o);
            System.out.println(o);
            System.out.println(o.getClass().getName());
        }
        */

        System.out.println(employees);

        System.out.println(Arrays.asList(objects).getClass().getName());
        //model.addAttribute("employees",(List<Employee>)(Object) Arrays.asList(objects));


        /*
        ResponseEntity<List<Employee>> employeeResponse =
                restTemplate.exchange("http://localhost:3000/find-all",
                        HttpMethod.GET, null, new ParameterizedTypeReference<List<Employee>>() {
                        });
        List<Employee> employees = employeeResponse.getBody();
        */

        model.addAttribute("employees",employees);
        return "listOfEmployee";
    }
    @GetMapping("/add")
    public String showEmployeeForm(ModelMap model){
        model.addAttribute("employee",new Employee());
        return "employeeForm";
    }
    @PostMapping("/add")
    public String addEmployee(@ModelAttribute("employee") Employee employee, BindingResult result,ModelMap model){
        if(result.hasErrors()){
            //showEmployeeForm(model);
            return "employeeFrom";
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Employee> request = new HttpEntity<>(employee, headers);
        ResponseEntity<List<Employee>> employeeResponse =
                restTemplate.exchange("http://localhost:3000/save",
                        HttpMethod.POST, request, new ParameterizedTypeReference<List<Employee>>() {
                        });
        //showEmployeeList(model);
        return "redirect:/employees";
    }

    @GetMapping("/update")
    public String showUpdateEmployee(@RequestParam Long id,ModelMap model){
        ResponseEntity<Employee> employeeResponse =
                restTemplate.exchange("http://localhost:3000/find-by-id/"+id,
                        HttpMethod.GET, null, new ParameterizedTypeReference<Employee>() {
                        });
        Employee employee=employeeResponse.getBody();
        model.addAttribute("employee",employee);
        return "employeeForm";
    }
    @PostMapping("/update")
    public String updateEmployee(@ModelAttribute("employee") Employee employee,BindingResult result,ModelMap model){
        if(result.hasErrors()){
            //showEmployeeForm(model);
            return "employeeFrom";
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Employee> request = new HttpEntity<>(employee, headers);
        ResponseEntity<Employee> employeeResponse =
                restTemplate.exchange("http://localhost:3000/update",
                        HttpMethod.PUT, request, new ParameterizedTypeReference<Employee>() {
                        });
        //showEmployeeList(model);
        return "redirect:/employees";
    }


    @RequestMapping(value = "/delete",method = RequestMethod.GET)
    public String deleteEmployee(@RequestParam Long id,ModelMap model){
        ResponseEntity<Void> employeeResponse =
                restTemplate.exchange("http://localhost:3000/delete-by-id/"+id,
                        HttpMethod.DELETE, null, new ParameterizedTypeReference<Void>() {
                        });
        return "redirect:/employees";
    }


}
