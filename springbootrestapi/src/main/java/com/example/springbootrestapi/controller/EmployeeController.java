/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.springbootrestapi.controller;

import com.example.springbootrestapi.entity.Employee;
import com.example.springbootrestapi.repository.EmployeeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author USER
 */

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository eRepo;
    
    
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
       return eRepo.findAll();
    }
    
    @PostMapping("/employees")
    public Employee saveEmployeeDetails(@RequestBody Employee employee){
        return eRepo.save(employee);
    }
    
    @GetMapping("/employees/{id}")
    public Employee getSingleEmployee(@PathVariable Long id){
            return eRepo.findById(id).get();
    }
    
    @PutMapping("/employees")
    public Employee updateEmployeeDetails(@RequestBody Employee employee){
        return eRepo.save(employee);
    }
    
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable Long id){
        eRepo.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}
