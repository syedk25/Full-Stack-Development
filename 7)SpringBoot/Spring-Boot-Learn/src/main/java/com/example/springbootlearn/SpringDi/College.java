package com.example.springbootlearn.SpringDi;

public class College {

    private final Department department;

    public College(Department department) {
        this.department = department;
    }

    public void showDepartment() {
        System.out.println(department.getDetails());
    }
}
