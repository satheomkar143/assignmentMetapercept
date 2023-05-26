import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-class',
  templateUrl: './single-class.component.html',
  styleUrls: ['./single-class.component.css']
})
export class SingleClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  singleClass : any

}
