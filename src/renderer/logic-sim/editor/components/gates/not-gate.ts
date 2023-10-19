import { EditorComponent } from "../editor-component";

export class EditorComponentNotGate implements EditorComponent {
  html = `
        <div class="gate-content">!
        </div>
    `;
    data = { type: 'not', value: null, hasTruthTable:true };
    inputs = 1;
    outputs = 1;
    className = 'not-gate';
}
