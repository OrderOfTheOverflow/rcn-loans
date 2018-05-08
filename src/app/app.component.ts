import { Component, OnInit, isDevMode} from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  environmentName: any = environment.envName;
  animal: string = environment.animal;
  constructor() {
    console.log(this.animal);
  }
  ngOnInit(): void {
    if (isDevMode()) {console.log('👋 Development!'); } else {console.log('💪 Production!'); }
  }
}
