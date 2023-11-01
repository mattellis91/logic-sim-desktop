import { EditorComponent } from "../editor-component";

export class EditorComponentInputConstantOn implements EditorComponent {
    id:string;
    html:string;
    
    constructor(id: string) {
        this.id = id;
        this.html = `
        <div>
            <span>1</span>
        </div>
        `;
    }

    data = {type:"input", value: 1}
    inputs = 0;
    outputs = 1;
    className = 'input-component-on';
}