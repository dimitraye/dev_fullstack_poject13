import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit{

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
