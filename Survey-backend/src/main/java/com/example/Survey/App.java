// Author: Mamatha Iruvaram

//The code initializes and runs a Spring Boot application, configuring component scanning and enabling JPA repositories for database interactions.   
package com.example.Survey;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.Survey"})
@EnableJpaRepositories(basePackages = "com.example.Survey.repository")
public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

}
