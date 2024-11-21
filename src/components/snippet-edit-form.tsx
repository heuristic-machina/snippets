'use client'
import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
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
            />
        </div>
    )

}