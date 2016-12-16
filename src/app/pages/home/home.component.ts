import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public date: string = new Date(Date.now()).toLocaleString();

  constructor(private breadServ: BreadcrumbService) {
  }

  public ngOnInit() {
    // on place le header
    this.breadServ.set({
      description: 'HomePage',
      display: true,
      header: 'Dashboard',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        }
      ]
    });
  }

  public ngOnDestroy() {
    this.breadServ.clear();
  }

}
