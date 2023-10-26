import cuid from "cuid";
import Drawflow from "drawflow";
import { EditorComponentNotGate } from "./components/gates/not-gate";
import { EditorComponentAndGate } from "./components/gates/and-gate";
import { EditorComponentNandGate } from "./components/gates/nand-gate";
import { EditorComponentOrGate } from "./components/gates/or-gate";
import { EditorComponentNorGate } from "./components/gates/nor-gate";
import { EditorComponentXnorGate } from "./components/gates/xnor-gate";
import { EditorComponentXorGate } from "./components/gates/xor-gate";
import { EditorComponentInputVariable } from "./components/inputs/input-variable";
import { EditorComponentInputConstantOff } from "./components/inputs/input-constant-off";
import { EditorComponentInputConstantOn } from "./components/inputs/input-constant-on";

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

        this.editor.on('nodeMoved', function(id:string) {
            console.log(id);
        });

        // this.editor.on('nodeSelected', function(id:string) {
        //     console.log(id);
        // });

        // this.editor.on('click', (e:Event) => {
        //     console.log(e);
        //     if(e.target && (e.target as HTMLElement).getAttribute('data-component-id') && !this.selectedNode) {
        //         const dataComponentId = (e.target as HTMLElement).getAttribute('data-component-id');
        //         console.log("ASDASDASD");
        //         console.log(dataComponentId);
        //         this.selectedNode = this.editor.getNodeFromId(this.nodeMap[dataComponentId as string]);
        //         this.selectedNode.pos_x = 500;
        //         this.editor.updateConnectionNodes(this.selectedNode.id);
        //     }           
        // });
        
        this.editor.start();

        const componentId = 'not-'+cuid();
        const notGate = new EditorComponentNotGate(componentId);
        this.nodeMap[componentId] = this.editor.addNode(componentId, notGate.inputs, notGate.outputs, 100, 100, notGate.className, notGate.data, notGate.html, false);
        console.log(this.nodeMap);
    }

    getEditor() {
        return this.editor;
    }

    addComponent(name:string, pos_x:number, pos_y:number): boolean {

        if (this.editor.editor_mode === 'fixed') {
            return false;
        }
        pos_x = pos_x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)));
        pos_y = pos_y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)));
  
        console.log(name)

        switch(name) {
            //GATES
            case 'not-gate': {
                const componentId = 'not-'+cuid();
                const notGate = new EditorComponentNotGate(componentId);
                this.editor.addNode('not-'+cuid(), notGate.inputs, notGate.outputs, pos_x, pos_y, notGate.className, notGate.data, notGate.html, false);
                break;
            }
            case 'and-gate': {
                const componentId = 'and-'+cuid();
                const andGate = new EditorComponentAndGate(componentId);
                this.editor.addNode('and-'+cuid(), andGate.inputs, andGate.outputs, pos_x, pos_y, andGate.className, andGate.data, andGate.html, false);
                break;
            }
            case 'nand-gate': {
                const componentId = 'nand-'+cuid();
                const nandGate = new EditorComponentNandGate(componentId);
                this.editor.addNode('nand-'+cuid(), nandGate.inputs, nandGate.outputs, pos_x, pos_y, nandGate.className, nandGate.data, nandGate.html, false);
                break;
            }
            case 'or-gate': {
                const componentId = 'or-'+cuid();
                const orGate = new EditorComponentOrGate(componentId);
                this.editor.addNode('or-'+cuid(), orGate.inputs, orGate.outputs, pos_x, pos_y, orGate.className, orGate.data, orGate.html, false);
                break;
            }
            case 'nor-gate': {
                const componentId = 'nor-'+cuid();
                const norGate = new EditorComponentNorGate(componentId);
                this.editor.addNode('nor-'+cuid(), norGate.inputs, norGate.outputs, pos_x, pos_y, norGate.className, norGate.data, norGate.html, false);
                break;
            }
            case 'xor-gate': {
                const componentId = 'xor-'+cuid();
                const xorGate = new EditorComponentXorGate(componentId);
                this.editor.addNode('xor-'+cuid(), xorGate.inputs, xorGate.outputs, pos_x, pos_y, xorGate.className, xorGate.data, xorGate.html, false);
                break;
            }
            case 'xnor-gate': {
                const componentId = 'xnor-'+cuid();
                const xnorGate = new EditorComponentXnorGate(componentId);
                this.editor.addNode('xnor-'+cuid(), xnorGate.inputs, xnorGate.outputs, pos_x, pos_y, xnorGate.className, xnorGate.data, xnorGate.html, false);
                break;
            }
            //INPUTS
            case 'input-component-variable': {
                const componentId = 'inputVar-'+cuid();
                const inputVariable = new EditorComponentInputVariable(componentId);
                this.editor.addNode('inputVar-'+cuid(), inputVariable.inputs, inputVariable.outputs, pos_x, pos_y, inputVariable.className, inputVariable.data, inputVariable.html, false);
                break;
            }
            case 'input-component-off': {
                const componentId = 'inputOff-'+cuid();
                const inputOff = new EditorComponentInputConstantOff(componentId);
                this.editor.addNode('inputOff-'+cuid(), inputOff.inputs, inputOff.outputs, pos_x, pos_y, inputOff.className, inputOff.data, inputOff.html, false);
                break;
            }
            case 'input-component-on': {
                const componentId = 'inputOn-'+cuid();
                const inputOn = new EditorComponentInputConstantOn(componentId);
                this.editor.addNode('inputOn-'+cuid(), inputOn.inputs, inputOn.outputs, pos_x, pos_y, inputOn.className, inputOn.data, inputOn.html, false);
                break;
            }
        }
        return false;
    }
}