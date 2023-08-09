import fs from 'fs/promises'; // Using the built-in promises version of the fs module

const file_path = 'database.json';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const content = await fs.readFile(file_path, 'utf-8');
            let personas = JSON.parse(content);
            let id = personas.personas.length + 1;
            let persona = req.body;
            persona.id = id;
            personas.personas.push(persona);
            await fs.writeFile(file_path, JSON.stringify(personas), 'utf-8');
            res.status(200).json({ message: 'File updated successfully' });
        } catch (error) {
            res.status(500).json({error: 'Error reading file'});
        }
    } else {
        res.status(405).json({error: 'Method not allowed'});
    }
}
