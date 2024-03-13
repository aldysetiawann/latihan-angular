import { Component, ContentChildren, QueryList } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: 'container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  @ContentChildren(Component) children = new QueryList<Component>()
}
