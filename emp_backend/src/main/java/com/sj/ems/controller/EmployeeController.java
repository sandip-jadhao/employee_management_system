package com.sj.ems.controller;

import com.sj.ems.entity.Employee;
import com.sj.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ems")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee){

        return service.saveEmployee(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees(){

        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return service.getEmployeeById(id);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee emp){
            emp.setId(id);
            return service.saveEmployee(emp);
    }
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id){
         service.deleteEmployee(id);
    }
}
