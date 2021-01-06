import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClass() {
    this.activeMenu = !this.activeMenu;
  }

}
