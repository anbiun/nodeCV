const express = require('express');
const app = express();
const port = 3000; // เลือกพอร์ตที่คุณต้องการ

// ใช้ Express.js เพื่อเซิร์ฟเวอร์ไฟล์ HTML และส่วนอื่นๆ ในโฟลเดอร์ public
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});