import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css'],
})
export class Practice1Component implements OnInit {
  constructor() {}
  title: string = 'Loop through data';
  games: any[] = ['Badminton', 'Tennis', 'Carrom'];

  infoList: any = { name: 'Random one', id: 'one001' };

  showInfo: boolean = true;

  onClickShowGames(a) {
    console.log(this.games);
    // alert(this.games);
  }

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Button Cliecked';
  }
  ngOnInit(): void {
    this.onClickShowGames(2);
  }
}
