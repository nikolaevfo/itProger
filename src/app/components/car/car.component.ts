import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})

// mplements OnInit дает вызвать ngOnInit, метод должен быть реализован
export class CarComponent implements OnInit {
  // model можно передавать в шаблон html
  name: string = 'bmv';
  model: string = 'i3';
  speed: number = 20;
  colors: Icolors = {
    car: 'red',
    salon: 'blue',
    wheels: 'black',
  };
  options: string[] = [];
  test: any;
  isEdit: boolean = false;
  isShowCar: boolean = true;

  constructor() {}

  // при создании компонента
  ngOnInit() {
    this.model = 'audi';
    this.speed = 500;
    this.options = ['abs', 'hz'];
    this.test = 1;
    this.test = '2';
  }

  carSelect(name: string) {
    switch (name) {
      case 'bmw':
        this.name = name;
        break;
      case 'audi':
        this.name = name;
        break;
      case 'mers':
        this.name = name;
        break;
    }
  }

  addOpt(opt: string) {
    this.options.unshift(opt);
    return false;
  }

  deleteOpt(opt: string) {
    this.options = this.options.filter((item) => item !== opt);
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }
  showCar() {
    this.isShowCar = !this.isShowCar;
    return false;
  }
}

interface Icolors {
  car: string;
  salon: string;
  wheels: string;
}
