import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit {
  @Input() pageName : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
