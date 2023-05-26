import { Component, OnInit } from '@angular/core';
let  classes = require("src/class.json")
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  classes = classes;
  ngOnInit(): void {
  }



}
