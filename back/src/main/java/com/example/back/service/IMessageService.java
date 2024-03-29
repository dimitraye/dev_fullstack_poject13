package com.example.back.service;


import com.example.back.model.Message;

import java.util.List;
import java.util.Optional;

/**
 * Interface that manage the interaction with the Patient entity
 */
public interface IMessageService {

    /**
     * Save the message
     * @param message
     * @return
     */
    Message save(Message message);

    Message sendMessage(Message message, Integer senderId, Integer receiverId);

    /**
     * Find a user by its Id
     * @param id
     * @return a user
     */
    Optional<Message> findMessageById(Integer id);

    /**
     * Find a user by its Id
     * @param id
     * @return a user
     */
    Optional<Message> findMessageReceiverById(Integer id);

    List<Message> getMessagesByReceiverId(Integer receiverId);

    /**
     * Find a user by its Id
     * @param id
     * @return a user
     */
    Optional<Message> findMessageBySenderId(Integer id);

    List<Message> findMessagesBySenderId(Integer senderId);

    /**
     * Find all users
     * @return a list of user
     */
    List<Message> findAll();



    /**
     * Convert a parameter into a Json text
     * @param paramIn
     * @return Json text
     */
    String paramTojson(String paramIn);

}
