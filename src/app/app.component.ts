import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  miles: number = 0;

  onNameChange(target: any) {
    this.name = target.value;
  }

  onDateChange(target: any) {
    this.date = target.value;
  }

  onAmountChange(target: any) {
    this.amount = target.value;
  }

  onMilesChange(target: any) {
    this.miles = target.value;
  }
}
