import { CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LibSharedModulesService } from '../../lib-shared-modules.service';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() backButton : boolean = false ;
  @Input() title!: string;
  @Input() headerData : any[] = [];

  constructor( private libsharedservice : LibSharedModulesService) {}

  backArrowButton() {
    this.libsharedservice.goBack()
  }
  
}
