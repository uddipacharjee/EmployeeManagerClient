package com.employeeManagerClient.modules.service;

import com.employeeManagerClient.modules.model.Employee;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    RestTemplate restTemplate;

    public List<Employee> getEmployees(){
        String url="http://localhost:3000/find-all";
        /*
        Object[] objects=restTemplate.getForObject(url,Object[].class);
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<Employee> employees = (ArrayList<Employee>) mapper.convertValue(Arrays.asList(objects), new TypeReference<List<Employee>>() { });
        */
        ResponseEntity<List<Employee>> employeeResponse = restTemplate.exchange(url,
                        HttpMethod.GET, null, new ParameterizedTypeReference<List<Employee>>() {});
        List<Employee> employees = employeeResponse.getBody();
        return employees;
    }

    public void addEmployee(Employee employee){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Employee> request = new HttpEntity<>(employee, headers);
        ResponseEntity<List<Employee>> employeeResponse = restTemplate.exchange("http://localhost:3000/save",
                        HttpMethod.POST, request, new ParameterizedTypeReference<List<Employee>>() {});
    }

    public Employee getEmployee(Long id){
        ResponseEntity<Employee> employeeResponse = restTemplate.exchange("http://localhost:3000/find-by-id/"+id,
                        HttpMethod.GET, null, new ParameterizedTypeReference<Employee>() {});
        Employee employee=employeeResponse.getBody();
        return employee;
    }
    public void updateEmployee(Employee employee){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Employee> request = new HttpEntity<>(employee, headers);
        ResponseEntity<Employee> employeeResponse = restTemplate.exchange("http://localhost:3000/update",
                        HttpMethod.PUT, request, new ParameterizedTypeReference<Employee>() {});
    }

    public void deleteEmployee(Long id){
        ResponseEntity<Void> employeeResponse = restTemplate.exchange("http://localhost:3000/delete-by-id/"+id,
                        HttpMethod.DELETE, null, new ParameterizedTypeReference<Void>() {});
    }
}
