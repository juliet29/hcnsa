import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  showNav: boolean = false;

  openNav() {
    // this.showNav = true;
    let nav = document.querySelector(".nav-background");
    console.log(nav.classList);
    nav.classList.add("nav-visible");
  }

  closeNav() {
    let nav = document.querySelector(".nav-background");
    console.log(nav.classList);
    nav.classList.remove("nav-visible");
    console.log(nav.classList);
  }
}
