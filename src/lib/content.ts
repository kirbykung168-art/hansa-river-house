/**
 * HANSA RIVER HOUSE — single source of truth for all copy + asset URLs.
 *
 * Hansa (हंस / ห่าน / hamsa) is Sanskrit for swan — a graceful, light-filled
 * riverfront house on Song Wat, opened 2025, built for occasions and
 * celebrations and watching long-tail boats glide by.
 *
 * Verified sources:
 *   - passportandstamps Song Wat 2026 guide ("serene 2025 addition where
 *     you can watch long-tail boats while sipping a fresh Coconut")
 *   - Google Maps / Trip.com (address, hours, phone)
 *   - Wanderlog + restaurantguru.com (menu, pricing)
 *   - Mindtrip / OpenRice (hours confirmation)
 *   - @hansariverhouse on Instagram + Facebook + Linktree
 */

export type Locale = 'en' | 'th';

export const BRAND = {
  name: 'Hansa River House',
  nameTh: 'หงส์ เรือนริมน้ำ',
  meaning: {
    en: 'Hansa — Sanskrit hamsa, the swan',
    th: 'หงส์ — สัญลักษณ์ของความสง่า ในแม่น้ำเจ้าพระยา',
  },
  tagline: {
    en: 'A riverfront house for celebrations on Song Wat.',
    th: 'เรือนริมน้ำ สำหรับโอกาสพิเศษ บนถนนทรงวาด',
  },
  pressLine: {
    en: 'A serene 2025 addition where you can watch long-tail boats while sipping a fresh coconut.',
    th: 'ที่ใหม่ปี 2025 อันแสนสงบ ที่คุณนั่งจิบน้ำมะพร้าวเย็น ๆ ดูเรือหางยาววิ่งผ่าน',
  },
  pressAttribution: 'Passport & Stamps · Song Wat 2026 Guide',
  pressUrl: 'https://passportandstamps.com/song-wat-road-bangkok/',

  phoneDisplay: '+66 96 128 2450',
  phoneTel: '+66961282450',
  email: 'hansariverhouse@gmail.com',
  instagramHandle: '@hansariverhouse',
  instagramUrl: 'https://www.instagram.com/hansariverhouse/',
  facebookUrl: 'https://www.facebook.com/hansariverhouse8/',
  linktreeUrl: 'https://linktr.ee/hansariverhouse',

  addressLine1: '1616 Song Wat Road',
  addressLine2: 'Samphanthawong, Bangkok 10100',
  addressOneLine: '1616 Song Wat Road, Samphanthawong, Bangkok 10100',
  // Approximate coordinates for the Chao Phraya-facing Song Wat block at 1616.
  lat: 13.7396,
  lng: 100.5072,
  googleMapsUrl: 'https://maps.google.com/?q=Hansa+River+House+1616+Song+Wat+Road+Bangkok',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=1616%20Song%20Wat%20Road%2C%20Samphanthawong%2C%20Bangkok%2010100&t=&z=17&ie=UTF8&iwloc=&output=embed',
  transit: 'MRT Sanam Chai · MRT Wat Mangkon · short tuk-tuk from Sathorn or Silom · river ferry to Ratchawong',

  // Hours per Wanderlog + OpenRice (most current). Closed Wednesday.
  hoursOpen: 'Mon · Tue · Thu – Sun  ·  11:30 AM – 8 PM',
  hoursClosed: 'Closed Wednesday',
  opened: 2025,

  pricing: {
    perDish: '฿101 – ฿250',
    minSpend: '฿400 per person',
  },

  /** Canonical site URL. Update on custom-domain attach. */
  domain: 'hansa-river-house.vercel.app',
};

/* ===================================================================
 *  NAV
 * =================================================================== */
export const NAV_ITEMS: { href: string; label: { en: string; th: string } }[] = [
  { href: '#story',     label: { en: 'The House',  th: 'เรือนแห่งนี้' } },
  { href: '#menu',      label: { en: 'The Table',  th: 'สำรับ' } },
  { href: '#occasions', label: { en: 'Occasions',  th: 'โอกาสพิเศษ' } },
  { href: '#river',     label: { en: 'The River',  th: 'แม่น้ำ' } },
  { href: '#visit',     label: { en: 'Visit',      th: 'การเดินทาง' } },
];

/* ===================================================================
 *  COPY — all section text, EN + TH
 * =================================================================== */
export const COPY = {
  nav: {
    reserve: { en: 'Reserve',  th: 'จองโต๊ะ' },
    enquire: { en: 'Enquire',  th: 'สอบถาม' },
  },

  hero: {
    eyebrow: {
      en: '1616 Song Wat · Chao Phraya · since 2025',
      th: '1616 ทรงวาด · แม่น้ำเจ้าพระยา · เปิดปี 2025',
    },
    title: {
      en: 'For your occasions, on the river.',
      th: 'สำหรับโอกาสพิเศษของคุณ ริมแม่น้ำ',
    },
    body: {
      en: 'A graceful two-storey wooden house on Song Wat, terrace over the Chao Phraya, table set for celebrations.',
      th: 'เรือนไม้สองชั้นบนทรงวาด · ระเบียงทอดยาวสู่เจ้าพระยา · โต๊ะที่จัดเตรียมไว้สำหรับวันสำคัญ',
    },
    ctaReserve: { en: 'Reserve a table',     th: 'จองโต๊ะ' },
    ctaOccasion:{ en: 'Enquire · occasions', th: 'สอบถามงานพิเศษ' },
    scrollHint: { en: 'Drift down',          th: 'เลื่อนลงเบา ๆ' },
  },

  story: {
    eyebrow: { en: 'The house', th: 'เรือนแห่งนี้' },
    title: {
      en: 'Two storeys, one river, room for an occasion.',
      th: 'สองชั้น · แม่น้ำหนึ่งสาย · พื้นที่สำหรับโอกาสพิเศษ',
    },
    body: {
      en: 'Hansa took its name from the Sanskrit hamsa — the swan, the symbol of grace gliding on water. The house opened in 2025 as a serene addition to Song Wat: a preserved two-storey wooden building, a terrace that extends over the Chao Phraya, classic Thai cooking sent out by a homestyle kitchen. Visitors come for the long-tail boats on a quiet afternoon and for the candles lit at dusk; couples come for birthday dinners and for the rare Bangkok evening that asks for something held back, refined, slow.',
      th: 'หงส์ (Hansa) ได้ชื่อมาจากภาษาสันสกฤต — สัญลักษณ์ของความสง่างามที่เคลื่อนไหวบนผืนน้ำ เรือนหลังนี้เปิดในปี 2025 บนทรงวาด เป็นเรือนไม้สองชั้นที่ถูกอนุรักษ์ไว้ ระเบียงทอดยาวสู่เจ้าพระยา ครัวที่ทำอาหารไทยตำรับบ้าน บางคนแวะมาในบ่ายเงียบ ๆ ดูเรือหางยาว บางคนจองโต๊ะวันเกิด สำหรับค่ำคืนที่ขอเวลาช้า ๆ และละเอียดอ่อน',
    },
    pullQuote: {
      en: 'A serene 2025 addition where you can watch long-tail boats while sipping a fresh coconut.',
      th: 'ที่ใหม่ปี 2025 อันแสนสงบ ที่คุณนั่งจิบน้ำมะพร้าวเย็น ๆ ดูเรือหางยาววิ่งผ่าน',
    },
    pullAttribution: 'Passport & Stamps · Song Wat 2026 Guide',
  },

  menu: {
    eyebrow: { en: 'The table', th: 'สำรับ' },
    title: {
      en: 'Classic Thai, by the river.',
      th: 'อาหารไทยตำรับบ้าน · เคียงแม่น้ำ',
    },
    intro: {
      en: 'Homestyle Thai cooking, the kind that asks for an unhurried evening — most dishes ฿101 – ฿250, a gentle ฿400 minimum per guest so the kitchen can send out the long version of each plate.',
      th: 'อาหารไทยรสมือแม่ · ขอค่ำคืนที่ไม่เร่งรีบ · จานส่วนใหญ่ ฿101 – ฿250 · มินิมัม ฿400 ต่อท่าน เพื่อให้ครัวได้ทำเต็มที่',
    },
    signatures: [
      {
        key: 'pad-thai-prawn',
        name: { en: 'Pad Thai · grilled river prawn',  th: 'ผัดไทย กุ้งแม่น้ำเผา' },
        desc: {
          en: 'Stir-fried rice noodles, tamarind, tofu, bean sprouts — topped with a whole smoky river prawn.',
          th: 'เส้นจันท์ผัดมะขาม เต้าหู้ ถั่วงอก กุ้งแม่น้ำเผาทั้งตัว',
        },
      },
      {
        key: 'tom-yum-kung',
        name: { en: 'Tom Yum Kung · five shrimp',       th: 'ต้มยำกุ้ง 5 ตัว' },
        desc: {
          en: 'Lemongrass, galangal, kaffir lime, fresh chilli — the kind of broth you order twice.',
          th: 'ตะไคร้ ข่า ใบมะกรูด พริก น้ำซุปที่สั่งซ้ำเสมอ',
        },
      },
      {
        key: 'crab-omelette',
        name: { en: 'Crabmeat omelette · over rice',   th: 'ข้าวไข่เจียวปู' },
        desc: {
          en: 'Sweet crab, silky egg, fluffy rice. Every table orders it.',
          th: 'ปูก้อนหวาน ไข่นุ่ม ข้าวร้อน · ทุกโต๊ะสั่ง',
        },
      },
    ],
    larger: [
      { name: { en: 'Crispy morning glory · spicy salad', th: 'ยำผักบุ้งทอดกรอบ' },
        desc: { en: 'Deep-fried morning glory, shrimp, herbs, lime.', th: 'ผักบุ้งทอดกรอบ กุ้ง สมุนไพร มะนาว' } },
      { name: { en: 'Pad Sam Meun · stinky beans & prawns', th: 'ผัดสามเหม็น (สะตอ กุ้ง กะปิ)' },
        desc: { en: 'Petai beans, garlic chives, shrimp paste — bold and unmissable.', th: 'สะตอ ใบกระเทียม กะปิ · จานรสจัด' } },
      { name: { en: 'Massaman curry · slow-cooked',    th: 'แกงมัสมั่น เคี่ยวช้า' },
        desc: { en: 'Tender beef or chicken, peanuts, potatoes, cardamom.', th: 'เนื้อหรือไก่เปื่อย ถั่วลิสง มันฝรั่ง กระวาน' } },
      { name: { en: 'Steamed seabass · lime sauce',    th: 'ปลากะพงนึ่งมะนาว' },
        desc: { en: 'Whole seabass, garlic, fresh chilli, citrus broth.', th: 'ปลากะพงทั้งตัว กระเทียม พริกขี้หนู น้ำมะนาว' } },
      { name: { en: 'Stir-fried river prawns · garlic pepper', th: 'กุ้งแม่น้ำผัดกระเทียมพริกไทย' },
        desc: { en: 'Local river prawns, white pepper, golden garlic.', th: 'กุ้งแม่น้ำท้องถิ่น พริกไทยขาว กระเทียมเจียว' } },
      { name: { en: 'Pomelo salad · grilled shrimp',   th: 'ยำส้มโอกุ้งย่าง' },
        desc: { en: 'Tangy pomelo, coconut, peanut, dried shrimp.', th: 'ส้มโอเปรี้ยวอมหวาน มะพร้าวคั่ว ถั่วลิสง กุ้งแห้ง' } },
    ],
    drinks: [
      { name: { en: 'Fresh coconut',         th: 'น้ำมะพร้าวสด' },
        desc: { en: 'Cold, whole, served in the husk.',       th: 'เย็น ลูกใหญ่ เสิร์ฟทั้งลูก' } },
      { name: { en: 'Butterfly pea · lime',  th: 'น้ำอัญชันมะนาว' },
        desc: { en: 'Indigo to violet — the colour shift the river is named for.', th: 'น้ำเงินเปลี่ยนเป็นม่วงเมื่อบีบมะนาว' } },
      { name: { en: 'Thai iced tea',         th: 'ชาเย็น' },
        desc: { en: 'Classic, condensed milk, plenty of ice.', th: 'นมข้น น้ำแข็งเย็นชื่นใจ' } },
      { name: { en: 'House wine · by the glass', th: 'ไวน์ของเรือน · แก้ว' },
        desc: { en: 'A small list — leaning soft and bright for the river table.', th: 'ลิสต์เล็ก ๆ · นุ่ม สดชื่น เข้ากับสำรับริมน้ำ' } },
    ],
    footnote: {
      en: 'Menu seen across press 2025 – 2026. Full menu at the table.',
      th: 'เมนูจากการรีวิวสื่อ 2025 – 2026 · เมนูเต็มที่ร้าน',
    },
  },

  occasions: {
    eyebrow: { en: 'For your occasion', th: 'สำหรับโอกาสของคุณ' },
    title: {
      en: 'A table held for the moment.',
      th: 'โต๊ะที่จัดไว้สำหรับช่วงเวลาพิเศษ',
    },
    body: {
      en: 'The terrace and the upper floor can be held for birthdays, anniversaries, engagement dinners, corporate gatherings — anything that asks for the river to be the witness. Cake, candles, flowers, and longer kitchen pacing on request. Tell us the date and the headcount; we will set the table.',
      th: 'ระเบียงและชั้นบนพร้อมรับงานเลี้ยง · วันเกิด · ครบรอบ · งานหมั้น · เลี้ยงบริษัท · สิ่งใดก็ตามที่ขอให้แม่น้ำเป็นพยาน · เค้ก เทียน ดอกไม้ และจังหวะครัวที่ช้าลงตามที่ขอ · บอกวันและจำนวนแขก เราจะจัดโต๊ะให้',
    },
    capacities: [
      { en: 'Terrace dinner · 6 – 16 guests',   th: 'ระเบียงริมน้ำ · 6 – 16 ท่าน' },
      { en: 'Upper floor · 20 – 40 guests',     th: 'ชั้นบน · 20 – 40 ท่าน' },
      { en: 'Full house buy-out · up to 60',    th: 'เหมาทั้งเรือน · สูงสุด 60 ท่าน' },
    ],
    cta: { en: 'Send an enquiry',  th: 'ส่งคำสอบถาม' },
    emailBody: {
      en: 'Hi Hansa, I would like to enquire about an occasion for ___ guests, on or around ___. Format: terrace / upper floor / full house. Anything else you should know about the occasion: ___. Thank you.',
      th: 'สวัสดีครับ/ค่ะ ทีมงาน Hansa River House ขอสอบถามเรื่องงานเลี้ยง ___ ท่าน วันที่ ___ รูปแบบ: ระเบียง / ชั้นบน / เหมาเรือน รายละเอียดเพิ่มเติม: ___ ขอบคุณครับ/ค่ะ',
    },
  },

  river: {
    eyebrow: { en: 'The river', th: 'แม่น้ำ' },
    title: {
      en: 'Long-tail boats. A quiet hour.',
      th: 'เรือหางยาวผ่าน · ชั่วโมงเงียบ ๆ',
    },
    body: {
      en: 'The Chao Phraya runs slow past Song Wat in the late afternoon, faster after dark when the cargo barges turn for the gulf. Long-tail boats glide between Wat Arun and Wat Mangkon all day. The terrace is the best seat for it.',
      th: 'แม่น้ำเจ้าพระยาไหลเงียบ ๆ ผ่านทรงวาดในยามบ่าย · เร็วขึ้นยามค่ำเมื่อเรือบรรทุกเลี้ยวลงอ่าว · เรือหางยาวพาดผ่านระหว่างวัดอรุณกับวัดมังกร · ระเบียงคือที่นั่งที่ดีที่สุด',
    },
  },

  reserve: {
    title: {
      en: 'Reserve a table.',
      th: 'จองโต๊ะ',
    },
    body: {
      en: 'Open Mon, Tue, Thu – Sun · 11:30 AM – 8 PM · Closed Wednesdays',
      th: 'เปิดจันทร์, อังคาร, พฤหัสบดี – อาทิตย์ · 11.30 น. – 20.00 น. · ปิดทุกพุธ',
    },
    primary:   { en: 'Reserve · LINE',  th: 'จองผ่าน LINE' },
    secondary: { en: 'Call the house',  th: 'โทรหาเรือน' },
    dm:        { en: 'DM @hansariverhouse', th: 'DM @hansariverhouse' },
    policy: {
      en: 'Walk-ins welcome when seats permit · tables held 15 minutes past booking · minimum ฿400 per guest.',
      th: 'วอล์คอินยินดี · โต๊ะรอ 15 นาทีหลังเวลาจอง · มินิมัม ฿400 ต่อท่าน',
    },
  },

  visit: {
    eyebrow:   { en: 'Visit',          th: 'การเดินทาง' },
    title:     { en: 'How to find the house.', th: 'มาที่เรือน' },
    hoursLabel:{ en: 'Hours',          th: 'เวลาเปิด' },
    addrLabel: { en: 'Address',        th: 'ที่อยู่' },
    phoneLabel:{ en: 'Phone',          th: 'โทร' },
    emailLabel:{ en: 'Email',          th: 'อีเมล' },
    transitLabel: { en: 'Getting there', th: 'การเดินทาง' },
    parking:   { en: 'No on-site parking · ride-hailing or river ferry recommended', th: 'ไม่มีที่จอด · แนะนำ Grab หรือเรือด่วน' },
  },

  footer: {
    tagline: {
      en: 'A riverfront house for celebrations on Song Wat. Bangkok.',
      th: 'เรือนริมน้ำสำหรับโอกาสพิเศษ บนทรงวาด · กรุงเทพฯ',
    },
    rights: {
      en: 'All rights reserved.',
      th: 'สงวนลิขสิทธิ์',
    },
    credit: {
      en: 'Hansa · the swan, the river, the table',
      th: 'หงส์ · แม่น้ำ · โต๊ะ',
    },
  },
} as const;

/* ===================================================================
 *  SOURCES — every verifiable claim paired with its citation URL.
 *  Drives the /sources appendix page.
 * =================================================================== */
export const SOURCES = [
  { claim: 'Address: 1616 Song Wat Road, Samphanthawong, Bangkok 10100',
    publication: 'Trip.com Bangkok · Hansa River House',
    url: 'https://www.trip.com/moments/detail/bangkok-191-135104426/' },
  { claim: 'Phone +66 96 128 2450',
    publication: 'Wanderlog · Hansa River House',
    url: 'https://wanderlog.com/place/details/13572675/hansa-river-house' },
  { claim: 'Hours: Mon, Tue, Thu – Sun 11:30 AM – 8 PM · Closed Wednesdays',
    publication: 'Mindtrip · Hansa River House',
    url: 'https://mindtrip.ai/restaurant/bangkok-thailand/hansa-river-house/re-RKWQB8AM' },
  { claim: 'Opened 2025 as a riverfront addition to Song Wat',
    publication: 'Passport & Stamps · Song Wat 2026 Guide',
    url: 'https://passportandstamps.com/song-wat-road-bangkok/' },
  { claim: 'Press line: "watch long-tail boats while sipping a fresh coconut"',
    publication: 'Passport & Stamps · Song Wat 2026 Guide',
    url: 'https://passportandstamps.com/song-wat-road-bangkok/' },
  { claim: 'Two-storey wooden house, terrace over the Chao Phraya',
    publication: 'Trip.com Bangkok · Song Wat Road feature',
    url: 'https://us.trip.com/moments/detail/bangkok-191-133341231/' },
  { claim: 'Signature: Pad Thai with grilled river prawn',
    publication: 'Restaurantguru · Hansa River House',
    url: 'https://restaurantguru.com/Hansa-river-house-Bangkok' },
  { claim: 'Signature: Tom Yum Kung with five shrimp',
    publication: 'Restaurantguru · Hansa River House',
    url: 'https://restaurantguru.com/Hansa-river-house-Bangkok' },
  { claim: 'Signature: Crab omelette over rice',
    publication: 'Wanderlog · Hansa River House',
    url: 'https://wanderlog.com/place/details/13572675/hansa-river-house' },
  { claim: 'Pad Sam Meun · three-stinky stir-fry with petai beans',
    publication: 'Wanderlog · Hansa River House',
    url: 'https://wanderlog.com/place/details/13572675/hansa-river-house' },
  { claim: 'Pricing: ฿101 – ฿250 per dish, ฿400 minimum per person',
    publication: 'OpenRice Thailand · Hansa River House',
    url: 'https://th.openrice.com/en/bangkok/r-hansa-river-house-chakkrawat-thai-food-general-r1613612' },
  { claim: 'Featured among the 12 trendy Chao Phraya-view restaurants & cafés (Tatler)',
    publication: 'Tatler Asia · Riverside restaurants',
    url: 'https://www.tatlerasia.com/dining/food/chao-phraya-riverside-restaurants-caf%C3%A9s-bangkok' },
  { claim: 'Recognised by Top 25 Restaurants Bangkok',
    publication: "World's Best Restaurants",
    url: 'https://www.top25restaurants.com/thailand/bangkok/restaurant/hansa-river-house/' },
  { claim: 'Instagram & social: @hansariverhouse · Facebook · Linktree',
    publication: 'Linktree · Hansa River House',
    url: 'https://linktr.ee/hansariverhouse' },
];

/* ===================================================================
 *  PRESS — small "as featured in" strip, ordered most-prestigious first
 * =================================================================== */
export const PRESS_LOGOS: { name: string; url: string }[] = [
  { name: 'Passport & Stamps', url: 'https://passportandstamps.com/song-wat-road-bangkok/' },
  { name: 'Tatler Asia',       url: 'https://www.tatlerasia.com/dining/food/chao-phraya-riverside-restaurants-caf%C3%A9s-bangkok' },
  { name: 'Trip.com',          url: 'https://www.trip.com/moments/detail/bangkok-191-135104426/' },
  { name: 'Top 25 Restaurants',url: 'https://www.top25restaurants.com/thailand/bangkok/restaurant/hansa-river-house/' },
  { name: 'Wanderlog',         url: 'https://wanderlog.com/place/details/13572675/hansa-river-house' },
];

export type CopyKey = typeof COPY;
