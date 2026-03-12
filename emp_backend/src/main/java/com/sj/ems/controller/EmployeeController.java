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
}
