import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NavbarComponent],
  selector: "sdb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "alemtiaz";
}
