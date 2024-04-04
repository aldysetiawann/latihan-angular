import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  img: string[] = ['https://fastly.picsum.photos/id/832/1920/1080.jpg?hmac=w8s0jE9DB-9KT0D5ik76eOGIKDfwH1bJ5bBnBfCldQ0', 'https://fastly.picsum.photos/id/626/1920/1080.jpg?hmac=4Br5Jm6QDs1qAaBlEvCubV6T687-IQqn2CCZkVWL4z4', 'https://fastly.picsum.photos/id/122/1920/1080.jpg?hmac=ldynX93rVeTWk1ck63KkZynJuRiuOeRpXULW0Sf5SNs'];
  index: number = 0;

  nextPict() {
    if (this.index == 2) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  prevPict() {
    if (this.index == 0) {
      this.index = 2;
    } else {
      this.index--;
    }
  }
}
