import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidebar') sidebar!: SidebarComponent

  constructor() { }

  ngOnInit(): void {
  }

  onMenuToogle() {
    this.sidebar.toogleSidebar();
  }

}
