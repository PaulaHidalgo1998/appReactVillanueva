import Personas from "@/app/personas";

import {connectToDatabase} from './mongodb';

async function connectToMongoDB() {
  const db = await connectToDatabase();
  const collection = db.collection('Personas');
  return await collection.find({}).toArray();
}

export default function Home() {
  return (
    <Personas/>
  )
}
