import { ImmigrationQuestion } from '../types';

export const finalQuestions: ImmigrationQuestion[] = [
  {
    id: 'final-name',
    questionThai: 'คุณชื่ออะไรคะ',
    questionPhonetic: 'khun chʉ̂ʉ àray khá',
    questionEnglish: 'What is your name?',
    answerThai: 'ฉัน/ผมชื่อ...',
    answerTemplate: 'phǒm/chǎn chʉ̂ʉ... khráp/khâ',
    answerPhonetic: 'phǒm/chǎn chʉ̂ʉ... khráp/khâ',
    answerEnglish: 'My name is...',
    category: 'basic-info'
  },
  {
    id: 'final-age',
    questionThai: 'คุณอายุเท่าไหร่คะ',
    questionPhonetic: 'khun aayú thâwrày khá',
    questionEnglish: 'How old are you?',
    answerThai: 'ฉัน/ผมอายุ...ปี',
    answerTemplate: 'phǒm/chǎn aayú ... pii khráp/khâ',
    answerPhonetic: 'phǒm/chǎn aayú ... pii khráp/khâ',
    answerEnglish: 'I\'m ... years old',
    category: 'basic-info'
  },
  {
    id: 'final-country',
    questionThai: 'คุณมาจากประเทศอะไรคะ',
    questionPhonetic: 'khun maa càak pràthêet àray khá',
    questionEnglish: 'Where are you from?',
    answerThai: 'ฉัน/ผมมาจากประเทศ...',
    answerTemplate: 'phǒm/chǎn maa càak pràthêet... khráp/khâ',
    answerPhonetic: 'phǒm/chǎn maa càak pràthêet... khráp/khâ',
    answerEnglish: 'I\'m from...',
    category: 'basic-info'
  },
  {
    id: 'final-duration',
    questionThai: 'คุณมาประเทศไทยกี่เดือนแล้วคะ',
    questionPhonetic: 'khun maa pràthêet thay kìi dʉan lɛ́ɛw khá',
    questionEnglish: 'How many months have you been in Thailand?',
    answerThai: 'ฉัน/ผมมาประเทศไทย...เดือนแล้ว',
    answerTemplate: 'phǒm/chǎn maa pràthêet thay ... dʉan lɛ́ɛw khráp/khâ',
    answerPhonetic: 'phǒm/chǎn maa pràthêet thay ... dʉan lɛ́ɛw khráp/khâ',
    answerEnglish: 'I\'ve been in Thailand for ... months',
    category: 'stay-info'
  },
  {
    id: 'final-course',
    questionThai: 'คุณเรียนหลักสูตรอะไรคะ',
    questionPhonetic: 'khun rian làksùut àray khá',
    questionEnglish: 'What course are you studying?',
    answerThai: 'ฉัน/ผมเรียนหลักสูตรภาษาไทย',
    answerTemplate: 'phǒm/chǎn rian làksùut phaasǎa thay khráp/khâ',
    answerPhonetic: 'phǒm/chǎn rian làksùut phaasǎa thay khráp/khâ',
    answerEnglish: 'I\'m studying Thai language course',
    category: 'education'
  },
  {
    id: 'final-study-days',
    questionThai: 'คุณเรียนวันอะไรคะ',
    questionPhonetic: 'khun rian wan àray khá',
    questionEnglish: 'What day do you study?',
    answerThai: 'ฉัน/ผมเรียนวัน...ถึงวัน...',
    answerTemplate: 'phǒm/chǎn rian wan... thʉ̌ŋ wan... khráp/khâ',
    answerPhonetic: 'phǒm/chǎn rian wan... thʉ̌ŋ wan... khráp/khâ',
    answerEnglish: 'I study from ... to ...',
    category: 'education'
  },
  {
    id: 'final-today',
    questionThai: 'วันนี้วันอะไรคะ',
    questionPhonetic: 'wanníi wan àray khá',
    questionEnglish: 'What day is it today?',
    answerThai: 'วันนี้วัน...',
    answerTemplate: 'wanníi wan... khráp/khâ',
    answerPhonetic: 'wanníi wan... khráp/khâ',
    answerEnglish: 'Today is ...',
    category: 'time-date'
  },
  {
    id: 'final-study-time',
    questionThai: 'คุณเรียนกี่โมงคะ',
    questionPhonetic: 'khun rian kìi mooŋ khá',
    questionEnglish: 'What time do you have class?',
    answerThai: 'ฉัน/ผมเรียน...โมงถึง...โมง',
    answerTemplate: 'phǒm/chǎn rian ... mooŋ thʉ̌ŋ ... mooŋ khráp/khâ',
    answerPhonetic: 'phǒm/chǎn rian ... mooŋ thʉ̌ŋ ... mooŋ khráp/khâ',
    answerEnglish: 'I study from ... to ...',
    category: 'time-date'
  },
  {
    id: 'final-month',
    questionThai: 'เดือนนี้เดือนอะไรคะ',
    questionPhonetic: 'dʉan níi dʉan àray khá',
    questionEnglish: 'What month is it?',
    answerThai: 'เดือนนี้เดือน...',
    answerTemplate: 'dʉan níi dʉan... khráp/khâ',
    answerPhonetic: 'dʉan níi dʉan... khráp/khâ',
    answerEnglish: 'This month is ...',
    category: 'time-date'
  },
  {
    id: 'final-current-time',
    questionThai: 'ตอนนี้กี่โมงคะ',
    questionPhonetic: 'tɔɔn níi kìi mooŋ khá',
    questionEnglish: 'What time is it now?',
    answerThai: 'ตอนนี้...โมง',
    answerTemplate: 'tɔɔn níi ... mooŋ khráp/khâ',
    answerPhonetic: 'tɔɔn níi ... mooŋ khráp/khâ',
    answerEnglish: 'It\'s ... o\'clock',
    category: 'time-date'
  },
  {
    id: 'final-food',
    questionThai: 'คุณชอบกินอะไรคะ',
    questionPhonetic: 'khun chɔ̂ɔp kin àray khá',
    questionEnglish: 'What do you like to eat?',
    answerThai: 'ฉัน/ผมชอบกิน...',
    answerTemplate: 'phǒm/chǎn chɔ̂ɔp kin... khráp/khâ',
    answerPhonetic: 'phǒm/chǎn chɔ̂ɔp kin... khráp/khâ',
    answerEnglish: 'I like to eat...',
    category: 'preferences'
  },
  {
    id: 'final-drink',
    questionThai: 'คุณชอบดื่มน้ำอะไรคะ',
    questionPhonetic: 'khun chɔ̂ɔp dʉ̀ʉm náam àray khá',
    questionEnglish: 'What do you like to drink?',
    answerThai: 'ฉัน/ผมชอบดื่ม...',
    answerTemplate: 'phǒm/chǎn chɔ̂ɔp dʉ̀ʉm... khráp/khâ',
    answerPhonetic: 'phǒm/chǎn chɔ̂ɔp dʉ̀ʉm... khráp/khâ',
    answerEnglish: 'I like to drink...',
    category: 'preferences'
  },
  {
    id: 'final-fruit',
    questionThai: 'คุณชอบกินผลไม้อะไรคะ',
    questionPhonetic: 'khun chɔ̂ɔp kin phǒnlamáy àray khá',
    questionEnglish: 'What kind of fruit do you like?',
    answerThai: 'ฉัน/ผมชอบกิน...',
    answerTemplate: 'phǒm/chǎn chɔ̂ɔp kin... khráp/khâ',
    answerPhonetic: 'phǒm/chǎn chɔ̂ɔp kin... khráp/khâ',
    answerEnglish: 'I like to eat...',
    category: 'preferences'
  }
];

export const finalVocabulary = {
  places: [
    { thai: 'โรงเรียน', phonetic: 'rooŋ rian', english: 'school' },
    { thai: 'โรงแรม', phonetic: 'rooŋ rɛɛm', english: 'hotel' },
    { thai: 'โรงพยาบาล', phonetic: 'rooŋ pha yaa baan', english: 'hospital' },
    { thai: 'ตลาด', phonetic: 'talàat', english: 'market' },
    { thai: 'ร้านขายของ', phonetic: 'ráan khǎay khɔ̌ɔŋ', english: 'grocery shop' },
    { thai: 'ร้านขายยา', phonetic: 'ráan khǎay yaa', english: 'pharmacy shop' },
    { thai: 'ร้านหนังสือ', phonetic: 'ráan naŋsʉ̌ʉ', english: 'bookstore' },
    { thai: 'ร้านอาหาร', phonetic: 'ráan aahǎan', english: 'restaurant' },
    { thai: 'ร้านกาแฟ', phonetic: 'ráan kaafɛɛ', english: 'coffee shop' },
    { thai: 'ห้าง', phonetic: 'hâaŋ', english: 'mall' },
    { thai: 'ไปรษณีย์', phonetic: 'praysanii', english: 'post office' },
    { thai: 'สถานีตำรวจ', phonetic: 'sathǎanii tamrùat', english: 'police station' },
    { thai: 'สถานีรถไฟ', phonetic: 'sathǎanii rótfay', english: 'railway station' },
    { thai: 'สนามบิน', phonetic: 'sanǎambin', english: 'airport' },
    { thai: 'ตรวจคนเข้าเมือง', phonetic: 'tɔɔmɔɔ', english: 'immigration' },
    { thai: 'สวนสาธารณะ', phonetic: 'sǔansǎathaaráná', english: 'parks' },
    { thai: 'โบสถ์', phonetic: 'boot', english: 'churches' },
    { thai: 'สถานทูต', phonetic: 'sathǎanthûut', english: 'embassy' },
    { thai: 'สวนสัตว์', phonetic: 'sǔansàt', english: 'zoo' },
    { thai: 'ห้างสรรพสินค้า', phonetic: 'hâaŋsàpphasǐnkháa', english: 'department stores' },
    { thai: 'ร้านขายของ', phonetic: 'ráan khǎaykhɔ̌ɔŋ', english: 'supermarket' }
  ],
  numbers: [
    { thai: '1', phonetic: 'nʉ̀ŋ', english: 'one' },
    { thai: '2', phonetic: 'sɔ̌ɔŋ', english: 'two' },
    { thai: '3', phonetic: 'sǎam', english: 'three' },
    { thai: '4', phonetic: 'sìi', english: 'four' },
    { thai: '5', phonetic: 'hâa', english: 'five' },
    { thai: '6', phonetic: 'hòk', english: 'six' },
    { thai: '7', phonetic: 'cèt', english: 'seven' },
    { thai: '8', phonetic: 'pɛ̀ɛt', english: 'eight' },
    { thai: '9', phonetic: 'kâaw', english: 'nine' },
    { thai: '10', phonetic: 'sìp', english: 'ten' },
    { thai: '11', phonetic: 'sìpèt', english: 'eleven' },
    { thai: '20', phonetic: 'yîi sìp', english: 'twenty' },
    { thai: '21', phonetic: 'yii sìp èt', english: 'twenty-one' },
    { thai: '30', phonetic: 'sǎam sìp', english: 'thirty' },
    { thai: '100', phonetic: 'nʉ̀ŋ rɔ́ɔy', english: 'one hundred' },
    { thai: '1,000', phonetic: 'nʉ̀ŋ phan', english: 'one thousand' },
    { thai: '10,000', phonetic: 'nʉ̀ŋ mʉ̀ʉn', english: 'ten thousand' },
    { thai: '100,000', phonetic: 'nʉ̀ŋ sɛ̌ɛn', english: 'one hundred thousand' },
    { thai: '1,000,000', phonetic: 'nʉ̀ŋ láan', english: 'one million' }
  ],
  colors: [
    { thai: 'สีเหลือง', phonetic: 'sǐi lʉ̌aŋ', english: 'yellow' },
    { thai: 'สีชมพู', phonetic: 'sǐi chomphuu', english: 'pink' },
    { thai: 'สีเขียว', phonetic: 'sǐi khǐaw', english: 'green' },
    { thai: 'สีส้ม', phonetic: 'sǐi sôm', english: 'orange' },
    { thai: 'สีฟ้า', phonetic: 'sǐi fáa', english: 'blue' },
    { thai: 'สีม่วง', phonetic: 'sǐi mûaŋ', english: 'purple' },
    { thai: 'สีแดง', phonetic: 'sǐi dɛɛŋ', english: 'red' },
    { thai: 'สีดำ', phonetic: 'sǐi dam', english: 'black' },
    { thai: 'สีขาว', phonetic: 'sǐi khǎaw', english: 'white' },
    { thai: 'สีน้ำเงิน', phonetic: 'sǐi náam ŋən', english: 'deep blue' },
    { thai: 'สีน้ำตาล', phonetic: 'sǐi náamtaan', english: 'brown' }
  ],
  food: [
    { thai: 'ไก่ทอด', phonetic: 'kày thɔ̂ɔt', english: 'fried chicken' },
    { thai: 'หมูทอด', phonetic: 'mǔu thɔ̂ɔt', english: 'fried pork' },
    { thai: 'ไก่ย่าง', phonetic: 'kày yâaŋ', english: 'grilled chicken' },
    { thai: 'ส้มตำ', phonetic: 'somtam', english: 'papaya salad' },
    { thai: 'ผัดไทย', phonetic: 'phàt thay', english: 'pad thai' },
    { thai: 'ผัดซีอิ๊ว', phonetic: 'phàt sii iw', english: 'stir fried noodles with soy sauce' },
    { thai: 'ข้าวซอย', phonetic: 'khâaw sɔɔy', english: 'khao soi' },
    { thai: 'ข้าวผัด', phonetic: 'khâaw phàt', english: 'fried rice' },
    { thai: 'ผัดกะเพรา', phonetic: 'phàt krà phraw', english: 'stir fried basil' },
    { thai: 'ต้มยำกุ้ง', phonetic: 'tômyam kûŋ', english: 'spicy and sour shrimp soup' }
  ],
  drinks: [
    { thai: 'น้ำส้ม', phonetic: 'náam sôm', english: 'orange juice' },
    { thai: 'น้ำมะนาว', phonetic: 'náam mánaaw', english: 'lemon juice' },
    { thai: 'น้ำอัดลม', phonetic: 'náam àt lom', english: 'soft drink' },
    { thai: 'ชาไทย', phonetic: 'chaa thay', english: 'thai tea' },
    { thai: 'ชาเขียว', phonetic: 'chaa khiaw', english: 'green tea' },
    { thai: 'ชามะนาว', phonetic: 'chaa mánaaw', english: 'lemon tea' },
    { thai: 'กาแฟ', phonetic: 'kaafɛɛ', english: 'coffee' },
    { thai: 'โซดา', phonetic: 'soodaa', english: 'soda' },
    { thai: 'มะนาวโซดา', phonetic: 'mánaaw soodaa', english: 'lemon soda' }
  ],
  fruits: [
    { thai: 'มะม่วง', phonetic: 'mámûaŋ', english: 'mango' },
    { thai: 'แตงโม', phonetic: 'tɛɛŋ moo', english: 'watermelon' },
    { thai: 'สับปะรด', phonetic: 'sàppàrót', english: 'pineapple' },
    { thai: 'กล้วย', phonetic: 'klûay', english: 'banana' },
    { thai: 'ฝรั่ง', phonetic: 'faràŋ', english: 'guava' },
    { thai: 'องุ่น', phonetic: 'aŋùn', english: 'grape' },
    { thai: 'ลิ้นจี่', phonetic: 'lín cìi', english: 'lychee' },
    { thai: 'ลำไย', phonetic: 'lamyay', english: 'longan' },
    { thai: 'เงาะ', phonetic: 'ŋɔ́', english: 'rambutan' },
    { thai: 'มังคุด', phonetic: 'maŋkhút', english: 'mangosteen' },
    { thai: 'ทุเรียน', phonetic: 'thúrian', english: 'durian' },
    { thai: 'มะพร้าว', phonetic: 'máphráaw', english: 'coconut' },
    { thai: 'ลางสาด', phonetic: 'laaŋ sàat', english: 'langsat' },
    { thai: 'ลองกอง', phonetic: 'lɔɔŋ kɔɔŋ', english: 'longkong' },
    { thai: 'น้อยหน่า', phonetic: 'nɔ́ɔynàa', english: 'custard apple' },
    { thai: 'ชมพู่', phonetic: 'chomphûu', english: 'rose apple' }
  ],
  transportation: [
    { thai: 'รถเมล์/รถบัส', phonetic: 'rótmee/rótbát', english: 'bus' },
    { thai: 'รถยนต์', phonetic: 'rótyon', english: 'car' },
    { thai: 'รถจักรยาน', phonetic: 'rótcàkkrayaan', english: 'bicycle' },
    { thai: 'รถจักรยานยนต์', phonetic: 'rótthacàkyaannayon', english: 'motorcycle' },
    { thai: 'รถไฟ', phonetic: 'rótfay', english: 'train' },
    { thai: 'รถสองแถว', phonetic: 'rótsɔ̌ɔŋthɛ̌ɛw', english: 'songthaew' },
    { thai: 'รถตู้', phonetic: 'róttûu', english: 'van' },
    { thai: 'เครื่องบิน', phonetic: 'khrʉ̂aŋbin', english: 'airplane' },
    { thai: 'เรือ', phonetic: 'rʉa', english: 'boat' },
    { thai: 'รถโดยสาร', phonetic: 'rótdooysǎan', english: 'passenger bus' }
  ]
};

export const timeExamples = [
  { thai: 'แปดโมง', phonetic: 'pɛ̀ɛt mooŋ', english: '8 AM' },
  { thai: 'เก้าโมง', phonetic: 'kâaw mooŋ', english: '9 AM' },
  { thai: 'สิบโมง', phonetic: 'sìp mooŋ', english: '10 AM' },
  { thai: 'สิบเอ็ดโมง', phonetic: 'sìpèt mooŋ', english: '11 AM' },
  { thai: 'เที่ยง', phonetic: 'thîaŋ', english: '12 PM (Noon)' },
  { thai: 'บ่ายโมง', phonetic: 'bàay mooŋ', english: '1 PM' },
  { thai: 'บ่ายสองโมง', phonetic: 'bàay sɔ̌ɔŋ mooŋ', english: '2 PM' },
  { thai: 'บ่ายสามโมง', phonetic: 'bàay sǎam mooŋ', english: '3 PM' },
  { thai: 'สี่โมง', phonetic: 'sìi mooŋ', english: '4 PM' },
  { thai: 'ห้าโมง', phonetic: 'hâa mooŋ', english: '5 PM' },
  { thai: 'หกโมง', phonetic: 'hòk mooŋ', english: '6 PM' }
];

export const dayNames = [
  { thai: 'วันจันทร์', phonetic: 'wan can', english: 'Monday' },
  { thai: 'วันอังคาร', phonetic: 'wan aŋkhaan', english: 'Tuesday' },
  { thai: 'วันพุธ', phonetic: 'wan phút', english: 'Wednesday' },
  { thai: 'วันพฤหัสบดี', phonetic: 'wan pharʉ́hàt', english: 'Thursday' },
  { thai: 'วันศุกร์', phonetic: 'wan sùk', english: 'Friday' },
  { thai: 'วันเสาร์', phonetic: 'wan sǎw', english: 'Saturday' },
  { thai: 'วันอาทิตย์', phonetic: 'wan aathít', english: 'Sunday' }
];