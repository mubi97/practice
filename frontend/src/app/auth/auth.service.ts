import { TokenStorageService } from "./token-storage.service";
import { LoginInfo } from "./../models/login-info";
// import { User } from './../models/user';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { JwtResponse } from "./jwt-response";
/**
 * it is a variable of constant type that defines the api of request header and also get the meta data
 */
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "http://bitesbraces.store",
  }),
};
/**
 * It is a Decorator that marks a class as available to be provided and injected as a dependency.
 */
@Injectable({
  providedIn: "root",
})
export class AuthService {
  /**
   * It is a base url of an api
   */
  private baseUrl = "http://bitesbraces.store/api";
  /**
   * This is our constructor
   * @param http object of http client
   * @param tokenStorage parameter of token storage service
   */
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}
  /**
   *This function passes data from our frontend to our backend. it contains credentials of user login information
   */
  public attemptAuth(credentials: LoginInfo): Observable<JwtResponse> {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://bitesbraces.store/",
      }),
    };
    return this.http.post<JwtResponse>(
      `${this.baseUrl}/auth/signin`,
      credentials,
      httpOptionsSaved
    );
  }
}
