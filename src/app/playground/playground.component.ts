import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  code: string = '<html><body>Hello, Kode City!</body></html>';

  // Method to handle the code changes from the editor
  updateCode(newCode: string) {
    this.code = newCode;
  }
}
