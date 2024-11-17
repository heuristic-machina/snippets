import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function SnippetCreatePage() {
    //server action
    async function createSnippet(formData: FormData) {
        'use server';
        //check user's input validation
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;
        //create new db record
        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        });
        console.log(snippet);
        //redirect user back to root route
        redirect('/');

    }

    return <form action={createSnippet}>
     <h3 className='font-bold m-3'>Create a Snippet</h3>
     <div className='flex flex-col gap-4'>
        <div className="flex gap-4">
           <label className="w-12" htmlFor='title'>
            Title
            </label>
            <textarea
            name='title'
            className='border rounded p-2 w-full text-black'
            id='title'
            />
        </div>
        <div className="flex gap-4">
           <label className="w-12" htmlFor='code'>
            Code
            </label>
            <textarea
            name='code'
            className='border rounded p-2 w-full text-black'
            id='code'
            />
        </div>
        <button type='submit' className="border rounded p-2 bg-blue-200">
            Create
        </button>
     </div>
    </form>
}