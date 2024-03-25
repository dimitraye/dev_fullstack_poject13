import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

  constructor() {}

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

  ngAfterViewInit() {
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');

    if (sendBtn && messageInput) {
      sendBtn.addEventListener('click', this.sendMessage);
      messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          this.sendMessage();
        }
      });
    }
  }

}
