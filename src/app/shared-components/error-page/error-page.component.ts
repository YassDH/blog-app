import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent {

}
