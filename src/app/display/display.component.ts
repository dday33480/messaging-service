import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FunctionalRulesService } from '../services/functional-rules.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnDestroy{
  
  activeUsers = [ 
    {user: "Bill"},
    {user: "Owen"},
    {user: "Paul"}
  ];

  messageDate = new Date();
  
  userName!: string[];
  messages!: string[];
  

    /*
    {message:"Hi Paul, how are things ?", user:"Bill", date:"26 June 2023 @ 15:45"},
    {message:"Yeah Paul, how are you ? It's been a while !", user:"Owen", date:"26 June 2023 @ 18:12"},
    {message:"Hey guys! Yeah doing good thanks and you guys ?", user:"Paul", date:this.messageDate}
    
  ];
  */

  constructor(private functionalRules: FunctionalRulesService) {}

  ngOnInit() {
    this.functionalRules.emitInputs.subscribe((value) => {
      this.userName = value
      this.messages = value
    });
  }

  ngOnDestroy(): void {
    this.functionalRules.emitInputs.unsubscribe();
  }


}
