document.getElementById('translateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    // แสดงข้อความ "Translating..." เพื่อเป็นลูกเล่น
    outputText.value = 'Translating...';

    // การแปลแบบง่ายๆ (ไม่ใช้ API)
    const translatedText = simpleTranslate(inputText);

    // หน่วงเวลาเล็กน้อยเพื่อให้เห็นข้อความ "Translating..."
    setTimeout(() => {
        outputText.value = translatedText;
    }, 1000); // หน่วงเวลา 1 วินาที
});

function simpleTranslate(text) {
    // นี่คือการแปลแบบง่ายๆ โดยใช้การแทนที่คำศัพท์ที่กำหนดไว้
    const translations = {
        'hello': 'สวัสดี',
        'world': 'โลก',
        'how are you': 'สบายดีไหม',
        'i am fine': 'สบายดี',
        'thank you': 'ขอบคุณ',
        'love': 'รัก',
        'happy': 'มีความสุข'
    };
    
    const lowerText = text.toLowerCase().trim();
    
    const words = lowerText.split(/\s+/); // แก้ไขให้รองรับช่องว่างหลายช่อง
    const translatedWords = words.map(word => {
        return translations[word] || word;
    });
    
    return translatedWords.join(' ');
}