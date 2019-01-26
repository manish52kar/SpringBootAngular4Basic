package com.java.main.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.main.entities.User;

public interface UserRepo extends JpaRepository<User, Long>{

} 
