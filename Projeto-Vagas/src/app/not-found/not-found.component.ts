import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector:"not-found",
    standalone: true,
    imports: [RouterLink],
    template: `
    <div> 
    <h2> 404 - Page Not Found </h2>
    <p> The page you are looking for does not existe.</p>
    <a routerLink="/"> Return to Home </a>
    </div>
    `
})
export class NotFoundComponent {}