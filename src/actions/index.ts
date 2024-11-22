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

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: {id}
    });
    redirect('/');
}

export async function createSnippet(formState: {message: string}, formData: FormData) {
    return {
        message: 'Title must be longer'
    }
    // //check user's input validation
    // const title = formData.get('title') as string;
    // const code = formData.get('code') as string;
    // //create new db record
    // const snippet = await db.snippet.create({
    //     data: {
    //         title,
    //         code
    //     }
    // });
    // console.log(snippet);
    // //redirect user back to root route
    // redirect('/');
}