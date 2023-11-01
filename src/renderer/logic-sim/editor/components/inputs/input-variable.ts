import { EditorComponent } from "../editor-component";

export class EditorComponentInputVariable implements EditorComponent {
    id:string;
    html:string;
    label:string
    
    constructor(id: string, label:string) {
        this.id = id;
        this.label = label;
        this.html = `
        <div class="input-variable-container">
            <span>${label} (0)</span>
        </div>
        `
    }

    data = {type:"input", value: 0}
    inputs = 0;
    outputs = 1;
    className = 'input-component-variable input-component-switch';

}