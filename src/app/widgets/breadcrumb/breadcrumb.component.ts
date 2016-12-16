import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  styleUrls: ['./breadcrumb.component.css'],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  private display: boolean = false;
  private header: string = '';
  private description: string = '';
  private levels: Array<any> = [];

  constructor(private breadServ: BreadcrumbService) {
    // recuperation des données depuis le service
    this.breadServ.current.subscribe((data) => {
      this.display = data.display;
      this.header = data.header;
      this.description = data.description;
      this.levels = data.levels;
    });
  }

}
