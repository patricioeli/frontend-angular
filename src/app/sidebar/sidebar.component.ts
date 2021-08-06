import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer') drawer!: MatDrawer;

  options: string[] = ['Usuarios'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.toogleSidebar();
  }

  toogleSidebar() {
    this.drawer.toggle();
  }

}
