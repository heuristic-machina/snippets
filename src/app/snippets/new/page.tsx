'use client'

import { useActionState } from "react";
import * as actions from '@/actions';

export default function SnippetCreatePage() {
    const [formState, action] = useActionState(actions.createSnippet, {message: ''});



    return (
        <form action={action}>
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

            <div>
                {/* {formState.message} */}
                {/* if formState message is defined then show message but if formState is an empty string or not defined show null*/}
                {formState.message ? <div className="my-2 p-2 bg-red-900 border rounded border-red-200">{formState.message}</div> : null}
            </div>

            <button type='submit' className="border rounded p-2 bg-blue-900">
                Create
            </button>
        </div>
        </form>
    )
}