import { Component, OnInit } from "@angular/core";

let initiatives = [
  "Mentorship",
  "Naija Feels",
  "Internships",
  "Nigerian Collegiate Conference"
];

@Component({
  selector: "app-initiatives",
  templateUrl: "./initiatives.component.html",
  styleUrls: ["./initiatives.component.scss"]
})
export class InitiativesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  initiatives = initiatives;
}
