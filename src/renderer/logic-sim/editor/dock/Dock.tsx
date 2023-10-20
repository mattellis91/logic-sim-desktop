export default function Dock() {
    
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
            type: 'note-gate',
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
    
    return (
        <div className="dock">
            {dockItems.map((item) => {
                return (
                    <div className="dock-element" key={item.id} draggable={item.draggable} data-component-id={item.type}>
                        {item.content.startsWith('fas') ? <i className={item.content}></i> : <span>{item.content}</span>}
                    </div>
                )
            })}
        </div>
    )
}