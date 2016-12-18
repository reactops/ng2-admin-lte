import { Preferences } from './preferences';

export class User {
    public firstname: string;
    public lastname: string;
    public email: string;
    public creationDate: string;
    public preferences: Preferences = null;

    public constructor( data: any = {}) {
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.creationDate = data.creation_date || Date.now();
        this.preferences = new Preferences( {
            avatarUrl: data.avatarUrl || null,
            parentPreferences: data.parentPreferences || data.systemPreferences || null,
            preferredLang: data.preferredLang || null
        });
    }

    public getName() {
        return this.firstname + ' ' + this.lastname;
    }

    public getAvatarUrl() {
        return this.preferences.getAvatarUrl();
    }

    public getPreferredLang() {
        return this.preferences.getPreferredLang();
    }
}
