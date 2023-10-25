import Drawflow from "drawflow";
import { useState } from "react";
import { LogicSim } from "../logic-sim";

type DockProps = {
    editor: LogicSim | undefined;
}

export default function Dock({ editor }: DockProps) {

    const [draggedItem, setDraggedItem] = useState<HTMLElement | null>(null);
    
    const dockItems = [
        {
            content: 'fas fa-cubes',
            id: 'all-components',
            type: 'component',
            tooltip: 'All components',
            draggable: false,
        },
        {
            content: 'i',
            id: 'variable-input',
            type: 'input-component-variable',
            tooltip: 'Variable Input',
            draggable: true,
        },
        {
            content: 'o',
            id: 'output-component',
            type: 'output-component',
            tooltip: 'Output',
            draggable: true,
        },
        {
            content: '!',
            id: 'not-gate',
            type: 'not-gate',
            tooltip: 'Not Gate',
            draggable: true,
        },
        {
            content: '&',
            id: 'and-gate',
            type: 'and-gate',
            tooltip: 'And Gate',
            draggable: true,
        },
        {
            content: '|',
            id: 'or-gate',
            type: 'or-gate',
            tooltip: 'Or Gate',
            draggable: true,
        },
        {
            content: '^',
            id: 'xor-gate',
            type: 'xor-gate',
            tooltip: 'Xor Gate',
            draggable: true,
        },
        {
            content: 'fas fa-microchip',
            id: 'custom-component',
            type: 'custom-component',
            tooltip: 'Custom Component',
            draggable: true,
        },
        {
            content: 'fas fa-search-minus',
            id: 'zoom-out',
            type: 'zoom-out',
            tooltip: 'Zoom Out',
            draggable: true,
        },
        {
            content: 'fas fa-search-plus',
            id: 'zoom-in',
            type: 'zoom-in',
            tooltip: 'Zoom In',
            draggable: true,
        },
        {
            content: 'fas fa-lock',
            id: 'lock-curcuit',
            type: 'lock-curcuit',
            tooltip: 'Lock Curcuit',
            draggable: true,
        },
        {
            content: 'fas fa-save',
            id: 'save-curcuit',
            type: 'save-curcuit',
            tooltip: 'Save Curcuit',
            draggable: true,
        },
    ]

    function handleDrop(e:any) {
        e.stopPropagation();
        e.preventDefault();
    }

    function handleDragOver(e:any) {
        e.stopPropagation();
        e.preventDefault();
    }

    function handleDragLeave(e:any) {
        e.stopPropagation();
        e.preventDefault();
        console.log(e);
        setDraggedItem(e.target);
    }

    function handleDragEnter(e:any) {
        e.stopPropagation();
        e.preventDefault();
    }

    function handleDragEnd(e:any) {
        e.stopPropagation();
        e.preventDefault();
        console.log(e);
        const componentId = e.target.attributes.getNamedItem('data-component-id')?.value;
        if(componentId && editor) {
            console.log(componentId);
            editor?.addComponent(componentId, e.clientX, e.clientY);
        }
    }
    
    return (
        <div className="dock">
            {dockItems.map((item) => {
                return (
                    <div className="dock-element" key={item.id} draggable={item.draggable} data-component-id={item.type} 
                        onDrop={e => handleDrop(e) }
                        onDragOver={e => handleDragOver(e) }
                        onDragLeave={e => handleDragLeave(e) }
                        onDragEnter={e => handleDragEnter(e) }
                        onDragEnd={e => handleDragEnd(e) } 
                    >
                        {item.content.startsWith('fas') ? <i className={item.content}></i> : <span>{item.content}</span>}
                    </div>
                )
            })}
        </div>
    )
}