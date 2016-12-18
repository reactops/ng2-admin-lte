let defaultUserAvatarUrl = '../../public/assets/img/user0-160x160.jpg';

export class Preferences {
    private avatarUrl: string;
    private preferredLang: string;
    public parentPreferences: Preferences;

    public constructor( data: any = {}) {
        this.avatarUrl = data.avatarUrl || null;
        this.preferredLang = data.preferredLang || null;
        this.parentPreferences = data.parentPreferences || null;
    }

    public setAvatarUrl( avatarUrl: string ) {
        this.avatarUrl = avatarUrl;
    }

    public setPreferredLang( preferredLang: string ) {
        this.preferredLang = preferredLang;
    }

    /** 
     * If current context setting (avatarUrl) is not set, retrieve from parent (System definitions).
     * If both are not defined (this context is System) set default Avatar Url.
     * In future System level Avatar URL will be retrieved from Admin preferences persistent level.
    **/
    public getAvatarUrl() {
        return ( !this.avatarUrl ) ? (
            ( this.parentPreferences ) ? this.parentPreferences.getAvatarUrl() : defaultUserAvatarUrl ) :
            this.avatarUrl;
    }

    /** 
     * If current context setting (preferredLang) is not set, retrieve from parent (System definitions).
     * If both are not defined (this context is System) set default Preferred Language: "en".
     * In future System level Preferred Language will be retrieved from Admin preferences persistent level.
    **/
    public getPreferredLang() {
        return ( !this.preferredLang ) ? (
            ( this.parentPreferences ) ? this.parentPreferences.getPreferredLang() : 'en' ) :
            this.preferredLang;
    }

    public toString(): string {
        return 'Avatar URL: ' + this.getAvatarUrl() + '; Preferred Language: ' + this.getPreferredLang();
    }
}
