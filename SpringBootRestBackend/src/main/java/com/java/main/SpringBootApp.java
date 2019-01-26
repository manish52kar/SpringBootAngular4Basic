package com.java.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.java.main.entities.User;
import com.java.main.repo.UserRepo;

@SpringBootApplication
public class SpringBootApp implements CommandLineRunner {

	@Autowired
	private UserRepo userRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootApp.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		userRepo.save(new User("Peter", "Parker"));
		userRepo.save(new User("Elon", "Musk"));
		userRepo.save(new User("Steve", "Jobs"));
	}

}
