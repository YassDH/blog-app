import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DashboardHomeComponent {

}
