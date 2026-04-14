import { useState } from 'react';
import './TodoEditor.css'

function TodoEditor({onCreate}) {
    const [content, setContent] = useState("")
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus()
            return;
        }
        onCreate(content);
    }

    return (
        <div className='TodoEditor'>
            <h4>새로운 Todo 작성하기</h4>
            <div className='editor-wrapper'>
                <input value={content} onChange={onChangeContent} placeholder='새로운 Todo...' />
                <button>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;