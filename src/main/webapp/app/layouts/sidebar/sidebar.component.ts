import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  title = 'angularbootstrap';
  status = false;

  // constructor() { }

  ngOnInit(): void {
    this.status = false;
  }

  toggleSidebar(): void {
    this.status = !this.status;
  }

}
