package com.example.back.controller;

import com.example.back.model.Message;
import com.example.back.service.MessageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageServiceImpl messageService;

    @Autowired
    public MessageController(MessageServiceImpl messageService) {
        this.messageService = messageService;
    }

    @PostMapping("/send")
    public Message sendMessage(@RequestBody Message message, @RequestParam("senderId") Integer senderId, @RequestParam("receiverId") Integer receiverId) {
        return messageService.sendMessage(message, senderId, receiverId);
    }

    @GetMapping("/sender/{senderId}")
    public List<Message> getMessagesBySenderId(@PathVariable Integer senderId) {
        return messageService.findMessagesBySenderId(senderId);
    }

    @GetMapping("/receiver/{receiverId}")
    public List<Message> getMessagesByReceiverId(@PathVariable Integer receiverId) {
        return messageService.getMessagesByReceiverId(receiverId);
    }
}