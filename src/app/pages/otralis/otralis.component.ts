import { Component } from '@angular/core';

@Component({
  selector: 'app-otralis',
  templateUrl: './otralis.component.html',
  styleUrls: ['./otralis.component.scss']
})
export class OtralisComponent {

  lista = ['paul', 'andres']
addItem(newItem: string) {
  this.lista.push(newItem);
}

}
