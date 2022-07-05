import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { RailzConnect } from '@railzai/railz-connect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-react';
  @ViewChild('railzConnect', { static: false }) railzConnect: ElementRef;

  ngAfterViewInit(): void {
    const widget = new RailzConnect();
    widget.mount({
      parentElement: this.railzConnect.nativeElement,
      widgetId: 'wid_dev_457bbff4-1e4c-4fe1-899d-9ad74b87ec41',
    });
  }
}
