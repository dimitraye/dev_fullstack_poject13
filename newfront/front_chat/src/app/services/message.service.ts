import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Message } from '../interfaces/message.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  /** 
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

   // Méthode pour récupérer tous les messages
   getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl);
  }

  // Méthode pour rechercher un message par son ID
  getMessageById(id: number): Observable<Message> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Message>(url);
  }
  */
  myMessages: Message[] = [
    {
        id: 1,
        idSender: 1,
        idReceiver: 2,
        content: "Bonjour ! Comment ça va ?",
        creationDate: new Date("2024-03-22T08:00:00")
    },
    {
        id: 2,
        idSender: 2,
        idReceiver: 1,
        content: "Bonjour ! Ça va bien, merci ! Et vous ?",
        creationDate: new Date("2024-03-22T08:05:00")
    },
    {
        id: 3,
        idSender: 1,
        idReceiver: 2,
        content: "Très bien aussi, merci !",
        creationDate: new Date("2024-03-22T08:10:00")
    }
];

  private messages: Message[] = []; // Variable pour stocker les messages localement

  private messagesSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  public messages$: Observable<Message[]> = this.messagesSubject.asObservable();

  constructor() { 
    this.messagesSubject.next(this.myMessages);
  }

  // Méthode pour envoyer un message
  _sendMessage(message: Message, senderId: number, receiverId: number): Observable<Message> {
    console.log('Service -> sendMessage called');

    const newMessage: Message = {
      id: this.messages.length + 1, // ID temporaire
      idSender: senderId,
      idReceiver: receiverId,
      content: message.content,
      creationDate: new Date() // Date actuelle
    };
    console.log('newMessage', newMessage);

    this.messages.push(newMessage); // Ajoute le nouveau message à la liste
    console.log('service -> messages ', this.messages);

    return of(newMessage); // Retourne un Observable avec le message envoyé

  }

  sendMessage(message: Message) {
    const currentMessages = this.messagesSubject.value;
    const updatedMessages = [...currentMessages, message];
    this.messagesSubject.next(updatedMessages);
  }

  clearMessages() {
    this.messagesSubject.next([]);
  }

  // Méthode pour récupérer les messages envoyés par un utilisateur
  getMessagesBySenderId(senderId: number): Observable<Message[]> {
    const senderMessages = this.messages.filter(message => message.idSender === senderId);
    return of(senderMessages);
  }

  // Méthode pour récupérer les messages reçus par un utilisateur
  getMessagesByReceiverId(receiverId: number): Observable<Message[]> {
    const receiverMessages = this.messages.filter(message => message.idReceiver === receiverId);
    return of(receiverMessages);
  }

  // Méthode pour récupérer tous les messages
  getAllMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  // Méthode pour rechercher un message par son ID
  getMessageById(id: number): Observable<Message> {
    return of(this.messages.find(msg => msg.id === id)).pipe(
      map(message => {
        if (!message) {
          throw new Error(`Message with ID ${id} not found`);
        }
        return message;
      })
    );
  }
}
