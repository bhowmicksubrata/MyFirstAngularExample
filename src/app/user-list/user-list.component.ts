import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html"
})
export class UserListComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ["Ari", "Carlos", "Felipe", "Nate"];
  }

  ngOnInit() {}
}
