import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  plan: Plan = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
