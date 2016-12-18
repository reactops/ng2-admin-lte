import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { TranslateService } from 'ng2-translate';
import { Preferences } from '../models/preferences';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { User } from '../models/user';

let defaultUserAvatarUrl = '../../public/assets/img/user0-160x160.jpg';

@Injectable()
export class PreferencesService implements OnInit {

    public systemPreferences: ReplaySubject<Preferences> = new ReplaySubject<Preferences>( 1 );
    public currentUser: User;

    constructor( private userServ: UserService ) {
        this.userServ.currentUser.subscribe(( user: User ) => {
            this.currentUser = user;

            // let browserLang = this.translate.getBrowserLang();
            let prefs: Preferences = new Preferences( {
                avatarUrl: defaultUserAvatarUrl,
                parentPreferences: null,
                preferredLang: 'en'
            });
            this.systemPreferences.next( prefs );

            this.currentUser.preferences = new Preferences();
            this.currentUser.preferences.parentPreferences = prefs;
            console.log( 'Initialized Preferences Service' );
        });
    }

    public ngOnInit() {
        // TODO
    }

    public setSystemPreferences( prefs: Preferences ) {
        this.systemPreferences.next( prefs );
        this.currentUser.preferences.parentPreferences = prefs;
        console.log( 'Preferences has been updated successfully..' );
        // console.log( this.currentUser.preferences.toString() );
    }

}
