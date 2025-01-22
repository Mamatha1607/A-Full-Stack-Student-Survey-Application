//Author: Mamatha Iruvaram 
// Description: The WebConfig class configures CORS for the API, allowing requests from http://localhost:4200 with methods GET, POST, PUT, and DELETE, and enabling credentials.
package com.example.Survey;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Applies to all API endpoints
                .allowedOrigins("http://localhost:4200") // Angular app URL
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed methods
                .allowCredentials(true); // Allow cookies and credentials
    }
}

