import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { TokenStorageService } from "../auth/token-storage.service";
/**
 * It is a decorator that marks a class as available to be provided and injected as a dependency.
 */
@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  /**
   * This is our contructor
   * @param router  It is a parameter of a service that provides navigation among views and URL manipulation capabilities.
   * @param tokenStorage It is a parameter of tokenstorage services
   */
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}
  /**
   * This functions checks if the token is expired or not adn then proceeds accordingly
   * @returns
   */
  canActivate() {
    if (this.tokenStorage.isTokenExpired()) {
      return true;
    }

    this.router.navigate(["/admin"]);
    return false;
  }
}
