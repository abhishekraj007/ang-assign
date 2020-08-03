import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-practice4',
  templateUrl: './practice4.component.html',
  styleUrls: ['./practice4.component.css'],
})
export class Practice4Component implements OnInit {
  get_data: any = null;
  post_data: any = null;
  myjson = JSON;

  constructor(private http: HttpClient) {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => {
        this.get_data = data;
      });
    // setTimeout(() => {
    //   this.http
    //     .get<any>('https://reqres.in/api/users?page=4')
    //     .subscribe((data) => {
    //       this.get_data = data;

    //       setTimeout(() => {
    //         this.http
    //           .post<any>('https://reqres.in/api/users', {
    //             name: 'morpheus',
    //             job: 'leader',
    //           })
    //           .subscribe((data) => {
    //             this.post_data = data;
    //           });
    //       }, 1000);
    //     });
    // }, 1000);
  }

  ngOnInit() {}

  public num1: number;
  public num2: number;
  public result: number;

  addition() {
    this.result = this.num1 + this.num2;
  }
  subtraction() {
    this.result = this.num1 - this.num2;
  }
  multiplication() {
    this.result = this.num1 * this.num2;
  }
  division() {
    this.result = this.num1 / this.num2;
  }
}
