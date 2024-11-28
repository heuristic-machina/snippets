import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/db';
import * as actions from '@/actions';

interface SnippetShowPageProps {
    params: Promise<{
      id: string;
    }>;
  }

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    //create pause for loading.tsx feature
    //delay 2 seconds for development only
    await new Promise((r) => setTimeout(r, 2000));
    const { id } = await props.params;
 
    //url recognizes the query as a string but the id is type int
    //parseInt used to remove error
    const snippet = await db.snippet.findFirst({
      where: { id: parseInt(id) },
    });

    if (!snippet) {
        return notFound();
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)
  
    // console.log(props);
    return (
      <div>
        <div className='flex m-4 justify-between items-center'>
          <h1 className='text-xl font-bold'>{snippet.title}</h1>
        </div>
        <div className='flex gap-4'>
          <Link href={`/snippets/${snippet.id}/edit`}
          className='p-2 border rounded'
          >Edit</Link>
          <form action={deleteSnippetAction}>
            <button className='p-2 border rounded'>Delete</button>
          </form>
          </div>
        <pre className='p-3 border rounded bg-gray-900 border-gray-200'>
          <code>{snippet.code}</code>
        </pre>
      </div>
    )
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    }
  })
}
