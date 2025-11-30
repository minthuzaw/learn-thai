import { ImmigrationQuestion } from '../types';

export const immigrationQuestions: ImmigrationQuestion[] = [
  {
    id: 'name',
    questionThai: 'คุณชื่ออะไร',
    questionPhonetic: 'khún chʉ̂ ʉ àray',
    questionEnglish: 'What\'s your name?',
    answerTemplate: 'chǎn/phǒm chʉ̂ ʉ ...',
    answerThai: 'ฉัน/ผมชื่อ [ชื่อ]',
    answerPhonetic: 'chǎn/phǒm chʉ̂ ʉ [name]',
    answerEnglish: 'My name is [name]',
    category: 'personal'
  },
  {
    id: 'age',
    questionThai: 'อายุเท่าไหร่',
    questionPhonetic: 'aayú thâwrày',
    questionEnglish: 'How old are you?',
    answerTemplate: 'aayú ... pii',
    answerThai: 'อายุ [อายุ] ปี',
    answerPhonetic: 'aayú [number] pii',
    answerEnglish: '[number] years old',
    category: 'personal'
  },
  {
    id: 'country',
    questionThai: 'คุณมาจากประเทศอะไร',
    questionPhonetic: 'khun maacàak pràthêet àray',
    questionEnglish: 'Where are you from (country)?',
    answerTemplate: 'chǎn/phǒm maacàak pràthêet ...',
    answerThai: 'ฉัน/ผมมาจากประเทศ [ประเทศ]',
    answerPhonetic: 'chǎn/phǒm maacàak pràthêet [country]',
    answerEnglish: 'I come from [country]',
    category: 'background'
  },
  {
    id: 'duration',
    questionThai: 'คุณมาอยู่ประเทศไทยกี่เดือนแล้ว',
    questionPhonetic: 'khun maa yùu pràthêetthay kìi dʉan lɛ́ɛw',
    questionEnglish: 'How long have you been in Thailand?',
    answerTemplate: 'chǎn / phǒm yùu thîi thay ... dʉan',
    answerThai: 'ฉัน/ผมอยู่ที่ไทย [จำนวน] เดือน',
    answerPhonetic: 'chǎn / phǒm yùu thîi thay [number] dʉan',
    answerEnglish: 'I live in Thailand [number] months',
    category: 'stay'
  },
  {
    id: 'purpose',
    questionThai: 'ทำไมคุณมาอยู่ประเทศไทย',
    questionPhonetic: 'thammay khun maa yùu pràthêetthay',
    questionEnglish: 'Why do you come to Thailand?',
    answerTemplate: 'phrɔ́ chǎn / phǒm maa rian phaasǎathay',
    answerThai: 'เพราะฉัน/ผมมาเรียนภาษาไทย',
    answerPhonetic: 'phrɔ́ chǎn / phǒm maa rian phaasǎathay',
    answerEnglish: 'Because I came to study Thai',
    category: 'purpose'
  },
  {
    id: 'language-study',
    questionThai: 'คุณเรียนภาษา ... มากี่เดือนแล้ว',
    questionPhonetic: 'khun rian phaasǎa ... mâa kîi dʉan lɛ́ɛw',
    questionEnglish: 'How many months have you been learning ... language?',
    answerTemplate: 'chǎn / phǒm rian phaasǎa ... maa ... dʉan lɛ́ɛw',
    answerThai: 'ฉัน/ผมเรียนภาษา [ภาษา] มา [จำนวน] เดือนแล้ว',
    answerPhonetic: 'chǎn / phǒm rian phaasǎa [language] maa [number] dʉan lɛ́ɛw',
    answerEnglish: 'I have studied [language] for [number] months',
    category: 'education'
  },
  {
    id: 'color-preference',
    questionThai: 'คุณชอบสีอะไร',
    questionPhonetic: 'khun chɔ̂ ɔp sǐi àray',
    questionEnglish: 'What color do you like?',
    answerTemplate: 'chǎn / phǒm chɔ̂ ɔp sǐi ...',
    answerThai: 'ฉัน/ผมชอบสี [สี]',
    answerPhonetic: 'chǎn / phǒm chɔ̂ ɔp sǐi [color]',
    answerEnglish: 'I like [color]',
    category: 'preferences'
  },
  {
    id: 'food-preference',
    questionThai: 'คุณชอบอาหารไทยอะไรบ้าง',
    questionPhonetic: 'khun chɔ̂ ɔp aahǎan thay àray bâaŋ',
    questionEnglish: 'What kind of Thai food do you like?',
    answerTemplate: 'chǎn / phǒm chɔ̂ ɔp ...',
    answerThai: 'ฉัน/ผมชอบ [อาหารไทย]',
    answerPhonetic: 'chǎn / phǒm chɔ̂ ɔp [Thai food]',
    answerEnglish: 'I like [Thai food]',
    category: 'preferences'
  },
  {
    id: 'curriculum',
    questionThai: 'คุณเรียนหลักสูตรอะไร',
    questionPhonetic: 'khun rian làksùut àray',
    questionEnglish: 'What curriculum do you study?',
    answerTemplate: 'chǎn / phǒm rian làksùut ...',
    answerThai: 'ฉัน/ผมเรียนหลักสูตร [หลักสูตร]',
    answerPhonetic: 'chǎn / phǒm rian làksùut [curriculum]',
    answerEnglish: 'I study [curriculum] curriculum',
    category: 'education'
  },
  {
    id: 'study-days',
    questionThai: 'คุณเรียนวันไหนบ้าง',
    questionPhonetic: 'khun rian wan nǎy bâaŋ',
    questionEnglish: 'What days do you study?',
    answerTemplate: 'chǎn / phǒm rian wan ... thʉ̌ ŋ wan ...',
    answerThai: 'ฉัน/ผมเรียนวัน [วัน] ถึงวัน [วัน]',
    answerPhonetic: 'chǎn / phǒm rian wan [day] thʉ̌ ŋ wan [day]',
    answerEnglish: 'I study [day] to [day]',
    category: 'education'
  },
  {
    id: 'study-time',
    questionThai: 'คุณเรียนกี่โมง',
    questionPhonetic: 'khun rian kìi mooŋ',
    questionEnglish: 'What time do you study?',
    answerTemplate: 'chǎn / phǒm rian ... mooŋ thʉ̌ ŋ … mooŋ',
    answerThai: 'ฉัน/ผมเรียน [เวลา] โมงถึง [เวลา] โมง',
    answerPhonetic: 'chǎn / phǒm rian [time] mooŋ thʉ̌ ŋ [time] mooŋ',
    answerEnglish: 'I study at [time] o\'clock to [time] o\'clock',
    category: 'education'
  },
  {
    id: 'school-name',
    questionThai: 'โรงเรียนคุณชื่ออะไร',
    questionPhonetic: 'rooŋrian khun chʉ̂ ʉ àray',
    questionEnglish: 'What is your school name?',
    answerTemplate: 'rooŋrian cùtpràkaay phaasǎa / ILS School',
    answerThai: 'โรงเรียนจุฬปราการภาษา / ILS School',
    answerPhonetic: 'rooŋrian cùtpràkaay phaasǎa / ILS School',
    answerEnglish: 'I study at ILS school',
    category: 'education'
  }
];