// import Image from "next/image";
import Link from 'next/link';
import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className='flex justify-between items-center p-2 border rounded'
        >
          <div>{snippet.title}</div>
          <div>View</div>
      </Link>
    )
  });
  return (
    <div>
        {renderedSnippets}
    </div>
  );
}
