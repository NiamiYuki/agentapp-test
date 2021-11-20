import {Component, Input, OnInit} from '@angular/core';
import {Carrier} from "../Model/carrier";

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {

  @Input() carrier: Carrier|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
