import { Component } from '@angular/core';
import { FunctionalRulesService } from '../services/functional-rules.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  userName!: string;
  message!: string;

  constructor(private functionalRules: FunctionalRulesService) {}

  onSend() {
    this.functionalRules.addUserName(this.userName);
    this.functionalRules.addMessage(this.message);
  }

}
