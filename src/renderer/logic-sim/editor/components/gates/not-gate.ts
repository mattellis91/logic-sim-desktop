import { EditorComponent } from "../editor-component";

export class EditorComponentNotGate implements EditorComponent {

  id:string;
  html:string;

  constructor(id: string) {
    this.id = id;
    this.html = `
      <div class="gate-content" data-component-id=${this.id}>!
      </div>
    `;
  }

  data = { type: 'not', value: null, hasTruthTable:true };
  inputs = 1;
  outputs = 1;
  className = 'not-gate';
}
