import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-preview',
  template: `<iframe [srcdoc]="code" style="width:100%; height:500px;"></iframe>`,
  styleUrls: ['./live-preview.component.scss']
})
export class LivePreviewComponent {
  @Input() code!: string;
}
