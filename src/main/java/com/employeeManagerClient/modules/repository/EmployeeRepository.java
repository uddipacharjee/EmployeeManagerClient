package com.employeeManagerClient.modules.repository;

import com.employeeManagerClient.modules.model.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee,Long> {

    //Employee findFirstByName(String name);

}
