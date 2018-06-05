import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
// App Component

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {}
  versionString: string;
  linkContract: string;
  ngOnInit() {
    const env = environment;
    this.versionString = env.version + '-' + env.build + ' - ' + env.version_name;
    this.linkContract = env.network.explorer.address.replace('${address}', env.contracts.basaltEngine);
  }
}
