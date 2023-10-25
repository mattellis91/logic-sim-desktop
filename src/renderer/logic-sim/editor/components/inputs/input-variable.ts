import { EditorComponent } from "../editor-component";

export class EditorComponentInputVariable implements EditorComponent {
    id:string;
    html:string;
    
    constructor(id: string) {
        this.id = id;
        this.html = `
        <div class="input-variable-container">
            <span>${this.data.value}</span>
        </div>
        `
    }

    data = {type:"input", value: 1}
    inputs = 0;
    outputs = 1;
    className = 'input-component-variable';

}