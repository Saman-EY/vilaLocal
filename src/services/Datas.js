import img1 from '../assets/images/img.png';
import img2 from '../assets/images/vila1.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import vila1 from '../assets/images/vila1.png';
import vila2 from '../assets/images/vila2.jpg';
import vila3 from '../assets/images/vila3.jpeg';
import vila4 from '../assets/images/vila4.jpeg';
import vila5 from '../assets/images/vila5.jpg';
import vila6 from '../assets/images/vila6.jpeg';
import vila7 from '../assets/images/vila7.jpg';

export const villaTypes = [
  'ویلا کلاسیک',
  'ویلا تلفیقی',
  'ویلا مینیمال',
  'ویلا شهرکی',
  'ویلا مدرن'
];
export const villaViews = ['جنگلی', 'ساحلی و دریا', 'کوهستانی'];
export const metraj = ['بین 50 تا 250', 'بین 250 تا 500', 'بین 500 تا 700', 'بین 700 تا 1000', 'بین 1000 تا 5000']
export const states = [
  'گیلان',
  'مازندران',
  'گلستان',
  'هرمزگان',
]
export const cities = [
  'لنگرود',
  'لاهیجان',
  'آستارا',
  'رامسر',
]
export const age = ["نو ساز", '10 سال', '30 سال', '50 سال']
// export const

export const landingSlider = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 }
];

export const ImagesGallery = [
  {img: vila1},
  {img: vila2},
  {img: vila3},
  {img: vila4},
  {img: vila5},
]

export const newVilaData = [
  {
    id: 1,
    img: vila1,
    title: 'لورم ایپسوم',
    number_room: 4,
    meterage_building: 120,
    meterage_house: 100
  },
  {
    id: 2,
    img: vila2,
    title: 'لورم ایپسوم',
    number_room: 5,
    meterage_building: 150,
    meterage_house: 140
  },
  {
    id: 3,
    img: vila3,
    title: 'لورم ایپسوم',
    number_room: 3,
    meterage_building: 200,
    meterage_house: 190
  },
  {
    id: 4,
    img: vila4,
    title: 'لورم ایپسوم',
    number_room: 2,
    meterage_building: 210,
    meterage_house: 200
  },
  {
    id: 5,
    img: vila5,
    title: 'لورم ایپسوم',
    number_room: 4,
    meterage_building: 160,
    meterage_house: 140
  },
  {
    id: 6,
    img: vila6,
    title: 'لورم ایپسوم',
    number_room: 4,
    meterage_building: 120,
    meterage_house: 100
  },
  {
    id: 7,
    img: vila7,
    title: 'لورم ایپسوم',
    number_room: 6,
    meterage_building: 155,
    meterage_house: 150
  }
];
export const bigVilaData = [
  {
    id: 1,
    img: vila2,
    title: 'لورم ایپسوم',
    number_room: 4,
    meterage_building: 120,
    meterage_house: 100
  },
  {
    id: 2,
    img: vila5,
    title: 'لورم ایپسوم',
    number_room: 5,
    meterage_building: 150,
    meterage_house: 140
  },
  {
    id: 3,
    img: vila6,
    title: 'لورم ایپسوم',
    number_room: 3,
    meterage_building: 200,
    meterage_house: 190
  },
  {
    id: 4,
    img: vila3,
    title: 'لورم ایپسوم',
    number_room: 2,
    meterage_building: 210,
    meterage_house: 200
  },
  {
    id: 5,
    img: vila1,
    title: 'لورم ایپسوم',
    number_room: 4,
    meterage_building: 160,
    meterage_house: 140
  },
  {
    id: 6,
    img: vila7,
    title: 'لورم ایپسوم',
    number_room: 4,
    meterage_building: 120,
    meterage_house: 100
  },
  {
    id: 7,
    img: vila4,
    title: 'لورم ایپسوم',
    number_room: 6,
    meterage_building: 155,
    meterage_house: 150
  }
];

export const consultants = [
  {
    id: 1,
    name: 'سامان',
    phone: '09999999999',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
  },
  {
    id: 2,
    name: 'حسین',
    phone: '09999999999',
    description: ''
  },
  {
    id: 3,
    name: 'علیرضا',
    phone: '09999999999',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
  },
  {
    id: 4,
    name: 'آرش',
    phone: '09999999999',
    description: ''
  },
  {
    id: 5,
    name: 'زهرا',
    phone: '09999999999',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
  },
  {
    id: 6,
    name: 'نیلوفر',
    phone: '09999999999',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
  }
];

export const allVilas = [...bigVilaData, ...newVilaData]

export const tab2Data = [
  {key: "انشعابات شهرکی", value: "دارد"},
  {key: "جکوزی", value: "دارد"},
  {key: "روفگاردن", value: "دارد"},
  {key: "استخر", value: "دارد"},
  {key: "شاه نشین", value: "دارد"},
  {key: "پکیج و رادیاتور", value: "دارد"},
  {key: "کنتور آب", value: "دارد"},
  {key: "خواب مستر", value: "4 عدد"},
  {key: "حمام", value: "4 عدد"},
  {key: "پارکینگ", value: "3 عدد"},
]

export const tab3Data = [
  {key: "نگهبانی", value: "دارد"},
  {key: "وان حمام", value: "دارد"},
  {key: "نور پردازی", value: "دارد"},
  {key: "مبله", value: "دارد"},
  {key: "درب ضد سرقت", value: "دارد"},
  {key: "اتاق پخت", value: "دارد"},
  {key: "میز اسنوکر", value: "ندارد"},
  {key: "فاصله تا دریا", value: "کمتر از 1000 متر"},
  {key: "فاصله تا جنگل", value: "کمتر از 500 متر"},
]

export const CommentsData = []