package com.example.back;

import com.example.back.model.Message;
import com.example.back.model.User;
import com.example.back.service.MessageServiceImpl;
import com.example.back.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class BackApplication {

	@Autowired
	private UserServiceImpl userService;

	@Autowired
	private MessageServiceImpl messageService;

	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}

	@PostConstruct
	public void init() {
		// Créer 6 utilisateurs après le démarrage de l'application
		for (int i = 1; i <= 6; i++) {
			User user = new User();
			user.setId(i);
			user.setFirstname("Firstname " + i);
			user.setLastname("Lastname " + i);
			user.setClient(i % 2 == 0); // Alternativement, un utilisateur sur deux est un client

			userService.save(user);
		}

		// Créer 15 messages après la création des utilisateurs
		for (int i = 1; i <= 15; i++) {
			Message message = new Message();
			message.setId(i);
			message.setSenderId((i % 6) + 1); // Envoyer les messages aux utilisateurs créés
			message.setReceiverId(((i + 1) % 6) + 1); // Recevoir les messages des utilisateurs suivants
			message.setContent("Contenu du message " + i);

			messageService.save(message);
		}
	}
}