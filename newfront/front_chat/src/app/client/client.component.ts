import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MessageService } from '../services/message.service';
import { Message } from '../interfaces/message.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  messages: Message[] = [];
  senderId = 1; // Remplacez par l'ID de l'utilisateur actuel
  receiverId = 2; // Remplacez par l'ID du destinataire
  messageContent = '';
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    console.log('ClientComponent NgOnInit receiverID :', this.receiverId);
    console.log('ClientComponent NgOnInit senderID :', this.senderId);
    this.getMessages();
  }

  _sendMessage() {
    const messageInput = document.getElementById('message-input') as HTMLInputElement;
    const messageContent = messageInput.value.trim();
  
    if (messageContent !== '') {
      const message: Message = {
        id: 0, // L'ID sera généré côté serveur
        idSender: this.senderId,
        idReceiver: this.receiverId,
        content: messageContent,
        creationDate: new Date()
      };

      console.log('ClientComponent sendMessage messageContent :', messageContent);

      // Appelez d'abord le service pour envoyer le message
      /*this.messageService.sendMessage(message, this.senderId, this.receiverId).subscribe(sentMessage => {
        // Une fois que le message est envoyé avec succès, formatez-le et ajoutez-le à la fenêtre de chat
        const chatMessages = document.getElementById('chat-messages');
  
        if (chatMessages) {
          const newMessage = document.createElement('div');
          newMessage.classList.add('message', 'alert', 'alert-primary');
          newMessage.textContent = sentMessage.content;
          chatMessages.appendChild(newMessage);
        }
  
        // Effacez le champ de saisie du message après l'avoir envoyé
        messageInput.value = '';
      });*/
      this.getMessages();
    }
  }

  sendMessage() {
    console.log("Client, sendMessage called");

    if (this.messageContent.trim() !== '') {
      const message: Message = {
        id: 0,
        idSender: this.senderId,
        idReceiver: this.receiverId,
        content: this.messageContent,
        creationDate: new Date()
      };
      this.messageService.sendMessage(message);
      this.messageContent = ''; // Clear message input
    }
  }

  getMessages() {
    this.messageService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }




}
