'use client'
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import * as actions from '@/actions';

interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string ='') => {
        // console.log(value);
        setCode(value);
    };

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)


    return (
        // <div>
        //     Client Component has snippet with title {snippet.title}
        // </div>
        <div>
            <Editor
                height="40vh"
                theme='vs-dark'
                language="javascript"
                defaultValue={snippet.code}
                options={{minimap: {enabled: false}}}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button type='submit' className='p-2 border rounded'>Save</button>
            </form>
        </div>
    )

}