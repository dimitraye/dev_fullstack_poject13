package com.example.back.service;

import com.example.back.model.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class MessageServiceImpl implements IMessageService{
    // Structure de données pour stocker les messages
    private final List<Message> messages = new ArrayList<>();
    private int nextId = 1;

    @Override
    public Message save(Message message) {
        message.setId(nextId++);
        message.setCreationDate(new Date());
        messages.add(message);
        return message;
    }

    @Override
    public Message sendMessage(Message message, Integer senderId, Integer receiverId) {
        message.setIdSender(senderId);
        message.setIdReceiver(receiverId);
        return save(message);
    }

    @Override
    public Optional<Message> findMessageById(Integer id) {
        // Rechercher le message par son ID dans la liste des messages
        return messages.stream()
                .filter(m -> m.getId().equals(id))
                .findFirst();
    }

    @Override
    public Optional<Message> findMessageReceiverById(Integer id) {
        // Rechercher le message du destinataire par son ID dans la liste des messages
        return messages.stream()
                .filter(m -> m.getReceiverId().equals(id))
                .findFirst();
    }

    @Override
    public List<Message> getMessagesByReceiverId(Integer receiverId) {
        List<Message> receiverMessages = new ArrayList<>();
        for (Message message : messages) {
            if (message.getReceiverId().equals(receiverId)) {
                receiverMessages.add(message);
            }
        }
        return receiverMessages;
    }

    @Override
    public Optional<Message> findMessageBySenderId(Integer id) {
        // Rechercher le message de l'expéditeur par son ID dans la liste des messages
        return messages.stream()
                .filter(m -> m.getSenderId().equals(id))
                .findFirst();
    }

    @Override
    public List<Message> findMessagesBySenderId(Integer senderId) {
        List<Message> senderMessages = new ArrayList<>();
        for (Message message : messages) {
            if (message.getSenderId().equals(senderId)) {
                senderMessages.add(message);
            }
        }
        return senderMessages;
    }

    @Override
    public List<Message> findAll() {
        return messages;
    }

    @Override
    public String paramTojson(String paramIn) {
        if (paramIn.startsWith("{")) {
            log.info("Param already in Json format");
            return paramIn;
        }
        paramIn = paramIn.replaceAll("=", "\":\"");
        paramIn = paramIn.replaceAll("&", "\",\"");
        return "{\"" + paramIn + "\"}";
    }

}
