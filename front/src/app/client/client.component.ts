import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Message } from '../interfaces/message.interface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  
  messages: Message[] = [];
  senderId = 1; // Remplacez par l'ID de l'utilisateur actuel
  receiverId = 2; // Remplacez par l'ID du destinataire

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


  sendMessage() {
    const message = document.getElementById('message-input') as HTMLInputElement;
    const chatMessages = document.getElementById('chat-messages');

    if (message && message.value.trim() !== '') {
      const newMessage = document.createElement('div');
      newMessage.classList.add('alert', 'alert-primary');
      newMessage.textContent = message.value;
      chatMessages?.appendChild(newMessage);
      message.value = '';
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Le code à l'intérieur de cette condition ne sera exécuté que dans un environnement de navigateur
      const sendBtn = document.getElementById('send-btn');
      const messageInput = document.getElementById('message-input');

      if (sendBtn && messageInput) {
        sendBtn.addEventListener('click', this.sendMessage.bind(this));
        messageInput.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
            this.sendMessage();
          }
        });
      }
    }
  

  }

}
