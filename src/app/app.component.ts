import { Component } from '@angular/core';
import { LineStyle } from '@progress/kendo-angular-charts';

@Component({
  selector: 'my-app',
  template: `
    <kendo-dropdownlist [data]="['normal', 'smooth']" [(ngModel)]="style" [style.width.px]="170">
    </kendo-dropdownlist>
    <kendo-chart>
      <kendo-chart-series>
        <kendo-chart-series-item [style]="style" type="scatterLine"
            [data]="data"
            [markers]="{ visible: false }">
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
  public style: LineStyle = 'normal';
  public data = [
    [0, 20], [1, 1], [2, 18], [3, 3],
    [4, 15], [5, 5], [6, 10], [7, 6],
    [8, 9], [9, 6], [10, 10], [11, 5],
    [12, 13], [13, 3], [14, 16], [15, 1],
    [16, 19], [17, 1], [18, 20], [19, 2],
    [20, 18], [21, 5], [22, 12], [23, 7],
    [24, 10], [25, 8]
  ];
}
