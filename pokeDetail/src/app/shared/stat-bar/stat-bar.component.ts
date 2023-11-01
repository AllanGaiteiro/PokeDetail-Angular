import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.css'],
})
export class StatBarComponent {
  @Input() value?: number;
}
