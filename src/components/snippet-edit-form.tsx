'use client'
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);
    const handleEditorChange = (value: string ='') => {
        // console.log(value);
        setCode(value);
    }
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
        </div>
    )

}