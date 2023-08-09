'use client'

import { useState } from 'react'
import axios from "axios";

export default function Personas() {
    const [count, setCount] = useState(0)
    const [personas, setPersonas] = useState({})

    const fetchFileContent = async () => {
        try {
            const response = await axios.get('/api/getPersonas');
            setPersonas(JSON.parse(response.data.content).personas);
        } catch (error) {
            console.error('Error fetching file content:', error);
        }
    };

    const addPersona = async () => {
        try {
            const response = await axios.post('/api/addPersona', {
                nombre: 'Adrian',
                apellido: 'Ruiz Housholder',
                dineros: 40
            });
            await fetchFileContent();
        } catch (error) {
            console.error('Error updating file:', error);
        }
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button style={{cursor: 'pointer'}} onClick={async () => {
                await fetchFileContent();
            }}>Load DB</button>
            {
                Object.keys(personas).map((key) => {
                    return (
                        <div key={key}>
                            <p>{personas[key].nombre}</p>
                            <p>{personas[key].apellido}</p>
                            <p>{personas[key].edad}</p>
                        </div>
                    )
                })
            }
            <button style={{cursor: 'pointer'}} onClick={addPersona}>Add Persona</button>
        </div>
    )
}