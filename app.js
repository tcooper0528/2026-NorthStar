// Quick Reset
const resetBtn = document.getElementById('resetBtn');
const resetText = document.getElementById('resetText');
resetBtn.addEventListener('click', () => resetText.classList.toggle('hidden'));


// Gentle Reminders
const reminders = [
"Choose peace today. Everything else can wait.",
"Forgiveness is strength, not surrender.",
"Create something small. Share it freely.",
"Freedom grows one good choice at a time."
];


// NKJV Scripture (short quotations with attribution)
const verses = [
{ ref: "John 3:16", text: "For God so loved the world that He gave His only begotten Son…" },
{ ref: "John 14:6", text: "I am the way, the truth, and the life…" },
{ ref: "Ephesians 2:8–9", text: "For by grace you have been saved through faith…" },
{ ref: "Matthew 6:14", text: "For if you forgive men their trespasses…" },
{ ref: "Mark 12:31", text: "You shall love your neighbor as yourself." },
{ ref: "Isaiah 41:10", text: "Fear not, for I am with you…" },
{ ref: "Romans 12:2", text: "Be not conformed to this world…" },
{ ref: "Micah 6:8", text: "What does the Lord require of you…" },
{ ref: "James 1:12", text: "Blessed is the man who endures temptation…" },
{ ref: "Philippians 4:4", text: "Rejoice in the Lord always…" }
];


const day = new Date().getDate();
const index = day % verses.length;


const reminderEl = document.getElementById('reminder');
const verseTextEl = document.getElementById('verseText');
const verseRefEl = document.getElementById('verseRef');


if (reminderEl) reminderEl.textContent = reminders[index % reminders.length];
if (verseTextEl) verseTextEl.textContent = verses[index].text;
if (verseRefEl) verseRefEl.textContent = verses[index].ref;


// Persistent Check‑In
const boxes = document.querySelectorAll('.checkin input');
boxes.forEach((box, i) => {
box.checked = localStorage.getItem(`checkin-${i}`) === 'true';
box.addEventListener('change', () => localStorage.setItem(`checkin-${i}`, box.checked));
});
