// frontend/src/components/ResponseDisplay.jsx
export default function ResponseDisplay({ response, selectedFields }) {
    if (!response || !selectedFields.length) return null;

    const filteredResponse = {};
    selectedFields.forEach(field => {
        if (response[field.value]) {
            filteredResponse[field.value] = response[field.value];
        }
    });

    return (
        <div className="response">
            <h3>Response:</h3>
            <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
        </div>
    );
}