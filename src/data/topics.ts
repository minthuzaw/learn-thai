import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'introduction',
    title: 'Introduce Yourself',
    titleThai: 'การแนะนำตัว',
    titlePhonetic: 'kaanthákthaay lɛ́ kaan nɛ́namtua',
    description: 'Learn how to introduce yourself in Thai',
    vocabulary: [
      {
        thai: 'ฉัน/ผมชื่อ [ชื่อ]',
        phonetic: 'chǎn / phǒm chʉ̂ ʉ [name]',
        english: 'My name is [name]'
      },
      {
        thai: 'อายุ [อายุ] ปี',
        phonetic: 'aayú [age] pii',
        english: 'I\'m [age] years old'
      },
      {
        thai: 'ฉัน/ผมเป็นนักเรียน',
        phonetic: 'chǎn / phǒm pen nákrian',
        english: 'I\'m a student'
      },
      {
        thai: 'ฉัน/ผมมาจากประเทศ [ประเทศ] ค่ะ/ครับ',
        phonetic: 'chǎn / phǒm maacàak pràthêet [country] khâ / khráp',
        english: 'I come from [country]'
      },
      {
        thai: 'ยินดีที่ได้รู้จัก',
        phonetic: 'yindii thîi dâay rúucàk',
        english: 'Nice to meet you'
      }
    ],
    examples: [
      'Sawàtdii khâ / chǎn chʉ̂ ʉ [Eva] / aayú [yîisìp sǎam] pii / chǎn pen nákrian / maacàak pràthêet [America] khâ',
      'Hello, My name is Eva, I\'m 23 years old, I\'m a student from America.'
    ]
  },
  {
    id: 'numbers',
    title: 'Counting Numbers',
    titleThai: 'การนับจำนวน',
    titlePhonetic: 'kaan náp camnuan rʉ̌ ʉ tualêek',
    description: 'Learn numbers and counting in Thai',
    vocabulary: [
      { thai: 'หนึ่ง', phonetic: 'nʉ̀ŋ', english: '1' },
      { thai: 'สอง', phonetic: 'sɔ̌ ɔŋ', english: '2' },
      { thai: 'สาม', phonetic: 'sǎam', english: '3' },
      { thai: 'สี่', phonetic: 'sìi', english: '4' },
      { thai: 'ห้า', phonetic: 'hâa', english: '5' },
      { thai: 'หก', phonetic: 'hòk', english: '6' },
      { thai: 'เจ็ด', phonetic: 'cèt', english: '7' },
      { thai: 'แปด', phonetic: 'pɛ̀ɛt', english: '8' },
      { thai: 'เก้า', phonetic: 'kâaw', english: '9' },
      { thai: 'สิบ', phonetic: 'sìp', english: '10' },
      { thai: 'สิบเอ็ด', phonetic: 'sìpèt', english: '11' },
      { thai: 'ยี่สิบเอ็ด', phonetic: 'yii sìp èt', english: '21' },
      { thai: 'สามสิบเอ็ด', phonetic: 'sǎam sìp èt', english: '31' },
      { thai: 'หนึ่งร้อย', phonetic: 'nʉ̀ŋ rɔ́ɔy', english: '100' },
      { thai: 'หนึ่งพัน', phonetic: 'nʉ̀ŋ phan', english: '1000' }
    ],
    tips: 'In Thai numerals, when counting numbers from the tens upward (for example, 30), the number is read as \'sǎam sìp\', which is 3 + 10. However, when the digit 1 appears in the units place, it is read as \'èt\'',
    examples: [
      '46 = sìi sìp hòk → 40 + 6',
      '51 = hâa sìp èt → 50 + 1 (when the number 1 is in the units place after tens, it changes to èt)',
      '106 = nùeng rói hòk → 100 + 6',
      '1900 = nùeng phan kâo rói → 1000 + 9 + 100'
    ]
  },
  {
    id: 'colors',
    title: 'Colors',
    titleThai: 'สี',
    titlePhonetic: 'sǐi',
    description: 'Learn color names in Thai',
    vocabulary: [
      { thai: 'สีฟ้า', phonetic: 'sǐi fáa', english: 'Blue' },
      { thai: 'สีขาว', phonetic: 'sǐi khǎaw', english: 'White' },
      { thai: 'สีชมพู', phonetic: 'sǐi chomphuu', english: 'Pink' },
      { thai: 'สีดำ', phonetic: 'sǐi dam', english: 'Black' },
      { thai: 'สีแดง', phonetic: 'sǐi dɛɛŋ', english: 'Red' },
      { thai: 'สีส้ม', phonetic: 'sǐi sôm', english: 'Orange' },
      { thai: 'สีม่วง', phonetic: 'sǐi mûaŋ', english: 'Purple' },
      { thai: 'สีน้ำเงิน', phonetic: 'sǐi náamŋən', english: 'Navy Blue' },
      { thai: 'สีเขียว', phonetic: 'sǐi khǐaw', english: 'Green' },
      { thai: 'สีเหลือง', phonetic: 'sǐi lʉ̌ aŋ', english: 'Yellow' }
    ],
    tips: 'In Thai, the names of colors are usually formed by placing the word \'sǐi\' in front of the color word. For example, sǐi dɛɛŋ means \'red,\' sǐi khǐaw means \'green.\' In other words, the pattern is sii + color.'
  },
  {
    id: 'things',
    title: 'Things',
    titleThai: 'สิ่งของ',
    titlePhonetic: 'chʉ̂ ʉ sìŋkhɔ̌ ɔŋ',
    description: 'Learn names of common objects',
    vocabulary: [
      { thai: 'สมุด', phonetic: 'samùt', english: 'Notebook' },
      { thai: 'หนังสือ', phonetic: 'naŋsʉ̌ ʉ', english: 'Book' },
      { thai: 'ปากกา', phonetic: 'pàakkaa', english: 'Pen' },
      { thai: 'ดินสอ', phonetic: 'dinsɔ̌ ɔ', english: 'Pencil' },
      { thai: 'กระดาษ', phonetic: 'kràdàat', english: 'Paper' },
      { thai: 'เก้าอี้', phonetic: 'kâw îi', english: 'Chair' },
      { thai: 'โต๊ะ', phonetic: 'tó', english: 'Table' },
      { thai: 'ถุง', phonetic: 'thǔŋ', english: 'Bag' }
    ],
    tips: 'When naming or identifying objects in Thai, it is common to begin with \'níi khʉʉ\' (This is) or \'nân khʉʉ\' (That is).',
    examples: [
      'níi khʉʉ pàakkaa = This is a pen.',
      'nân khʉʉ kâw îi = That is a chair.'
    ]
  },
  {
    id: 'dates',
    title: 'Days and Months',
    titleThai: 'วันและเดือน',
    titlePhonetic: 'wan , dʉan',
    description: 'Learn days of the week and months',
    vocabulary: [
      { thai: 'วันจันทร์', phonetic: 'wan can', english: 'Monday', category: 'days' },
      { thai: 'วันอังคาร', phonetic: 'wan aŋkhaan', english: 'Tuesday', category: 'days' },
      { thai: 'วันพุธ', phonetic: 'wan phút', english: 'Wednesday', category: 'days' },
      { thai: 'วันพฤหัสบดี', phonetic: 'wan pha rʉ́ hàt sa bɔɔ dii', english: 'Thursday', category: 'days' },
      { thai: 'วันศุกร์', phonetic: 'wan sùk', english: 'Friday', category: 'days' },
      { thai: 'วันเสาร์', phonetic: 'wan sǎw', english: 'Saturday', category: 'days' },
      { thai: 'วันอาทิตย์', phonetic: 'wan aathít', english: 'Sunday', category: 'days' },
      { thai: 'มกราคม', phonetic: 'ma ka raa khom', english: 'January', category: 'months' },
      { thai: 'กุมภาพันธ์', phonetic: 'kum phaa phan', english: 'February', category: 'months' },
      { thai: 'มีนาคม', phonetic: 'mii naa khom', english: 'March', category: 'months' },
      { thai: 'เมษายน', phonetic: 'mee sǎa yon', english: 'April', category: 'months' },
      { thai: 'พฤษภาคม', phonetic: 'phrʉ́t sa phaa khom', english: 'May', category: 'months' },
      { thai: 'มิถุนายน', phonetic: 'mí thù naa yon', english: 'June', category: 'months' },
      { thai: 'กรกฎาคม', phonetic: 'ka ra ka daa khom', english: 'July', category: 'months' },
      { thai: 'สิงหาคม', phonetic: 'sǐŋ hǎa khom', english: 'August', category: 'months' },
      { thai: 'กันยายน', phonetic: 'kan yaa yon', english: 'September', category: 'months' },
      { thai: 'ตุลาคม', phonetic: 'tù laa khom', english: 'October', category: 'months' },
      { thai: 'พฤศจิกายน', phonetic: 'phrʉ́t sa cì kaa yon', english: 'November', category: 'months' },
      { thai: 'ธันวาคม', phonetic: 'than waa khom', english: 'December', category: 'months' }
    ],
    tips: 'Normally, Thai people often use shortened forms when referring to the names of months or days. For example, the full word \'Ma ka raa khom\' is commonly shortened to \'Ma ka raa\''
  },
  {
    id: 'places',
    title: 'Places',
    titleThai: 'สถานที่',
    titlePhonetic: 'chʉ̂ ʉ sathǎanthîi',
    description: 'Learn names of important places',
    vocabulary: [
      { thai: 'ตลาด', phonetic: 'talàat', english: 'Market' },
      { thai: 'สถานกงสุล', phonetic: 'sa thǎan koŋ sǔn', english: 'The consulate' },
      { thai: 'ตรวจคนเข้าเมือง', phonetic: 'tɔɔmɔɔ', english: 'The immigration' },
      { thai: 'โรงเรียน', phonetic: 'rooŋrian', english: 'School' },
      { thai: 'บ้าน', phonetic: 'bâan', english: 'House' },
      { thai: 'ไปรษณีย์', phonetic: 'pray sa nii', english: 'Post office' },
      { thai: 'ห้าง', phonetic: 'hâaŋ', english: 'The mall' },
      { thai: 'ที่จอดรถ', phonetic: 'thîi cɔ̀ɔt rót', english: 'The parking lot' },
      { thai: 'ห้องน้ำ', phonetic: 'hɔ̂ ŋnáam', english: 'Toilet' },
      { thai: 'สนามบิน', phonetic: 'sanǎambin', english: 'The Airport' }
    ],
    tips: 'Usage of "yùu thîi" and "thɛ̌ ɛw" in Thai: yùu thîi + [place] → to be at + [place]. yùu thɛ̌ ɛw + [area / landmark] → to be around / near + [area / landmark]',
    examples: [
      'chǎn yùu thîi bâan = I am at home.',
      'khǎo yùu thîi roongrian = He/She is at school.',
      'roong rian yùu thɛ̌ ɛw tàlàat = The school is near the market.'
    ]
  },
  {
    id: 'careers',
    title: 'Careers',
    titleThai: 'อาชีพ',
    titlePhonetic: 'aachîip',
    description: 'Learn job titles and professions',
    vocabulary: [
      { thai: 'ครู', phonetic: 'khruu', english: 'Teacher' },
      { thai: 'นักเรียน', phonetic: 'nák rian', english: 'Student' },
      { thai: 'ตำรวจ', phonetic: 'tamrùat', english: 'Police' },
      { thai: 'หมอ', phonetic: 'mɔ̌ɔ', english: 'Doctor' },
      { thai: 'พนักงาน', phonetic: 'pha nák ŋaan', english: 'The officer' },
      { thai: 'พ่อค้า / แม่ค้า', phonetic: 'phɔ̂ ɔkháa / mɛ̂ ɛkháa', english: 'Men Seller / Women Seller' },
      { thai: 'พ่อบ้าน / แม่บ้าน', phonetic: 'phɔ̂ ɔbâan /mɛ̂ ɛbâan', english: 'Men Housekeepers / Women Housekeepers' }
    ],
    tips: '[subject] + pen + [occupation]: chǎn pen + [occupation] → I am a + [occupation]. khǎw pen + [occupation] → He/She is a + [occupation]',
    examples: [
      'chǎn pen nákrian = I am a student.',
      'khǎw pen tamrùat = He/She is a police officer.'
    ]
  },
  {
    id: 'food',
    title: 'Foods and Drinks',
    titleThai: 'อาหารและเครื่องดื่ม',
    titlePhonetic: 'aahǎan khrʉ̂ aŋdʉ̀ʉm',
    description: 'Learn Thai food and drink names',
    vocabulary: [
      { thai: 'ผัดไทย', phonetic: 'phàt thay', english: 'PadThai', category: 'food' },
      { thai: 'ข้าวซอย', phonetic: 'khâaw sɔɔy', english: 'Khawsoi', category: 'food' },
      { thai: 'ต้มยำกุ้ง', phonetic: 'tômyam kûŋ', english: 'Tom yam kung', category: 'food' },
      { thai: 'แกงเขียวหวาน', phonetic: 'kɛɛŋkhǐawwǎan', english: 'Green curry', category: 'food' },
      { thai: 'ก๋วยเตี๋ยว', phonetic: 'kuaytiew', english: 'Noodle', category: 'food' },
      { thai: 'ผัดกะเพรา', phonetic: 'phàt kàphraw', english: 'Fried basil', category: 'food' },
      { thai: 'หมูปิ้ง', phonetic: 'mǔu pîŋ', english: 'Grilled pork', category: 'food' },
      { thai: 'ข้าวผัด', phonetic: 'khâawphàt', english: 'Fried rice', category: 'food' },
      { thai: 'ไข่เจียว', phonetic: 'khàyciaw', english: 'Omelet', category: 'food' },
      { thai: 'ข้าวต้ม', phonetic: 'khâawtôm', english: 'Rice soup', category: 'food' },
      { thai: 'ชา', phonetic: 'chaa', english: 'Tea', category: 'drinks' },
      { thai: 'กาแฟ', phonetic: 'kaafɛɛ', english: 'Coffee', category: 'drinks' },
      { thai: 'น้ำส้ม', phonetic: 'náam sôm', english: 'Orange juice', category: 'drinks' },
      { thai: 'โค้ก', phonetic: 'khôok', english: 'Coke', category: 'drinks' },
      { thai: 'ชาเขียว', phonetic: 'chaa khǐaw', english: 'Green tea', category: 'drinks' },
      { thai: 'ชาไทย', phonetic: 'chaa thay', english: 'Thai tea', category: 'drinks' },
      { thai: 'โกโก้', phonetic: 'coco', english: 'Coco', category: 'drinks' }
    ],
    tips: 'Ordering Food & Drinks in Thai: phǒm/chǎn khǒr + [food/drink] + nòi khráp/khâ → I would like [food/drink], please. ao + [food/drink] + khráp/khâ → I\'ll have [food/drink].',
    examples: [
      'phǒm khǒr kaafɛɛ rɔ́ɔn nòi khráp = I\'d like a hot coffee, please.',
      'ao khâao phàt khráp = I\'ll have fried rice.',
      'ao chaa yen khâ = I\'ll have Thai iced tea.'
    ]
  }
];