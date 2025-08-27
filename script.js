document.getElementById('translateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const translatedText = simpleTranslate(inputText);
    document.getElementById('outputText').value = translatedText;
});

function simpleTranslate(text) {
    // This is a very simple, hard-coded translation function
    // For a real app, you would use a translation API
    const translations = {
        'hello': 'สวัสดี',
        'world': 'โลก',
        'how are you': 'สบายดีไหม',
        'i am fine': 'สบายดี',
        'thank you': 'ขอบคุณ'
    };
    
    // Convert to lowercase to make it case-insensitive
    const lowerText = text.toLowerCase().trim();
    
    // Split the text into words and translate each one
    const words = lowerText.split(' ');
    const translatedWords = words.map(word => {
        return translations[word] || word; // Return the translation if it exists, otherwise return the original word
    });
    
    return translatedWords.join(' ');
}