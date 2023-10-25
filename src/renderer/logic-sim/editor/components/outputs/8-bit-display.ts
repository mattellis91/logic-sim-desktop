import { EditorComponent } from "../editor-component";

export class EditorComponent8BitDisplay implements EditorComponent {
    id:string;
    html:string;
    
    constructor(id: string) {
        this.id = id;
        this.html = 
        `
            <div>
            <div class="title-box" style="text-align:center;">
                8 BIT DISPLAY</div>
            </div>
        `;
    }

    data = { type : "8-bit-display", value : null };
    inputs = 8;
    outputs = 0;
    className = 'display-8-bit';
}