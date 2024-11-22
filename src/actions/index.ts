'use server'
import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function editSnippet(id: number, code: string) {
    //wire up to client
    // console.log(id, code);

    //code to update snippet using Prisma
    await db.snippet.update({
        where: { id },
        data: { code }
    })
    //code to redirect user
    redirect(`/snippets/${id}`);
}