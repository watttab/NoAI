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
  },
  {
    title: "วิเคราะห์ผู้เรียนก่อนพบกลุ่ม",
    category: "วิเคราะห์ผู้เรียน",
    description: "แปลงข้อมูลผู้เรียนให้เป็นแนวทางจัดกิจกรรมที่เหมาะกับวัยและพื้นฐาน",
    prompt: "คุณคือครู สกร. ช่วยวิเคราะห์ข้อมูลผู้เรียนกลุ่มนี้: [ข้อมูลผู้เรียน] เพื่อเสนอแนวทางจัดกิจกรรมพบกลุ่ม หัวข้อที่ควรทบทวน วิธีช่วยผู้เรียนที่พื้นฐานต่างกัน และข้อควรระวังด้านภาษา/เวลา/แรงจูงใจ"
  },
  {
    title: "แผนพบกลุ่มรายสัปดาห์",
    category: "แผนการสอน",
    description: "จัดลำดับกิจกรรม 60-90 นาทีสำหรับพบกลุ่มแบบใช้ได้จริง",
    prompt: "ช่วยออกแบบแผนพบกลุ่มรายสัปดาห์สำหรับครู สกร. รายวิชา [รายวิชา] ระดับ [ระดับ] หัวข้อ [หัวข้อ] เวลา [เวลา] นาที ให้มีช่วงนำเข้าสู่บทเรียน กิจกรรมหลัก การแลกเปลี่ยนประสบการณ์ งานมอบหมาย และหลักฐานการเรียนรู้"
  },
  {
    title: "โครงการกิจกรรมพัฒนาผู้เรียน",
    category: "โครงการ",
    description: "ร่างโครงการพร้อมหลักการ วัตถุประสงค์ เป้าหมาย ขั้นตอน และตัวชี้วัด",
    prompt: "คุณคือผู้ช่วยเขียนโครงการของสถานศึกษา สกร. ช่วยร่างโครงการ [ชื่อโครงการ] สำหรับกลุ่มเป้าหมาย [กลุ่มเป้าหมาย] ให้มีหลักการและเหตุผล วัตถุประสงค์ เป้าหมายเชิงปริมาณ/คุณภาพ วิธีดำเนินงาน งบประมาณโดยประมาณ ตัวชี้วัด ผลที่คาดว่าจะได้รับ และการประเมินผล"
  },
  {
    title: "บันทึกหลังสอนแบบสะท้อนคิด",
    category: "ประเมินผล",
    description: "สรุปผลการสอน ปัญหา และแนวทางปรับปรุงจากข้อมูลจริง",
    prompt: "ช่วยเขียนบันทึกหลังสอนสำหรับครู สกร. จากข้อมูลนี้ [ข้อมูลหลังสอน] โดยแบ่งเป็นผลการจัดกิจกรรม พฤติกรรมผู้เรียน ปัญหา/อุปสรรค แนวทางแก้ไขครั้งต่อไป และข้อเสนอแนะเชิงพัฒนา ใช้ภาษากระชับเหมาะกับเอกสารสถานศึกษา"
  },
  {
    title: "ปรับบทเรียนให้เข้ากับอาชีพชุมชน",
    category: "สื่อการสอน",
    description: "โยงเนื้อหาวิชากับชีวิตจริง อาชีพ และบริบทชุมชนของผู้เรียน",
    prompt: "ช่วยปรับเนื้อหารายวิชา [รายวิชา] หัวข้อ [หัวข้อ] ให้เชื่อมโยงกับอาชีพและบริบทชุมชน [บริบทชุมชน] สำหรับผู้เรียน สกร. โดยมีตัวอย่างใกล้ตัว กิจกรรมชวนคิด และคำถามที่นำไปสนทนาในการพบกลุ่ม"
  }
];

const aiWorkMap = [
  {
    title: "รู้จักผู้เรียนก่อนสอน",
    task: "วิเคราะห์พื้นฐาน เวลาเรียน อาชีพ และแรงจูงใจของผู้เรียน",
    helps: ["สรุปข้อมูลผู้เรียนเป็นกลุ่ม", "เสนอวิธีช่วยผู้เรียนที่พื้นฐานต่างกัน", "ตั้งคำถามเก็บข้อมูลก่อนพบกลุ่ม"],
    promptType: "วิเคราะห์ผู้เรียน"
  },
  {
    title: "ออกแบบการพบกลุ่ม",
    task: "เปลี่ยนหัวข้อเรียนให้เป็นกิจกรรม 60-90 นาที",
    helps: ["จัดลำดับกิจกรรม", "สร้างคำถามสนทนา", "ทำงานมอบหมายหลังพบกลุ่ม"],
    promptType: "แผนการสอน"
  },
  {
    title: "ผลิตใบงานและแบบประเมิน",
    task: "ทำเอกสารที่ผู้เรียนใช้ได้ทันที",
    helps: ["ใบงาน 1 หน้า", "แบบทดสอบพร้อมเฉลย", "rubric ประเมินง่าย"],
    promptType: "ใบงาน"
  },
  {
    title: "สรุปรายงานและเอกสาร",
    task: "ลดเวลางานเขียนที่ต้องใช้ภาษาทางการ",
    helps: ["รายงานกิจกรรม", "บันทึกหลังสอน", "ปรับภาษาเอกสารราชการ"],
    promptType: "รายงาน"
  },
  {
    title: "ทำสื่อให้เข้ากับชุมชน",
    task: "แปลงบทเรียนให้โยงกับชีวิตจริงและอาชีพ",
    helps: ["ตัวอย่างใกล้ตัว", "สคริปต์คลิปสั้น", "สื่อสรุปสำหรับมือถือ"],
    promptType: "สื่อการสอน"
  },
  {
    title: "วางโครงการพัฒนาผู้เรียน",
    task: "ร่างโครงการ กิจกรรม และตัวชี้วัด",
    helps: ["หลักการและเหตุผล", "แผนดำเนินงาน", "ผลที่คาดว่าจะได้รับ"],
    promptType: "โครงการ"
  }
];

const examplePrompts = {
  worksheet: "ช่วยสร้างใบงาน 1 หน้า รายวิชาทักษะการเรียนรู้ ระดับ ม.ต้น หัวข้อการตั้งเป้าหมายชีวิต สำหรับผู้เรียนวัยทำงาน ให้มีคำชี้แจง กิจกรรม คำถามสะท้อนคิด และเกณฑ์ประเมินแบบง่าย",
  report: "ช่วยร่างรายงานผลกิจกรรมพัฒนาผู้เรียน หัวข้อส่งเสริมทักษะอาชีพชุมชน ให้มีหลักการ วัตถุประสงค์ ขั้นตอน ผลการดำเนินงาน ปัญหา อุปสรรค และข้อเสนอแนะ ใช้ภาษาราชการกระชับ",
  plan: "ช่วยออกแบบแผนพบกลุ่ม 60 นาที รายวิชาเศรษฐกิจพอเพียง ระดับ ม.ต้น ให้มีช่วงนำเข้าสู่บทเรียน กิจกรรมกลุ่ม การสะท้อนคิด งานมอบหมาย และหลักฐานการเรียนรู้"
};

const promptGrid = document.querySelector("#promptGrid");
const aiMap = document.querySelector("#aiMap");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");
const chips = document.querySelectorAll(".category-chip");
const toast = document.querySelector("#toast");
const builderForm = document.querySelector("#promptBuilder");
const builderResult = document.querySelector("#builderResult");
const copyBuilder = document.querySelector("#copyBuilder");
const aboutModal = document.querySelector("#aboutModal");
const openAbout = document.querySelector("#openAbout");
const openAboutHero = document.querySelector("#openAboutHero");
const closeAbout = document.querySelector("#closeAbout");

function showToast(message = "คัดลอกแล้ว") {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    showToast();
  } catch (error) {
    showToast("คัดลอกไม่สำเร็จ");
  }
}

function renderAiMap() {
  aiMap.innerHTML = aiWorkMap.map((item) => `
    <article class="map-card">
      <span class="map-pill">${item.promptType}</span>
      <h3>${item.title}</h3>
      <p>${item.task}</p>
      <ul>
        ${item.helps.map((help) => `<li>${help}</li>`).join("")}
      </ul>
      <button class="copy-small" type="button" data-map="${item.promptType}">ดู prompt หมวดนี้</button>
    </article>
  `).join("");

  aiMap.querySelectorAll("[data-map]").forEach((button) => {
    button.addEventListener("click", () => {
      setCategory(button.dataset.map);
      document.querySelector("#library").scrollIntoView({ behavior: "smooth" });
    });
  });
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
      <div class="prompt-actions">
        <button class="button secondary" type="button" data-copy="${index}">คัดลอก Prompt</button>
        <button class="copy-small" type="button" data-fill="${index}">ใส่ใน Builder</button>
      </div>
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

  promptGrid.querySelectorAll("[data-fill]").forEach((button) => {
    const item = filtered[Number(button.dataset.fill)];
    button.addEventListener("click", () => {
      builderResult.value = item.prompt;
      showToast("ใส่ใน Builder แล้ว");
      document.querySelector("#builder").scrollIntoView({ behavior: "smooth" });
    });
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
  const tone = data.get("tone") || "ภาษาครู เข้าใจง่าย";

  builderResult.value = `คุณคือครู สกร. ที่เชี่ยวชาญการออกแบบการเรียนรู้สำหรับผู้เรียนผู้ใหญ่
ช่วยสร้าง${output}
รายวิชา: ${subject}
ระดับผู้เรียน: ${level}
หัวข้อ: ${topic}
ลักษณะผู้เรียน: ${learner}
โทนภาษา: ${tone}

เงื่อนไข:
- ใช้ภาษาไทยที่เข้าใจง่าย เหมาะกับผู้เรียน สกร.
- เชื่อมโยงกับชีวิตจริงหรือประสบการณ์ของผู้เรียน
- จัดรูปแบบให้นำไปใช้ในเอกสารได้ทันที
- หากเหมาะสม ให้มีคำชี้แจง กิจกรรม คำถามสะท้อนคิด และเกณฑ์ประเมินแบบง่าย
- ระบุข้อควรตรวจทานก่อนนำไปใช้จริง เช่น ความถูกต้องของหลักสูตร ชื่อหน่วยงาน วันที่ และข้อมูลผู้เรียน`;
});

copyBuilder.addEventListener("click", () => copyText(builderResult.value));

document.querySelectorAll("[data-example]").forEach((button) => {
  button.addEventListener("click", () => copyText(examplePrompts[button.dataset.example]));
});

function openModal() {
  aboutModal.hidden = false;
  closeAbout.focus();
}

function closeModal() {
  aboutModal.hidden = true;
}

openAbout.addEventListener("click", openModal);
openAboutHero.addEventListener("click", openModal);
closeAbout.addEventListener("click", closeModal);
aboutModal.addEventListener("click", (event) => {
  if (event.target === aboutModal) {
    closeModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !aboutModal.hidden) {
    closeModal();
  }
});

window.setTimeout(() => {
  if (!localStorage.getItem("noai-about-seen")) {
    openModal();
    localStorage.setItem("noai-about-seen", "1");
  }
}, 800);

renderAiMap();
renderPrompts();
