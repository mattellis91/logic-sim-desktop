import {Box, Button} from '@mui/material';
import { useState } from 'react';


interface CurcuitEditorComponentsProps {
    setEditorComponent: (id: string) => void;
}

const CurcuitEditorComponents = ({setEditorComponent}:CurcuitEditorComponentsProps) => {

    interface ComponentGroup {
        label: string,
        data: Component[]
    }

    interface Component {
        id: string,
        label: string,
    }

    const [openedGroup, setOpenedGroup] = useState<string | null>(null);
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

    const handleSelectedComponent = (id: string) => {
        setSelectedComponent(id);
        setEditorComponent(id);
    }

    const toggleGroup = (id: string) => {
        if (openedGroup === id) {
            setOpenedGroup(null);
        } else {
            setOpenedGroup(id);
        }
    }

    const components: Record<string, ComponentGroup> = {
        inputs: {
            label: 'INPUTS',
            data : [
                {
                    id: 'input-component-on',
                    label: 'C1',
                },
                {
                    id: 'input-component-off',
                    label: 'C0',
                },
                {
                    id: 'input-component-variable',
                    label: 'V',
                }
            ]
        },
        outputs: {
            label: 'OUTPUTS',
            data: [
                {
                    id: 'output-component',
                    label: 'O',
                },
                {
                    id: '8-bit-display',
                    label: '8BIT',
                }
            ]
        },
        gates: {
            label: 'GATES',
            data: [
                {
                    id: 'and-gate',
                    label: 'AND',
                },
                {
                    id: 'nand-gate',
                    label: 'NAND'
                },
                {
                    id: 'or-gate',
                    label: 'OR'
                },
                {
                    id: 'nor-gate',
                    label: 'NOR'
                },
                {
                    id: 'xor-gate',
                    label: 'XOR'
                },
                {
                    id: 'xnor-gate',
                    label: 'XNOR'
                },
                {
                    id: 'not-gate',
                    label: 'NOT'
                }
            ]
        },
        custom: {
            label: 'CUSTOM',
            data: [
                {
                    id: 'new-custom',
                    label: 'NEW'
                },
                {
                    id: 'template-custom',
                    label: 'TEMPLATE'
                }
            ]
        }
    }

    return (
        <Box sx={{mr:2, position: 'absolute', right:0, top:0, textAlign:'right', mt:2, display:'flex', alignItems:'flex-end', flexDirection:'column'}}>
            {
                Object.keys(components).map((key:string) => {
                    return (
                        <Box key={key} sx={{mb:1}}>
                            {
                                openedGroup === key &&
                                components[key].data.map((component: Component) => {
                                    return (
                                        <Button key={component.id} onClick={() => handleSelectedComponent(component.id)} variant='contained' color='secondary' sx={{mr:1}}>{component.label}</Button>
                                    )
                                })
                            }
                            <Button variant='contained' onClick={() => toggleGroup(key)}>{components[key].label}</Button>
                        </Box>
                    )
                })
            }
            {
                selectedComponent &&
                <span>Selected Component: {selectedComponent}</span>
            }
        </Box>
    )
}

export default CurcuitEditorComponents;