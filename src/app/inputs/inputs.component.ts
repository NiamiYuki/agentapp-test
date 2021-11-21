import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PassengerInfo} from "../Model/passengerInfo";

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  @Output() dataSubmitted: EventEmitter<PassengerInfo> = new EventEmitter<PassengerInfo>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.dataSubmitted.emit(f.value as unknown as PassengerInfo);
  }

}
