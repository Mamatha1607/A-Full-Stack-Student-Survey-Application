package com.example.Survey;

	import org.springframework.boot.builder.SpringApplicationBuilder;
	import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

	public class SpringServletInitializer extends SpringBootServletInitializer {

		@Override
		protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
			return application.sources(App.class);
		}

	}

