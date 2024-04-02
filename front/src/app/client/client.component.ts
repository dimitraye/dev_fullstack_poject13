import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Message } from '../interfaces/message.interface';
import { isPlatformBrowser } from '@angular/common';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit{
  
  messages: Message[] = [];
  senderId = 1; // Remplacez par l'ID de l'utilisateur actuel
  receiverId = 2; // Remplacez par l'ID du destinataire

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private messageService: MessageService
  ) { }

  sendMessage() {
    console.log('sendMessage called');
    const messageInput = document.getElementById('message-input') as HTMLInputElement;
    console.log('messageInput', messageInput);
    const messageContent = messageInput.value.trim();
    if (messageContent !== '') {
      const message: Message = {
        id: 0, // L'ID sera généré côté serveur
        idSender: this.senderId,
        idReceiver: this.receiverId,
        content: messageContent,
        creationDate: new Date()
      };
      this.messageService.sendMessage(message, this.senderId, this.receiverId)
        .subscribe(sentMessage => {
          console.log("client -> sentMessage", sentMessage);
          // Ajouter le message envoyé à la liste des messages
          // Effacer le champ de saisie du message
          messageInput.value = '';
          this.messages.push(sentMessage);

        });
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.messageService.getMessagesByReceiverId(this.receiverId)
        .subscribe(messages => {
          // Mettre à jour la liste des messages
          this.messages = messages;
        });
    }
  }

}
