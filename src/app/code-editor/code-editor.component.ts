import { Component, ElementRef, AfterViewInit, ViewChild, EventEmitter, Output } from '@angular/core';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';

declare const ace: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements AfterViewInit {
  @ViewChild('editor') editor!: ElementRef;
  @Output() codeChange = new EventEmitter<string>();  // Emit string, not Event
  @ViewChild('htmlEditor', { static: false }) htmlEditor!: ElementRef;
  @ViewChild('cssEditor', { static: false }) cssEditor!: ElementRef;
  @ViewChild('jsEditor', { static: false }) jsEditor!: ElementRef;
  public activeTab = 'html';
  ngAfterViewInit() {
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.setTheme('ace/theme/monokai');
    aceEditor.session.setMode('ace/mode/html');
    aceEditor.setValue(`
<!DOCTYPE html>
<html>
<head>
<title>Kode City IDE</title>
</head>
  <body>
      <div>
           <h1>Welcome To, Kode City!</h1>
      </div>
  </body>
</html>`);

    // Extract the new code from the editor's session on change
    aceEditor.session.on('change', () => {
      const newCode = aceEditor.getValue();  // Get the updated code as a string
      this.codeChange.emit(newCode);  // Emit the code, not the event
    });
  }
}
