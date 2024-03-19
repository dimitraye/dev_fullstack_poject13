package com.example.back.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.Date;


/**
 * Model that represent the note
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message {

    @Id
    private Integer id;

    private Integer idSender;

    private Integer idReceiver;

    private String content;

    private Date creationDate;

    public Integer getReceiverId() {
      return  this.idReceiver = idReceiver;
    }

    public Integer getSenderId() {
        return  this.idSender = idSender;
    }

    public void setSenderId(int i) {
         this.idSender = i;
    }

    public void setReceiverId(int i) {
        this.idReceiver = i;
    }
}