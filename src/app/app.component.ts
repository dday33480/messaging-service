import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boost Messenger';

  activeUsers = [
    {user: 'Bill'},
    {user: 'Paul'},
    {user: 'Owen'},
  ];

  messageDate = new Date();

  userMessages = [
    {message:"Hi Paul, how are things ?", user:"Bill", date:"26 June 2023 @ 15:45"},
    {message:"Yeah Paul, how are you ? It's been a while !", user:"Owen", date:"26 June 2023 @ 18:12"},
    {message:"Hey guys! Yeah doing good thanks and you guys ?", user:"Paul", date:this.messageDate}
  ];
}
