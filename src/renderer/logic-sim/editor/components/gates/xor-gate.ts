import { EditorComponent } from "../editor-component";

export class EditorComponentXorGate implements EditorComponent {

  id:string;
  html:string;

  constructor(id: string) {
    this.id = id;
    this.html = `
    <div class="gate-content" data-component-id=${this.id} >^</div>
    `;
  }

  data = { type : "xor", value : null, hasTruthTable: true };
  inputs = 2;
  outputs = 1;
  className = 'xor-gate';
}
