import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionalRulesService {

  private userName: string[] = [];
  private message: string[] = [];
  public emitInputs!: EventEmitter<string[]>;

  constructor() {
    this.userName;
    this.message;
    this.emitInputs = new EventEmitter<string[]>();
  }

  private notify() {
    this.emitInputs.emit((this.userName, this.message).slice());
  }

  public addUserName(userName: string) {
    if(userName) {
      userName = userName;
      this.userName.push(userName);
      this.notify();
    }
  }

  public addMessage(message: string) {
    if(message) {
      message = message;
      this.message.push(message);
      this.notify();
    }
  }

  public getMessage(message: string) {
    return this.message;
  }

  public getUserName(userName: string) {
    return this.userName;
  }


}
