import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/message';
import { ReplaySubject } from 'rxjs/Rx';

@Component({
  selector: 'app-page-message',
  styleUrls: ['./page-message.component.css'],
  templateUrl: './page-message.component.html'
})
export class PageMessageComponent implements OnInit, OnDestroy {
  private id: string;
  private sub: any;
  private subroute: string;

  constructor(
    private route: ActivatedRoute,
    private breadServ: BreadcrumbService,
    private messagesServ: MessagesService
  ) {
    // TODO
  }

  public ngOnInit() {
    // when calling routes change
    let idkey = 'id';
    let subroute = 'subroute';
    this.sub = this.route.params.subscribe((data) => {
      this.id = data[idkey];
      this.subroute = data[subroute];
      let breadLevels: Array<any> = [
          {
            icon: 'home',
            link: ['/'],
            title: 'Home'
          }
      ];
      let messages: ReplaySubject<Message[]> = this.messagesServ.messages;

      // changing header
      this.breadServ.set({
        description: 'This is our ' + this.id + ' message',
        display: true,
        levels: [
          {
            icon: 'home',
            link: ['/'],
            title: 'Home'
          },
          {
            icon: 'inbox',
            link: ['messages'],
            title: 'Messages'
          },
          {
            icon: 'comments-o',
            link: ['messages/' + this.subroute],
            title: this.subroute
          },
          {
            icon: 'envelope-open-o',
            link: ['messages/' + this.subroute + '/' + this.id],
            title: this.id
          }
        ]
      });
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.breadServ.clear();
    this.messagesServ = null;
    this.route = null;
  }
}
