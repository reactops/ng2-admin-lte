import { OidHelper } from '../helpers/oid.helper';
import { Actor } from './actor';

export enum ContextType {
  DIRECT,
  ROOMS,
  ISSUES,
  TASKS,
  NOTIFICATIONS,
  PROJECTS,
  DEPARTMENTS,
  BRANCHES,
  ORGANIZATIONS,
  COUNTRIES,
  BROADCAST // Special type of context for System Wide notifications, e.g: maintenance announcements.
}

let contextTypeString = [
  'direct',
  'rooms',
  'issues',
  'tasks',
  'notifications',
  'projects',
  'departments',
  'branches',
  'organizations',
  'countries',
  'broadcast'
];

export enum ContextVisibilityType {
  PRIVATE,
  PUBLIC,
  WORKSPACE,
  INHERETED
}

let contextVisibilityTypeString = [
  'private',
  'public',
  'workspace',
  'inhereted'
];

export class Context {
  private id: string;
  public route: string;
  public routePreffix: string;
  public parentContext: Context;
  public contextType: ContextType;
  public contextVisibilityType: ContextVisibilityType;
  protected actors: Array<Actor> = [];

  public constructor(data: any = {}) {
    this.id = data.id || OidHelper.generateOID();
    this.parentContext = data.parentContext || null;
    this.contextType = data.contextType || ContextType.DIRECT;
    let defaultVisibility = (this.parentContext == null) ? ContextVisibilityType.PRIVATE : ContextVisibilityType.INHERETED;
    this.contextVisibilityType = data.contextVisibility || defaultVisibility;
    this.routePreffix = 'messages/' + contextTypeString[this.contextType];
    this.route = this.routePreffix + '/' + this.id;
  }

  public getContextTypeString() {
    return contextTypeString[this.contextType];
  }

  public getContextVisibilityTypeString() {
    return contextVisibilityTypeString[this.contextVisibilityType];
  }
}
