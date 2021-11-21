import {Component, Input, OnInit} from '@angular/core';
import {Tariff} from "../Model/tariff";

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit {

  @Input() tariff: Tariff | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
