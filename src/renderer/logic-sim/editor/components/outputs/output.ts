import { EditorComponent } from "../editor-component";

export class EditorComponentOutput implements EditorComponent {
    id:string;
    html:string;
    
    constructor(id: string) {
        this.id = id;
        this.html =  `
            <div></div>
        `;
    }

    data = {type:"output", value: null};
    inputs = 1;
    outputs = 0;
    className = 'output-component variable-component';

}