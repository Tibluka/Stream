import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'streaming';
  position = window.scrollY

  ngOnInit(): void {
    window.onscroll = () => {
      if (window.scrollY >= 0) {
        this.position = window.scrollY
      }
    };
  }

}
