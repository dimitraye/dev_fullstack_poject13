import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = 'http://localhost:8080/api/messages'; // Base URL de votre backend

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer un message
  sendMessage(message: Message, senderId: number, receiverId: number): Observable<Message> {
    const url = `${this.baseUrl}/send?senderId=${senderId}&receiverId=${receiverId}`;
    return this.http.post<Message>(url, message);
  }

  // Méthode pour récupérer les messages envoyés par un utilisateur
  getMessagesBySenderId(senderId: number): Observable<Message[]> {
    const url = `${this.baseUrl}/sender/${senderId}`;
    return this.http.get<Message[]>(url);
  }

  // Méthode pour récupérer les messages reçus par un utilisateur
  getMessagesByReceiverId(receiverId: number): Observable<Message[]> {
    const url = `${this.baseUrl}/receiver/${receiverId}`;
    return this.http.get<Message[]>(url);
  }
}
