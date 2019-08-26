import { Component, OnInit } from "@angular/core";

// put in models file -- will need to modify for different years
let boardPositions = [
  "President",
  "Vice President",
  "Treasurer",
  "Secretary",
  "Social Chairs",
  "Freshmen Representatives"
];

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  boardPositions = boardPositions;
}
