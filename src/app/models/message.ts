import { Actor } from './actor';
import { Context } from './context';

export class Message {
  public content: string;
  public title: string;
  public author: Actor;
  public destination: Actor;
  public date: string;
  public context: Context;

  public constructor(data: any = {}) {
    this.content = data.content || '';
    this.title = data.title || '';
    this.author = data.author || null;
    this.destination = data.destination || null;
    this.date = data.date || new Date(Date.now()).toISOString();
    this.context = data.context || null;
  }

  public getDateInClientLocale() {
    return new Date(this.date).toLocaleString();
  }
}
