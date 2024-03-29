// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Méthode pour ajouter un utilisateur
  addUser(user: any) {
    return this.http.post('http://localhost:8080/api/users/add', user);
  }

  // Méthode pour récupérer tous les utilisateurs
  getAllUsers() {
    return this.http.get('http://localhost:8080/api/users/all');
  }

  // Autres méthodes pour interagir avec votre backend
}
