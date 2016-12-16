import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit, OnDestroy {
  private currentUrl: string;
  private sub: any;

  private links: Array<any> = [
    {
      'title': 'Home',
      'icon': 'dashboard',
      'link': ['/']
    },
    {
      'title': 'Client',
      'icon': 'usd',
      'link': ['/client']
    },
    {
      'title': 'Sub menu',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Page 2',
          'link': ['/page/2'],
        },
        {
          'title': 'Page 3',
          'link': ['/page/3'],
        }
      ]
    },
    {
      'title': 'Sub menu 2',
      'icon': 'link',
      'link': ['/page/submenu2'],
      'sublinks': [
        {
          'title': 'Page 4',
          'link': ['/page/4'],
        },
        {
          'title': 'Page 5',
          'link': ['/page/5'],
        }
      ]
    },
    {
      'title': 'External Link',
      'icon': 'google',
      'link': ['http://google.com'],
      'external': true,
      'target': '_blank'
    },
    {
      'title': 'External Links',
      'icon': 'link',
      'sublinks': [
        {
          'title': 'Github',
          'link': ['http://github.com'],
          'icon': 'github',
          'external': true,
          'target': '_blank'
        },
        {
          'title': 'Yahoo',
          'link': ['http://yahoo.com'],
          'icon': 'yahoo',
          'external': true,
          'target': '_blank'
        }
      ]
    }
  ];

  constructor(private userServ: UserService, public router: Router, private auth: AuthService) {
  }

  public ngOnInit() {
    // recuperation de l'url courrante
    this.sub = this.router.events.subscribe((evt) => this.currentUrl = evt.url);
    // TODO
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
