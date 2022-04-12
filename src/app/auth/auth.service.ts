import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse.model";
import {  } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    baseUrl = 'http://identitytoolkit.googleapis.com/v1/accounts:';
    signUpEndpoint: string = "signUp:";
    signInEndpoint: string = "signIn:";

    public constructor(private http: HttpClient) { //

        }
    
    public signUp(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };

        return this.http.post<AuthResponse>(`${this.baseUrl}:${this.signUpEndpoint}?key=${environment.firebase.apiKey}`, requestBody); // Firebase error, needs corrected environments.firebase.apiKey, which correct when deployed.
    }

    public signIn(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signInEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody); // Firebase error, needs corrected environments.firebase.apiKey
    }
}