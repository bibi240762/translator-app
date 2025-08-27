document.getElementById('translateBtn').addEventListener('click', async function() {
    const inputText = document.getElementById('inputText').value;
    const apiKey = 'YOUR_API_KEY_HERE'; // *** ใส่ API Key ของคุณที่นี่ ***
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    // เตรียมข้อมูลที่จะส่งไปหา API
    const data = {
        q: inputText,
        target: 'en' // แปลจากไทยเป็นอังกฤษ
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        const translatedText = result.data.translations[0].translatedText;
        document.getElementById('outputText').value = translatedText;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('outputText').value = 'เกิดข้อผิดพลาดในการแปล';
    }
});