import { EditorComponent } from "../editor-component";

export class EditorComponentNandGate implements EditorComponent {
    id:string;
    html:string;
    
    constructor(id: string) {
        this.id = id;
        this.html = 
        `
              <div data-component-id=${this.id}>
                <div class="title-box" style="text-align:center;">
                NAND GATE</div>
                <div class="box">
                  <table style="margin-left: auto;
                  margin-right: auto;" class="truth-table">
                  <tr>
                <th>A</th>
                  <th>B</th>
                  <th>X</th>
                </tr>
                <tr class="nand-0-0">
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr class="nand-1-0">
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr class="nand-0-1">
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr class="nand-1-1">
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                  </table>
                </div>
              </div>
              
        `;
    }

    data = { type : "nand", value : null, hasTruthTable: true };
    inputs = 2;
    outputs = 1;
    className = 'nand-gate';
}