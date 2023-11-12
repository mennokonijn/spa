import {Component, OnInit} from '@angular/core';
import {getFCP, getTTFB, getLCP, getFID} from 'web-vitals';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-app';

  public ngOnInit() {
      getFCP((metric) => {
          console.log("FCP:", metric.value);
      });

      getTTFB((metric) => {
          console.log("TTFB:", metric.value);
      });

      document.addEventListener("click", () => {
          getFID((metric) => {
              console.log("FID:", metric.value);
          });

          getLCP((metric) => {
              console.log("LCP:", metric.value);
          })
      });

  }
}
