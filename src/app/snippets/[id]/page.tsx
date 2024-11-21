import { notFound } from 'next/navigation';
import { db } from '@/db';

interface SnippetShowPageProps {
    params: Promise<{
      id: string;
    }>;
  }

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    //create pause for loading.tsx feature
    //delay 2 seconds
    await new Promise((r) => setTimeout(r, 2000));
    const { id } = await props.params;
 
    //url recognizes the query as a string but the idea is type int
    //parseInt used to remove error
    const snippet = await db.snippet.findFirst({
      where: { id: parseInt(id) },
    });

    if (!snippet) {
        return notFound();
    }
  
    // console.log(props);
    return <div>{snippet.title}</div>
}
