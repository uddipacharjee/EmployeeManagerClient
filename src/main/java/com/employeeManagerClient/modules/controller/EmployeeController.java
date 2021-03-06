package com.employeeManagerClient.modules.controller;

import com.employeeManagerClient.modules.model.Employee;
import com.employeeManagerClient.modules.service.EmployeeService;
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

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @InitBinder
    protected void initBinder(WebDataBinder binder){
        SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
        StringTrimmerEditor stringTrimmerEditor=new StringTrimmerEditor(true);

        binder.registerCustomEditor(Date.class,new CustomDateEditor(dateFormat,false));
        binder.registerCustomEditor(String.class,stringTrimmerEditor);
        //System.out.println("strintrimmer");
    }
    /*
    @GetMapping("/employees")
    public String showAllEmployeeList(ModelMap model){
        model.addAttribute("employee",new Employee());
        return "list-of-employee";
    }
    */

    @GetMapping("/rest/employees")
    @ResponseBody
    public List<Employee> getAllEmployee(){
        return employeeService.getEmployees();
    }


    @GetMapping("/employees")
    public String showEmployeeList(){
        return "list-of-employee";
    }

    @GetMapping("/add")
    public String showEmployeeForm(ModelMap model){
        model.addAttribute("employee",new Employee());
        return "employeeForm";
    }
    @PostMapping("/add")
    public String addEmployee(@ModelAttribute("employee") Employee employee, BindingResult result,ModelMap model){
        if(result.hasErrors()){
            return "employeeFrom";
        }
        employeeService.addEmployee(employee);
        return "redirect:/employees";
    }

    @GetMapping("/update")
    public String showUpdateEmployee(@RequestParam Long id,ModelMap model){
        Employee employee=employeeService.getEmployee(id);
        model.addAttribute("employee",employee);
        //return "employeeForm";
        System.out.println("GET--"+id);
        System.out.println(employee);
        return "list-of-employee";
    }
    @GetMapping("/rest/update")
    @ResponseBody
    public Employee showUpdateEmployee(@RequestParam Long id){
        return employeeService.getEmployee(id);
    }

    @PostMapping("/rest/update")
    @ResponseBody
    public boolean updateEmployeeViaAjax(@Valid @RequestBody Employee employee,BindingResult result){
        if(result.hasErrors()) return false;
        employeeService.updateEmployee(employee);
        return true;
        //System.out.println(employee);
    }

    @PostMapping("/update")
    public String updateEmployee(@ModelAttribute("employee") Employee employee,BindingResult result,ModelMap model){
        if(result.hasErrors()){
            //return "employeeFrom";
        }
        System.out.println("POST--");
        employeeService.updateEmployee(employee);
        return "redirect:/employees";
    }

    @RequestMapping(value = "/delete",method = RequestMethod.GET)
    public String deleteEmployee(@RequestParam Long id,ModelMap model){
        employeeService.deleteEmployee(id);
        return "redirect:/employees";
    }

    @RequestMapping(value = "/rest/delete",method = RequestMethod.GET)
    @ResponseBody
    public boolean deleteEmployeeViaAjax(@RequestParam Long id){
        employeeService.deleteEmployee(id);
        return true;
    }
}
