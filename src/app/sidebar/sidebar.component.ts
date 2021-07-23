import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  options: string[] = ['Usuarios', 'Administracion'];

  constructor() { }

  ngOnInit(): void {
  }

}
