import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.css'],
})
export class StatBarComponent implements OnInit {
  @Input() value: number = 0;
  currentValue: number = 0;

  ngOnInit() {
    this.animateBar();
  }

  animateBar() {
    const duration = 1000;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = this.value / steps;

    const interval = setInterval(() => {
      this.currentValue += increment;
      if (this.currentValue >= this.value) {
        this.currentValue = this.value;
        clearInterval(interval);
      }
    }, stepTime);
  }
}
