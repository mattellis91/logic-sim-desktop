import { EditorComponent } from "../editor-component";

export class EditorComponentInputConstantOff implements EditorComponent {
    id:string;
    html:string;
    
    constructor(id: string) {
        this.id = id;
        this.html = 
        `
        <div><span>0</span></div>
        `;
    }

    data = { type:"input", value: 0 };
    inputs = 0;
    outputs = 1;
    className = 'input-component-off';
}