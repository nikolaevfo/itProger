import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})

// mplements OnInit дает вызвать ngOnInit, метод должен быть реализован
export class CarComponent implements OnInit {
  // model можно передавать в шаблон html
  name:string = 'bmv'
  model: string = 'i3'
  speed: number = 20
  colors: Icolors = {
    car: "red",
    salon: "red",
    wheels: "red"
  }
  options: string[] = []
  test: any

  constructor() { }

  // при создании компонента
  ngOnInit() {
    this.model = 'audi'
    this.speed = 500
    this.options = ["abs", "hz"]
    this.test = 1
    this.test = "2"
  }
}

interface Icolors {
  car: string,
  salon: string,
  wheels: string
}
