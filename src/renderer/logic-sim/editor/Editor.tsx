import Drawflow from "drawflow";
import { useEffect } from "react";
import Dock from "./dock/Dock";
import { EditorComponentNotGate } from "./components/gates/not-gate";
import cuid from "cuid";

export default function Editor() {

    let selectedNode:any = null;
    const nodeMap:Record<string, string | number> = {}

    useEffect(() => {
        const id = document.getElementById('drawflow');
        const editor = new Drawflow(id as HTMLElement);

        editor.useuuid = true;
        editor.reroute = true;
        editor.force_first_input = true;

        editor.curvature = 0;
        editor.reroute_curvature_start_end = 0;
        editor.reroute_curvature = 0;

        (editor as any).createCurvature = function(
            start_pos_x:number, 
            start_pos_y:number, 
            end_pos_x:number, end_pos_y:number, 
            curvature_value:number) {
            var center_x = ((end_pos_x - start_pos_x)/2)+start_pos_x;
            return ' M ' + start_pos_x + ' ' + start_pos_y + ' L '+ center_x +' ' +  start_pos_y  + ' L ' + center_x + ' ' +  end_pos_y  + ' L ' + end_pos_x + ' ' + end_pos_y;
        }

        editor.on('nodeMoved', function(id) {
            console.log(id);
        });

        editor.on('nodeSelected', function(id) {
            console.log(id);
        });

        editor.on('click', function(e) {
            console.log(e);
            if(e.target && (e.target as HTMLElement).getAttribute('data-component-id') && !selectedNode) {
                const dataComponentId = (e.target as HTMLElement).getAttribute('data-component-id');
                console.log("ASDASDASD");
                console.log(dataComponentId);
                selectedNode = editor.getNodeFromId(nodeMap[dataComponentId as string]);
                selectedNode.pos_x = 500;
                editor.updateConnectionNodes(selectedNode.id);
            }           
        });
        
        editor.start();

        const componentId = 'not-'+cuid();
        const notGate = new EditorComponentNotGate(componentId);
        nodeMap[componentId] = editor.addNode(componentId, notGate.inputs, notGate.outputs, 100, 100, notGate.className, notGate.data, notGate.html, false);
        console.log(nodeMap);
    });
    

    return (
        <div id="drawflow-wrapper">
            <div id="drawflow" />
            <Dock />
        </div>
    )
}