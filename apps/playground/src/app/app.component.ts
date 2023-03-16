import { APP_INITIALIZER, Component } from '@angular/core';
import { LingoPipe } from '@lingomatic/lingomatic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [LingoPipe, HttpClientModule],
  selector: 'lingomatic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'playground';

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get("assets/lingomatic.config.json")
      .subscribe((data) => console.log(data));
  }
}
