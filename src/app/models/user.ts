import { Actor } from './actor';
import { GuidHelper } from '../helpers/guid.helper';

export class User implements Actor {
  private guid: string;
  protected firstname: string;
  protected lastname: string;
  protected admin: Actor;
  protected users: Array<Actor>;
  protected email: string;
  protected avatarUrl: string;
  protected creationDate: string;
  protected maySendBroadcast: boolean;
  protected acceptsBroadcast: boolean;

  public constructor(data: any = {}) {
    this.guid = data.guid || GuidHelper.generateGUID();
    this.firstname = data.firstname || '';
    this.lastname = data.lastname || '';
    this.admin = data.admin || null;
    this.users = data.users || null;
    this.email = data.email || '';
    this.avatarUrl = data.avatarUrl || '../public/assets/img/user0-160x160.jpg';
    this.creationDate = data.creation_date || new Date(Date.now()).toISOString();
    this.maySendBroadcast = data.maySendBroadcast || false;
    this.acceptsBroadcast = data.acceptsBroadcast || true;
  }

  public getGuid() {
    return this.guid;
  }

  public getName() {
    return this.firstname + ' ' + this.lastname;
  }

  public getAdmin() {
    return this.admin || this;
  }

  public getUsers() {
    return this.users || [this];
  }

  public getAvatarUrl() {
    return this.avatarUrl;
  }

  public getEmail() {
    return this.email;
  }

  public getCreationDate() {
    return this.creationDate;
  }

  public getMaySendBroadcast() {
    return this.maySendBroadcast;
  }

  public getAcceptsBroadcast() {
    return this.acceptsBroadcast;
  }

  public getIsGroup() {
    return false;
  }

}
