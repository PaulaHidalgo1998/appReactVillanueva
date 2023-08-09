import fs from 'fs/promises'; // Using the built-in promises version of the fs module

const file_path = 'database.json';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const content = await fs.readFile(file_path, 'utf-8');
            res.status(200).json({content});
        } catch (error) {
            res.status(500).json({error: 'Error reading file'});
        }
    } else {
        res.status(405).json({error: 'Method not allowed'});
    }
}
