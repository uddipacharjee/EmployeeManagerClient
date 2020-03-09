package com.employeeManagerClient.modules;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;


@SpringBootApplication
public class EmployeeManagerApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagerApplication.class, args);
	}

	@Bean
	public RestTemplate getRestTemplate(){
		return new RestTemplate();
	}
	@Override
	public void run(String... args) throws Exception {
		RestTemplate restTemplate=new RestTemplate();
		HttpHeaders httpHeaders=new HttpHeaders();
		//httpHeaders.set();
	}
}
