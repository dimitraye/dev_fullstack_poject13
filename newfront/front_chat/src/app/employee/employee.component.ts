import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Message } from '../interfaces/message.interface';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  messages: Message[] = [];
  senderId = 2; // Remplacez par l'ID de l'utilisateur actuel
  receiverId = 1; // Remplacez par l'ID du destinataire
  messageContent: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    console.log('EmployeeComponent NgOnInit receiverID :', this.receiverId);
    console.log('EmployeeComponent NgOnInit senderID :', this.senderId);
    this.getMessages();
  }

  /*sendMessage() {
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
  
      console.log('EmployeeComponent sendMessage messageContent :', messageContent);


      // Appelez d'abord le service pour envoyer le message
      this.messageService.sendMessage(message, this.senderId, this.receiverId).subscribe(sentMessage => {
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
      });
      this.getMessages();

    }
  }*/

  sendMessage() {
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
