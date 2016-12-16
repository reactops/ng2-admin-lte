import { User } from './user';
import { Actor } from './actor';

export class Group extends User implements Actor {
  private name: string;

  public constructor(data: any = {}) {
    super(data);
    this.name = data.name || '';
    this.avatarUrl = data.avatarUrl || '../public/assets/img/group0-160x160.jpg';
    this.maySendBroadcast = false;
  }

  public getName() {
    return this.name;
  }

  public getIsGroup() {
    return true;
  }

}
