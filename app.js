const resetBtn = document.getElementById('resetBtn');
const resetText = document.getElementById('resetText');


resetBtn.addEventListener('click', () => {
resetText.classList.toggle('hidden');
});

const verses = [
"John 3:16",
"John 14:6",
"Ephesians 2:8–9",
"Matthew 6:14",
"Mark 12:31",
"Isaiah 41:10",
"Romans 12:2",
"Micah 6:8",
"James 1:12",
"Philippians 4:4"
];


const today = new Date().getDate();
const verse = verses[today % verses.length];
console.log("Today's verse:", verse);
