document.getElementById('translateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    // แสดงข้อความ "Translating..." เพื่อเป็นลูกเล่น
    outputText.value = 'Translating...';

    // เรียกฟังก์ชันแปลภาษาที่เราเปลี่ยนชื่อแล้ว
    const translatedText = translateEnTh(inputText);

    // หน่วงเวลาเล็กน้อยเพื่อให้เห็นข้อความ "Translating..."
    setTimeout(() => {
        outputText.value = translatedText;
    }, 1000); // หน่วงเวลา 1 วินาที
});

function translateEnTh(text) {
    // นี่คือการแปลแบบง่ายๆ โดยใช้การแทนที่คำศัพท์ที่กำหนดไว้
    // เพิ่มคำศัพท์ที่คุณต้องการแปลได้ใน Object ด้านล่าง
    const translations = {
        'hello': 'สวัสดี',
        'world': 'โลก',
        'how are you': 'สบายดีไหม',
        'i am fine': 'สบายดี',
        'thank you': 'ขอบคุณ',
        'love': 'รัก',
        'happy': 'มีความสุข'
    };
    
    // แปลงข้อความให้เป็นตัวพิมพ์เล็กเพื่อความง่ายในการเปรียบเทียบ
    const lowerText = text.toLowerCase().trim();
    
    // แยกข้อความออกเป็นคำๆ และแปลแต่ละคำ
    const words = lowerText.split(/\s+/);
    const translatedWords = words.map(word => {
        return translations[word] || word; // คืนค่าคำที่แปลได้ ถ้าไม่มีก็จะคืนค่าคำเดิม
    });
    
    return translatedWords.join(' ');
}