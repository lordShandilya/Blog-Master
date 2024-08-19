'use client'
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const ComposeField = () => {
    const [content, setContent] = useState('');
    const editor = useRef(null);

    return (
        <div className="px-20 py-5">
            <JoditEditor
            ref={editor}
            value={content}
            onChange={newContent => setContent(newContent)}
            
            />
        </div>
    )
}

export default ComposeField;