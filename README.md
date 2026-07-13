# NoAI

เว็บคลัง Prompt สำหรับครู สกร. ออกแบบเป็นเว็บ static ใช้งานได้ฟรีบน GitHub Pages

## ไฟล์หลัก

- `index.html` โครงหน้าเว็บ
- `style.css` ธีมสีดำ แดง ขาว และเอฟเฟกต์ cursor กระพริบ
- `script.js` คลัง prompt ระบบค้นหา คัดลอก และ Prompt Builder

## การเปิดใช้งาน

เปิด `index.html` ใน browser ได้ทันที หรือเปิด GitHub Pages จาก repository settings

## การนับผู้เข้าชมและปุ่มที่ถูกกด

เว็บเตรียม Google Analytics 4 event tracking ไว้แล้ว แต่ยังไม่เปิดใช้งานจนกว่าจะใส่ Measurement ID

1. สร้าง Google Analytics 4 property
2. คัดลอก Measurement ID รูปแบบ `G-XXXXXXXXXX`
3. เปิด `script.js`
4. แก้บรรทัดนี้:

```js
const GA_MEASUREMENT_ID = "";
```

เป็น:

```js
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

Event ที่นับไว้:

- `copy_prompt` กดคัดลอก prompt จากคลัง
- `copy_builder_prompt` กดคัดลอก prompt จาก Builder
- `generate_builder_prompt` กดสร้าง prompt
- `fill_builder_from_prompt` กดใส่ prompt ใน Builder
- `select_category` เลือกหมวด
- `search_used` มีการใช้ช่องค้นหา โดยไม่ส่งคำค้น
- `copy_example_prompt` คัดลอก prompt จากตัวอย่าง
- `open_about_modal` เปิด popup ที่มาโปรเจกต์

เพื่อความปลอดภัย เว็บไม่ส่งข้อความที่ครูพิมพ์ใน Builder หรือช่องค้นหาเข้า analytics
