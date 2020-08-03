import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css'],
})
export class Practice2Component implements OnInit {
  imageUrlBind = 'https://picsum.photos/seed/picsum/400/300';

  value = '';
  isSpecial: false;
  numberA: number = 10;
  numberB: number = 20;
  constructor() {}
  clearValue() {
    this.value = '';
  }
  onSave() {
    console.log('Clicked');
    alert('Clicked');
  }
  ngOnInit(): void {}
}
