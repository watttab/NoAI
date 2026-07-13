const prompts = [
  {
    title: "สร้างแผนการจัดการเรียนรู้",
    category: "แผนการสอน",
    description: "ออกแบบแผนการเรียนรู้ให้ครบจุดประสงค์ กิจกรรม สื่อ และการประเมิน",
    prompt: "คุณคือครู สกร. ที่เชี่ยวชาญการออกแบบแผนการจัดการเรียนรู้สำหรับผู้เรียนผู้ใหญ่ ช่วยสร้างแผนการจัดการเรียนรู้รายวิชา [รายวิชา] ระดับ [ระดับ] หัวข้อ [หัวข้อ] ระยะเวลา [เวลา] โดยมีสาระสำคัญ จุดประสงค์ กิจกรรมการเรียนรู้ สื่อที่ใช้ วิธีวัดผล และบันทึกหลังสอน"
  },
  {
    title: "ทำใบงานสำหรับผู้เรียนผู้ใหญ่",
    category: "ใบงาน",
    description: "สร้างใบงานอ่านง่าย พร้อมกิจกรรมและคำถามสะท้อนคิด",
    prompt: "คุณคือครู สกร. ช่วยสร้างใบงานรายวิชา [รายวิชา] ระดับ [ระดับ] หัวข้อ [หัวข้อ] สำหรับผู้เรียนผู้ใหญ่ ใช้ภาษาเข้าใจง่าย มีคำชี้แจง กิจกรรมหลัก คำถามสะท้อนคิด และเกณฑ์ประเมินแบบง่าย จัดรูปแบบให้นำไปวางในเอกสารได้ทันที"
  },
  {
    title: "แบบทดสอบพร้อมเฉลย",
    category: "ประเมินผล",
    description: "ออกข้อสอบปรนัย อัตนัย เฉลย และคำอธิบายเหตุผล",
    prompt: "ช่วยสร้างแบบทดสอบรายวิชา [รายวิชา] ระดับ [ระดับ] หัวข้อ [หัวข้อ] จำนวน [จำนวนข้อ] ข้อ ให้มีทั้งคำถามปรนัยและคำถามอัตนัย พร้อมเฉลย คำอธิบายเหตุผล และตารางวิเคราะห์ระดับความยากง่าย"
  },
  {
    title: "รายงานผลการจัดกิจกรรม",
    category: "รายงาน",
    description: "ช่วยเขียนรายงานกิจกรรมด้วยภาษาทางการแต่ยังอ่านง่าย",
    prompt: "คุณคือผู้ช่วยเขียนรายงานราชการสำหรับงาน สกร. ช่วยร่างรายงานผลการจัดกิจกรรม [ชื่อกิจกรรม] ประกอบด้วยหลักการและเหตุผล วัตถุประสงค์ กลุ่มเป้าหมาย ขั้นตอนการดำเนินงาน ผลการดำเนินงาน ปัญหาอุปสรรค ข้อเสนอแนะ และสรุปผล โดยใช้ภาษาทางการ กระชับ และตรวจทานได้ง่าย"
  },
  {
    title: "ปรับภาษาเอกสารราชการ",
    category: "รายงาน",
    description: "เปลี่ยนข้อความธรรมดาให้เป็นภาษาราชการที่สุภาพและกระชับ",
    prompt: "ช่วยปรับข้อความต่อไปนี้ให้เป็นภาษาราชการที่สุภาพ กระชับ ชัดเจน และเหมาะสำหรับเอกสารของหน่วยงาน สกร. โดยคงความหมายเดิมไว้: [วางข้อความ]"
  },
  {
    title: "สื่อสรุปบทเรียน",
    category: "สื่อการสอน",
    description: "สรุปเนื้อหาเป็นหัวข้อสั้น ๆ สำหรับทำสไลด์หรืออินโฟกราฟิก",
    prompt: "ช่วยสรุปเนื้อหารายวิชา [รายวิชา] หัวข้อ [หัวข้อ] สำหรับผู้เรียน สกร. ให้เป็นสื่อสรุปบทเรียนแบบอ่านง่าย แบ่งเป็นหัวข้อสำคัญ ตัวอย่างใกล้ตัว คำถามชวนคิด และข้อความสั้นสำหรับทำสไลด์"
  }
];

const promptGrid = document.querySelector("#promptGrid");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");
const chips = document.querySelectorAll(".category-chip");
const toast = document.querySelector("#toast");
const builderForm = document.querySelector("#promptBuilder");
const builderResult = document.querySelector("#builderResult");
const copyBuilder = document.querySelector("#copyBuilder");

function showToast(message = "คัดลอกแล้ว") {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyText(text) {
  await navigator.clipboard.writeText(text);
  showToast();
}

function renderPrompts() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const filtered = prompts.filter((item) => {
    const matchesCategory = category === "ทั้งหมด" || item.category === category;
    const text = `${item.title} ${item.category} ${item.description} ${item.prompt}`.toLowerCase();
    return matchesCategory && text.includes(search);
  });

  promptGrid.innerHTML = filtered.map((item, index) => `
    <article class="prompt-card">
      <div>
        <div class="tag">${item.category}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <button class="button secondary" type="button" data-copy="${index}">คัดลอก Prompt</button>
    </article>
  `).join("");

  if (filtered.length === 0) {
    promptGrid.innerHTML = '<p class="empty">ยังไม่พบ prompt ที่ตรงกับคำค้นหา</p>';
    return;
  }

  promptGrid.querySelectorAll("[data-copy]").forEach((button) => {
    const item = filtered[Number(button.dataset.copy)];
    button.addEventListener("click", () => copyText(item.prompt));
  });
}

function setCategory(category) {
  categorySelect.value = category;
  chips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === category);
  });
  renderPrompts();
}

searchInput.addEventListener("input", renderPrompts);
categorySelect.addEventListener("change", () => {
  setCategory(categorySelect.value);
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => setCategory(chip.dataset.category));
});

builderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(builderForm);
  const subject = data.get("subject") || "[ระบุรายวิชา]";
  const level = data.get("level") || "[ระบุระดับ]";
  const topic = data.get("topic") || "[ระบุหัวข้อ]";
  const learner = data.get("learner") || "ผู้เรียน สกร. ที่มีพื้นฐานหลากหลาย";
  const output = data.get("output") || "ชิ้นงานสำหรับใช้ในการสอน";

  builderResult.value = `คุณคือครู สกร. ที่เชี่ยวชาญการออกแบบการเรียนรู้สำหรับผู้เรียนผู้ใหญ่
ช่วยสร้าง${output}
รายวิชา: ${subject}
ระดับผู้เรียน: ${level}
หัวข้อ: ${topic}
ลักษณะผู้เรียน: ${learner}

เงื่อนไข:
- ใช้ภาษาไทยที่เข้าใจง่าย เหมาะกับผู้เรียน สกร.
- เชื่อมโยงกับชีวิตจริงหรือประสบการณ์ของผู้เรียน
- จัดรูปแบบให้นำไปใช้ในเอกสารได้ทันที
- หากเหมาะสม ให้มีคำชี้แจง กิจกรรม คำถามสะท้อนคิด และเกณฑ์ประเมินแบบง่าย`;
});

copyBuilder.addEventListener("click", () => copyText(builderResult.value));

renderPrompts();
