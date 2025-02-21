// frontend/src/components/JsonInput.jsx
import { useState } from 'react';

export default function JsonInput({ onSubmit }) {
    const [input, setInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const data = JSON.parse(input);
            onSubmit(data);
        } catch (err) {
            alert('Invalid JSON format');
        }
    };

    return (
        <div>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='{"data": ["A","C","z"]}'
                rows={5}
                className="json-input"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}