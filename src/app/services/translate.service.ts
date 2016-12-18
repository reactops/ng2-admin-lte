import { Injectable, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { UserService } from './user.service';
import { User } from '../models/user';
import { PreferencesService } from './preferences.service';
import { Preferences } from '../models/preferences';

const langs = ['en', 'fr', 'ru', 'he', 'zh'];
const langmatch = /en|fr|ru|he|zh/;

@Injectable()
export class AdminLTETranslateService implements OnInit {
    private lang: string = 'us';
    private currentUser: User;

    constructor( private userServ: UserService, private translate: TranslateService,
        private prefServ: PreferencesService ) {
        translate.addLangs( langs );
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang( 'en' );

        this.userServ.currentUser.subscribe(( user: User ) => {
            this.currentUser = user;

            // the lang to use, if the lang isn't available, it will use the current loader to get them
            let browserLang = this.translate.getBrowserLang();
            let browserCultureLang = this.translate.getBrowserCultureLang();
            console.log( 'Detected browser language: "' + browserCultureLang + '"' );

            /** 
             * Currently we set System Preferred Lang to Browser Detected.
             * In future this will be retrieved from Persistent Storage.
             */  
            let systemPreferences = this.currentUser.preferences.parentPreferences;
            systemPreferences.setPreferredLang( browserLang );
            this.prefServ.setSystemPreferences( systemPreferences );

            // check if current User has a Preferred Language set, and it differs from his browser lang
            let useLang = 'en';
            let prefLang = ( this.currentUser ) ? this.currentUser.getPreferredLang() : null;
            if ( !prefLang ) {
                useLang = browserLang.match( langmatch ) ? browserLang : 'en';
            } else {
                console.log( 'Detected User preferred language: "' + prefLang + '"' );
                useLang = prefLang.match( langmatch ) ? prefLang : 'en';
            }
            this.translate.use( useLang );
            console.log( 'Translation language has been set to: "' + useLang + '"' );
            // translate.use( 'ru' );
        });
    }

    public ngOnInit() {
        // TODO
    }

    public getTranslate(): TranslateService {
        return this.translate;
    }

}
