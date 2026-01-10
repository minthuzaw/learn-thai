import React, { useState } from 'react';
import { ArrowLeft, Volume2, BookOpen, MapPin, Briefcase, Utensils, Calendar, Package } from 'lucide-react';

interface SampleVocabularyProps {
  onBack: () => void;
  pronoun: 'chǎn' | 'phǒm';
}

interface VocabularyItem {
  thai?: string;
  phonetic: string;
  english: string;
}

interface VocabularySection {
  id: string;
  title: string;
  titleThai: string;
  titlePhonetic: string;
  icon: React.ReactNode;
  vocabulary: VocabularyItem[];
  tips?: string;
  examples?: string[];
}

const SampleVocabulary: React.FC<SampleVocabularyProps> = ({ onBack, pronoun }) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showPracticeSpeaking, setShowPracticeSpeaking] = useState(false);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      utterance.rate = 0.6;
      utterance.pitch = 1.0;
      speechSynthesis.speak(utterance);
    }
  };

  const vocabularySections: VocabularySection[] = [
    {
      id: 'things',
      title: 'Things',
      titleThai: 'สิ่งของ',
      titlePhonetic: 'sìŋkhɔ̌ɔŋ',
      icon: <Package className="w-5 h-5" />,
      vocabulary: [
        { thai: 'สมุด', phonetic: 'samùt', english: 'Notebook' },
        { thai: 'หนังสือ', phonetic: 'naŋsʉ̌ʉ', english: 'Book' },
        { thai: 'ปากกา', phonetic: 'pàakkaa', english: 'Pen' },
        { thai: 'ดินสอ', phonetic: 'dinsɔ̌ɔ', english: 'Pencil' },
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
      id: 'colors',
      title: 'Colors',
      titleThai: 'สี',
      titlePhonetic: 'sǐi',
      icon: <BookOpen className="w-5 h-5" />,
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
        { thai: 'สีเหลือง', phonetic: 'sǐi lʉ̌aŋ', english: 'Yellow' }
      ],
      tips: 'In Thai, the names of colors are usually formed by placing the word \'sǐi\' in front of the color word. For example, sǐi dɛɛŋ means \'red,\' sǐi khǐaw means \'green.\' In other words, the pattern is sii + color.'
    },
    {
      id: 'days-months',
      title: 'Days and Months',
      titleThai: 'วันและเดือน',
      titlePhonetic: 'wan / dʉan',
      icon: <Calendar className="w-5 h-5" />,
      vocabulary: [
        { thai: 'วันจันทร์', phonetic: 'wan can', english: 'Monday' },
        { thai: 'วันอังคาร', phonetic: 'wan aŋkhaan', english: 'Tuesday' },
        { thai: 'วันพุธ', phonetic: 'wan phút', english: 'Wednesday' },
        { thai: 'วันพฤหัสบดี', phonetic: 'wan pha rʉ́hàt sa bɔɔ dii', english: 'Thursday' },
        { thai: 'วันศุกร์', phonetic: 'wan sùk', english: 'Friday' },
        { thai: 'วันเสาร์', phonetic: 'wan sǎw', english: 'Saturday' },
        { thai: 'วันอาทิตย์', phonetic: 'wan aathít', english: 'Sunday' },
        { thai: 'มกราคม', phonetic: 'ma ka raa khom', english: 'January' },
        { thai: 'กุมภาพันธ์', phonetic: 'kum phaa phan', english: 'February' },
        { thai: 'มีนาคม', phonetic: 'mii naa khom', english: 'March' },
        { thai: 'เมษายน', phonetic: 'mee sǎa yon', english: 'April' },
        { thai: 'พฤษภาคม', phonetic: 'phrʉ́t sa phaa khom', english: 'May' },
        { thai: 'มิถุนายน', phonetic: 'mí thù naa yon', english: 'June' },
        { thai: 'กรกฎาคม', phonetic: 'ka ra ka daa khom', english: 'July' },
        { thai: 'สิงหาคม', phonetic: 'sǐŋ hǎa khom', english: 'August' },
        { thai: 'กันยายน', phonetic: 'kan yaa yon', english: 'September' },
        { thai: 'ตุลาคม', phonetic: 'tù laa khom', english: 'October' },
        { thai: 'พฤศจิกายน', phonetic: 'phrʉ́t sa cì kaa yon', english: 'November' },
        { thai: 'ธันวาคม', phonetic: 'than waa khom', english: 'December' }
      ],
      tips: 'Normally, Thai people often use shortened forms when referring to the names of months or days. For example, the full word \'Ma ka raa khom\' is commonly shortened to \'Ma ka raa\''
    },
    {
      id: 'places',
      title: 'Places',
      titleThai: 'สถานที่',
      titlePhonetic: 'chʉ̂ʉ sathǎanthîi',
      icon: <MapPin className="w-5 h-5" />,
      vocabulary: [
        { thai: 'ตลาด', phonetic: 'talàat', english: 'Market' },
        { thai: 'สถานกงสุล', phonetic: 'sa thǎan koŋ sǔn', english: 'The consulate' },
        { thai: 'ตรวจคนเข้าเมือง', phonetic: 'tɔɔmɔɔ', english: 'The immigration' },
        { thai: 'โรงเรียน', phonetic: 'rooŋrian', english: 'School' },
        { thai: 'บ้าน', phonetic: 'bâan', english: 'House' },
        { thai: 'ไปรษณีย์', phonetic: 'pray sa nii', english: 'Post office' },
        { thai: 'ห้าง', phonetic: 'hâaŋ', english: 'The mall' },
        { thai: 'ที่จอดรถ', phonetic: 'thîi cɔ̀ɔt rót', english: 'The parking lot' },
        { thai: 'ห้องน้ำ', phonetic: 'hɔ̂ŋnáam', english: 'Toilet' },
        { thai: 'สนามบิน', phonetic: 'sanǎambin', english: 'The Airport' }
      ],
      tips: 'Usage of "yùu thîi" and "thɛ̌ɛw" in Thai: yùu thîi + [place] → to be at + [place]. yùu thɛ̌ɛw + [area / landmark] → to be around / near + [area / landmark]',
      examples: [
        'chǎn yùu thîi bâan = I am at home.',
        'khǎo yùu thîi roongrian = He/She is at school.',
        'roong rian yùu thɛ̌ɛw tàlàat = The school is near the market.',
        'chǎn yùu thɛ̌ɛw Nimman = I live around the Nimman area.',
        'ráan yùu thɛ̌ɛw hâang Central = The shop is around Central mall.'
      ]
    },
    {
      id: 'careers',
      title: 'Careers',
      titleThai: 'อาชีพ',
      titlePhonetic: 'aa chîip',
      icon: <Briefcase className="w-5 h-5" />,
      vocabulary: [
        { thai: 'ครู', phonetic: 'khruu', english: 'Teacher' },
        { thai: 'นักเรียน', phonetic: 'nák rian', english: 'Student' },
        { thai: 'ตำรวจ', phonetic: 'tamrùat', english: 'Police' },
        { thai: 'หมอ', phonetic: 'mɔ̌ɔ', english: 'Doctor' },
        { thai: 'พนักงาน', phonetic: 'pha nák ŋaan', english: 'The officer' },
        { thai: 'พ่อค้า / แม่ค้า', phonetic: 'phɔ̂ɔkháa / mɛ̂ɛkháa', english: 'Men Seller / Women Seller' },
        { thai: 'พ่อบ้าน / แม่บ้าน', phonetic: 'phɔ̂ɔbâan / mɛ̂ɛbâan', english: 'Men Housekeepers / Women Housekeepers' }
      ],
      tips: '[subject] + pen + [occupation]: chǎn pen + [occupation] → I am a + [occupation]. khǎw pen + [occupation] → He/She is a + [occupation]',
      examples: [
        'chǎn pen nákrian = I am a student.',
        'khǎw pen tamrùat = He/She is a police officer.'
      ]
    },
    {
      id: 'food-drinks',
      title: 'Foods and Drinks',
      titleThai: 'อาหารและเครื่องดื่ม',
      titlePhonetic: 'aahǎan / khrʉ̂aŋdʉ̀ʉm',
      icon: <Utensils className="w-5 h-5" />,
      vocabulary: [
        { thai: 'ผัดไทย', phonetic: 'phàt thay', english: 'PadThai' },
        { thai: 'ข้าวซอย', phonetic: 'khâaw sɔɔy', english: 'Khawsoi' },
        { thai: 'ต้มยำกุ้ง', phonetic: 'tômyam kûŋ', english: 'Tom yam kung' },
        { thai: 'แกงเขียวหวาน', phonetic: 'kɛɛŋkhǐawwǎan', english: 'Green curry' },
        { thai: 'ก๋วยเตี๋ยว', phonetic: 'kuaytiew', english: 'Noodle' },
        { thai: 'ผัดกะเพรา', phonetic: 'phàt kàphraw', english: 'Fried basil' },
        { thai: 'หมูปิ้ง', phonetic: 'mǔu pîŋ', english: 'Grilled pork' },
        { thai: 'ข้าวผัด', phonetic: 'khâawphàt', english: 'Fried rice' },
        { thai: 'ไข่เจียว', phonetic: 'khàyciaw', english: 'Omelet' },
        { thai: 'ข้าวต้ม', phonetic: 'khâawtôm', english: 'Rice soup' },
        { thai: 'ชา', phonetic: 'chaa', english: 'Tea' },
        { thai: 'กาแฟ', phonetic: 'kaafɛɛ', english: 'Coffee' },
        { thai: 'น้ำส้ม', phonetic: 'náam sôm', english: 'Orange juice' },
        { thai: 'โค้ก', phonetic: 'khôok', english: 'Coke' },
        { thai: 'ชาเขียว', phonetic: 'chaa khǐaw', english: 'Green tea' },
        { thai: 'ชาไทย', phonetic: 'chaa thay', english: 'Thai tea' },
        { thai: 'โกโก้', phonetic: 'coco', english: 'Coco' }
      ],
      tips: 'Ordering Food & Drinks in Thai: phǒm/chǎn khǒr + [food/drink] + nòi khráp/khâ → I would like [food/drink], please. ao + [food/drink] + khráp/khâ → I\'ll have [food/drink].',
      examples: [
        'phǒm khǒr kaafɛɛ rɔ́ɔn nòi khráp = I\'d like a hot coffee, please.',
        'ao khâao phàt khráp = I\'ll have fried rice.',
        'ao chaa yen khâ = I\'ll have Thai iced tea.'
      ]
    }
  ];

  const practiceQuestions = [
    {
      thai: 'คุณชื่ออะไร',
      phonetic: 'khún chʉ̂ʉ àray',
      english: 'what\'s your name',
      answerThai: 'ฉัน/ผมชื่อ...',
      answerPhonetic: 'chǎn/phǒm chʉ̂ʉ ...',
      answerEnglish: 'My name is ...'
    },
    {
      thai: 'อายุเท่าไหร่',
      phonetic: 'aayú thâwrày',
      english: 'how old are you',
      answerThai: 'อายุ...ปี',
      answerPhonetic: 'aayú ... pii',
      answerEnglish: '... year old.'
    },
    {
      thai: 'คุณมาจากประเทศอะไร',
      phonetic: 'khun maacàak pràthêet àray',
      english: 'where are you from [country]',
      answerThai: 'ฉัน/ผมมาจากประเทศ...',
      answerPhonetic: 'chǎn/phǒm maacàak pràthêet ...',
      answerEnglish: 'I come from [country]'
    },
    {
      thai: 'คุณมาอยู่ประเทศไทยกี่เดือนแล้ว',
      phonetic: 'khun maa yùu pràthêetthay kìi dʉan lɛ́ɛw',
      english: 'how long you have been in thailand',
      answerThai: 'ฉัน/ผมอยู่ที่ไทย...เดือน',
      answerPhonetic: 'chǎn / phǒm yùu thîi thay ... dʉan',
      answerEnglish: 'I live in Thailand ... month'
    },
    {
      thai: 'ทำไมคุณมาอยู่ประเทศไทย',
      phonetic: 'thammay khun maa yùu pràthêetthay',
      english: 'why you come to thailand',
      answerThai: 'เพราะฉัน/ผมมาเรียนภาษาไทย',
      answerPhonetic: 'phrɔ́ chǎn / phǒm maa rian phaasǎathay',
      answerEnglish: 'because I came to study Thai'
    },
    {
      thai: 'คุณเรียนภาษา...มากี่เดือนแล้ว',
      phonetic: 'khun rian phaasǎa ... mâa kîi dʉan lɛ́ɛw',
      english: 'how many months you learn … language',
      answerThai: 'ฉัน/ผมเรียนภาษา...มา...เดือนแล้ว',
      answerPhonetic: 'chǎn / phǒm rian phaasǎa ... maa ... dʉan lɛ́ɛw',
      answerEnglish: 'I have studied ... month'
    },
    {
      thai: 'คุณชอบสีอะไร',
      phonetic: 'khun chɔ̂ɔp sǐi àray',
      english: 'what kind of color do you like',
      answerThai: 'ฉัน/ผมชอบสีแดง, สีเขียว, สีส้ม, สีดำ',
      answerPhonetic: 'chǎn / phǒm chɔ̂ɔp sǐi dɛɛŋ , sǐi khǐaw , sǐisôm , sǐi dam',
      answerEnglish: 'I like [color] red,green,orange,black'
    },
    {
      thai: 'คุณชอบอาหารไทยอะไรบ้าง',
      phonetic: 'khun chɔ̂ɔp aahǎan thay àray bâaŋ',
      english: 'what kind of thai food do you like',
      answerThai: 'ฉัน/ผมชอบผัดไทย, ต้มยำกุ้ง, ผัดกะเพรา',
      answerPhonetic: 'chǎn / phǒm chɔ̂ɔp phàt thay , tômyam kûŋ , phàt krà phraw',
      answerEnglish: 'I like [Thai food]'
    },
    {
      thai: 'คุณเรียนหลักสูตรอะไร',
      phonetic: 'khun rian làksùut àray',
      english: 'what curriculum you study',
      answerThai: 'ฉัน/ผมเรียนหลักสูตร...',
      answerPhonetic: 'chǎn / phǒm rian làksùut ...',
      answerEnglish: 'I have studied ... curriculum'
    },
    {
      thai: 'คุณเรียนวันไหนบ้าง',
      phonetic: 'khun rian wan nǎy bâaŋ',
      english: 'what day do you study',
      answerThai: 'ฉัน/ผมเรียนวัน...ถึงวัน...',
      answerPhonetic: 'chǎn / phǒm rian wan ... thʉ̌ŋ wan ...',
      answerEnglish: 'I study [Day of a week] to [Day of a week]'
    },
    {
      thai: 'คุณเรียนกี่โมง',
      phonetic: 'khun rian kìi mooŋ',
      english: 'what time do you study',
      answerThai: 'ฉัน/ผมเรียน...โมงถึง...โมง',
      answerPhonetic: 'chǎn / phǒm rian ... mooŋ thʉ̌ŋ … mooŋ',
      answerEnglish: 'I am study at ... o\'clock to … o\'clock'
    },
    {
      thai: 'โรงเรียนคุณชื่ออะไร',
      phonetic: 'rooŋrian khun chʉ̂ʉ àray',
      english: 'what is your school name',
      answerThai: 'โรงเรียนจุฬปราการภาษา / ILS School',
      answerPhonetic: 'rooŋrian cùtpràkaay phaasǎa / ILS School',
      answerEnglish: 'I am study at ILS school'
    }
  ];

  const formatAnswerWithPronoun = (answer: string) => {
    return answer.replace(/ฉัน\/ผม|ผม\/ฉัน|ฉัน \/ ผม|ผม \/ ฉัน/g, pronoun === 'chǎn' ? 'ฉัน' : 'ผม')
                 .replace(/chǎn\/phǒm|chǎn \/ phǒm|phǒm\/chǎn|phǒm \/ chǎn/g, pronoun);
  };

  if (showPracticeSpeaking) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowPracticeSpeaking(false)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Vocabulary</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Practice Speaking</h1>
            <p className="text-gray-600 text-lg">
              Practice common questions and answers for Thai language interviews
            </p>
          </div>

          <div className="space-y-6">
            {practiceQuestions.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-blue-800">Question {index + 1}:</h4>
                      <button
                        onClick={() => speakText(item.thai)}
                        className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <p className="text-lg font-medium text-blue-800 mb-1">
                      {item.thai}
                    </p>
                    <p className="text-lg font-medium text-blue-700 mb-1">
                      {item.phonetic}
                    </p>
                    <p className="text-gray-600">({item.english})</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-green-800">Answer:</h4>
                      <button
                        onClick={() => speakText(formatAnswerWithPronoun(item.answerThai))}
                        className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-200"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <p className="text-lg font-medium text-green-800 mb-1">
                      {formatAnswerWithPronoun(item.answerThai)}
                    </p>
                    <p className="text-lg font-medium text-green-700 mb-1">
                      {formatAnswerWithPronoun(item.answerPhonetic)}
                    </p>
                    <p className="text-gray-600">({item.answerEnglish})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection) {
    const section = vocabularySections.find(s => s.id === selectedSection);
    if (!section) return null;

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedSection(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Categories</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                {section.icon}
              </div>
              <h1 className="text-4xl font-bold text-gray-800">{section.title}</h1>
            </div>
            <p className="text-xl text-blue-600 font-medium mb-1">{section.titlePhonetic}</p>
            <p className="text-gray-600">{section.vocabulary.length} vocabulary items</p>
          </div>

          {section.tips && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Tips</h3>
              <p className="text-yellow-700 leading-relaxed">{section.tips}</p>
            </div>
          )}

          <div className="grid gap-4 mb-8">
            {section.vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      {item.thai && (
                        <div className="text-xl font-bold text-gray-800">
                          {item.thai}
                        </div>
                      )}
                      <div className="text-lg font-semibold text-blue-600">
                        {item.phonetic}
                      </div>
                      <button
                        onClick={() => speakText(item.thai || item.phonetic)}
                        className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200"
                        title="Listen to pronunciation"
                      >
                        <Volume2 size={16} className="text-blue-600" />
                      </button>
                    </div>
                    <p className="text-gray-700 font-medium">{item.english}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {section.examples && (
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">📚 Examples</h3>
              <div className="space-y-3">
                {section.examples.map((example, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-gray-700 leading-relaxed">{example}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Topics</span>
        </button>
        
        <button
          onClick={() => setShowPracticeSpeaking(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
        >
          <Volume2 size={18} />
          <span>Practice Speaking</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sample Vocabulary</h1>
          <p className="text-gray-600 text-lg">
            Essential vocabulary organized by categories for Thai language learning
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {vocabularySections.length} categories • {vocabularySections.reduce((total, section) => total + section.vocabulary.length, 0)} total vocabulary items
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vocabularySections.map((section) => (
            <div
              key={section.id}
              className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setSelectedSection(section.id)}
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600">{section.titlePhonetic}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {section.vocabulary.length} items
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                    Study
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <BookOpen className="text-green-600 mt-0.5" size={20} />
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">How to Use This Section</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Click on any category to view vocabulary items</li>
                <li>• Use audio buttons to practice pronunciation</li>
                <li>• Read the tips for better understanding</li>
                <li>• Try the "Practice Speaking" section for Q&A practice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleVocabulary;