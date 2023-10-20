import cuid from "cuid";
import Drawflow from "drawflow";
import { EditorComponentNotGate } from "./components/gates/not-gate";

export class LogicSim {

    editor: Drawflow;
    selectedNode: any;
    nodeMap: any = {};

    constructor(drawflowId:string) {
        const drawflowElement = document.getElementById(drawflowId);
        this.editor = new Drawflow(drawflowElement as HTMLElement);
        this.initEditor();
    }

    initEditor() {
        this.editor.useuuid = true;
        this.editor.reroute = true;
        this.editor.force_first_input = true;

        this.editor.curvature = 0;
        this.editor.reroute_curvature_start_end = 0;
        this.editor.reroute_curvature = 0;

        (this.editor as any).createCurvature = function(
            start_pos_x:number, 
            start_pos_y:number, 
            end_pos_x:number, end_pos_y:number, 
            curvature_value:number) {
            var center_x = ((end_pos_x - start_pos_x)/2)+start_pos_x;
            return ' M ' + start_pos_x + ' ' + start_pos_y + ' L '+ center_x +' ' +  start_pos_y  + ' L ' + center_x + ' ' +  end_pos_y  + ' L ' + end_pos_x + ' ' + end_pos_y;
        }

        this.editor.on('nodeMoved', function(id) {
            console.log(id);
        });

        this.editor.on('nodeSelected', function(id) {
            console.log(id);
        });

        this.editor.on('click', (e) => {
            console.log(e);
            if(e.target && (e.target as HTMLElement).getAttribute('data-component-id') && !this.selectedNode) {
                const dataComponentId = (e.target as HTMLElement).getAttribute('data-component-id');
                console.log("ASDASDASD");
                console.log(dataComponentId);
                this.selectedNode = this.editor.getNodeFromId(this.nodeMap[dataComponentId as string]);
                this.selectedNode.pos_x = 500;
                this.editor.updateConnectionNodes(this.selectedNode.id);
            }           
        });
        
        this.editor.start();

        const componentId = 'not-'+cuid();
        const notGate = new EditorComponentNotGate(componentId);
        this.nodeMap[componentId] = this.editor.addNode(componentId, notGate.inputs, notGate.outputs, 100, 100, notGate.className, notGate.data, notGate.html, false);
        console.log(this.nodeMap);
    }

    getEditor() {
        return this.editor;
    }
}