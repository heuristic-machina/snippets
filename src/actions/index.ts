'use server'

import { db } from '@/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function editSnippet(id: number, code: string) {
    //wire up to client
    // console.log(id, code);

    //code to update snippet using Prisma
    await db.snippet.update({
        where: { id },
        data: { code }
    })
    revalidatePath(`/snippets/${id}`);
    //code to redirect user
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: {id}
    });
    revalidatePath('/');
    redirect('/');
}

export async function createSnippet(formState: {message: string}, formData: FormData) {

    //error handling try block
    try{

        
        //check user's input validation
        const title = formData.get('title');
        const code = formData.get('code');
        
        if (typeof title !== 'string' || title.length < 3) {
            return {
                message: 'Title must be longer'
            }
        }
        if (typeof code !== 'string' || code.length < 10) {
            return {
                message: 'Code must be longer'
            }
        }
    //create new db record
    await db.snippet.create({
        data: {
            title,
            code
        }
    });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                message: err.message
            } 
        } else {
                return {
                    message: 'Something went wrong'
                }
            }
        }
   

    revalidatePath('/');
    //redirect user back to root route
    redirect('/');
}