/**
 * HANSA RIVER HOUSE — single source of truth for all copy + asset URLs.
 *
 * Hansa (हंस / ห่าน / hamsa) is Sanskrit for swan — a graceful, light-filled
 * riverfront house on Song Wat, opened 2025, built for occasions and
 * celebrations and watching long-tail boats glide by.
 *
 * Verified sources (extended pass June 2026):
 *   - passportandstamps Song Wat 2026 guide (verbatim press line)
 *   - Trip.com Moments — Chia Nicholas/Nick @nickeatsg (Nov 2025, 7 frames),
 *     Sunny Day Station (Feb 2026, 11 frames), Myym.Tcn (Jun 2025, 6 frames)
 *   - Top 25 Restaurants — official "Celebrate the moments that matter" line
 *   - Tatler Asia — riverside cafés feature, two Hansa Instagram captures
 *   - Hansa's own Instagram bio, Facebook, Linktree, menu pages
 *
 * Visual evidence that reshaped the brand voice on this pass:
 *   - The RAILING is coral / terracotta, not pink (every terrace photo)
 *   - The wordmark is a geometric-cap HANSA (gentle spurs, slight crossbar
 *     curve to the H), set in copper-gold on cream menu pages and ivory
 *     against raw textured-concrete interior walls
 *   - Chinese-Songwat heritage cues — red paper fans (striped + solid),
 *     hanging red lantern chains, dried red berries with brass leaves —
 *     are recurring throughout the venue
 *   - Interior is light + airy, exposed weathered timber posts + beams,
 *     sea-green metal mezzanine grids, woven rattan seating, brick lower
 *     walls — heritage-industrial, not white-glove editorial
 *   - The view across the Chao Phraya is the Chinese pavilion + multi-tier
 *     pagoda — this is the iconic Hansa-from-Hansa view
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
  pressLineHouse: {
    en: 'Celebrate the moments that matter — where every meal is a taste of Thailand and every view tells a story.',
    th: 'ฉลองช่วงเวลาที่สำคัญ — ทุกจานคือรสไทย ทุกวิวคือเรื่องเล่า',
  },

  phoneDisplay: '+66 96 128 2450',
  phoneTel: '+66961282450',
  email: 'hansariverhouse@gmail.com',
  instagramHandle: '@hansariverhouse',
  instagramUrl: 'https://www.instagram.com/hansariverhouse/',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61563258160136',
  linktreeUrl: 'https://linktr.ee/hansariverhouse',
  tiktokUrl: 'https://www.tiktok.com/@hansariver',
  tiktokHandle: '@hansariver',

  addressLine1: '1616 Song Wat Road',
  addressLine2: 'Samphanthawong, Bangkok 10100',
  addressOneLine: '1616 Song Wat Road, Samphanthawong, Bangkok 10100',
  addressLong: '1616 Soi Klang Wat Pathum Khongkha · Song Wat · Samphanthawong · Bangkok 10100',
  lat: 13.7396,
  lng: 100.5072,
  googleMapsUrl: 'https://maps.google.com/?q=Hansa+River+House+1616+Song+Wat+Road+Bangkok',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=1616%20Song%20Wat%20Road%2C%20Samphanthawong%2C%20Bangkok%2010100&t=&z=17&ie=UTF8&iwloc=&output=embed',
  transit: 'MRT Sanam Chai · MRT Wat Mangkon · short tuk-tuk from Sathorn or Silom · river ferry to Ratchawong',

  hoursOpen: 'Mon · Tue · Thu – Sun  ·  11:30 AM – 8 PM',
  hoursClosed: 'Closed Wednesday',
  opened: 2025,
  seats: 60,

  pricing: {
    perDish: '฿101 – ฿250',
    minSpend: '฿400 per person',
  },

  photoCredit: 'Photographs · Trip.com Moments · Chia Nicholas (Nov 2025), Sunny Day Station (Feb 2026), Myym.Tcn (Jun 2025)',
  photoCreditUrl: 'https://us.trip.com/moments/detail/bangkok-191-137501114/',

  domain: 'hansa-river-house.vercel.app',
};

/* ===================================================================
 *  PHOTOS — verified images via wsrv.nl WebP proxy. Audit June 2026
 *  expanded from 7 frames (1 Trip.com author) to 21 verified frames
 *  across three Trip.com Moments authors + 1 Top 25 hero + 2 Tatler-
 *  hosted Instagram captures. Diversifies away from a single Nov 2025
 *  sunset look.
 * =================================================================== */
const wsrv = (upstream: string, w = 1600) =>
  `https://wsrv.nl/?url=${encodeURIComponent(upstream)}&w=${w}&output=webp&q=82`;

const T = (slug: string) =>
  `https://ak-d.tripcdn.com/images/${slug}_W_1280_0_R5_Q80.jpg`;

export const PHOTOS = {
  // Original — Chia Nicholas (Nick @nickeatsg) · Nov 2025
  sunset:      wsrv(T('1mi5d224x969jv4c64539'), 1600),
  sunsetWide:  wsrv(T('1mi5d224x969jv4c64539'), 2200),
  tableSpread: wsrv(T('1mi1z224x969j0r0e6045'), 1800),
  sunsetAlt:   wsrv(T('1mi6e224x969jcjyhF530'), 1600),
  padThai:     wsrv(T('1mi2j224x969ifbib8E5C'), 1100),
  tomYum:      wsrv(T('1mi6b224x969jh5dm9877'), 1100),
  padSamMeun:  wsrv(T('1mi05224x969jh5dlA871'), 1100),
  morningGlory:wsrv(T('1mi5h224x969jf9af78F9'), 1100),

  // Sunny Day Station · Feb 2026
  interior:        wsrv(T('1mi0z224x98d23ke8A573'), 1800),
  brandWall:       wsrv(T('1mi5x224x98d30qx2D78A'), 1600),
  coconutIce:      wsrv(T('1mi3s224x98d1uhtnE1FA'), 1100),
  icedTea:         wsrv(T('1mi22224x98d33noe6A15'), 1100),
  heritageGlass:   wsrv(T('1mi0b224x98d1yvah0054'), 1100),
  groundFloor:     wsrv(T('1mi03224x98d23ke9EC97'), 1600),
  wordmarkWall:    wsrv(T('1mi0f224x98d24nqv97C7'), 1600),
  menuCover:       wsrv(T('1mi2i224x98d33wtnB784'), 1100),
  upperFloor:      wsrv(T('1mi69224x98d2g0g5361A'), 1600),
  pagodaView:      wsrv(T('1mi1s224x98d2ryhc4F5E'), 1800),
  terraceDaytime:  wsrv(T('1mi2j224x98d1yvai3E0F'), 1600),

  // Myym.Tcn · Jun 2025
  menuBeverages:   wsrv(T('1mi36224x92kt0vig0B18'), 1400),
  architecture:    wsrv(T('1mi74224x92ktupgg6564'), 1600),
  terraceDay:      wsrv(T('1mi4g224x92ku7e7lDE6C'), 1600),
  terraceGolden:   wsrv(T('1mi4h224x92ktax0j7CA1'), 1800),
  nightBoat:       wsrv(T('1mi4w224x92ktyxi18AB1'), 1800),
  sunsetDrink:     wsrv(T('1mi71224x92kt0vif978A'), 2000),
  sunsetDrinkWide: wsrv(T('1mi71224x92kt0vif978A'), 2400),

  // Top 25 Restaurants (Aug 2025) — official building hero
  building:        wsrv('https://www.top25restaurants.com/media/img/2025/08/worlds-best-restaurants-thailand-bangkok-hansa-river-house-at-top-25-restaurants.jpg', 1800),

  // Tatler Asia (Mar 2025) — Hansa's own Instagram captures
  tatlerTerrace:   wsrv('https://cdn.tatlerasia.com/tatlerasia/i/2025/03/21030631-snapinstapp-482137966-17930818071007662-270017274895868549-n-1080_cover_814x811.jpg', 1100),
  crabRice:        wsrv('https://cdn.tatlerasia.com/tatlerasia/i/2025/03/21030631-snapinstapp-481865542-17930818089007662-3567420434162396188-n-1080_cover_1080x814.jpg', 1100),
};

/** Gallery — 17 frames in editorial chapter order: THE HOUSE / THE TABLE / THE RIVER. */
export const GALLERY = [
  { key: 'building',       chapter: 'house', src: PHOTOS.building,       alt: 'The two-storey wooden Hansa River House seen from across the Chao Phraya — coral terrace extending into the river, framed by Songwat heritage buildings (Top 25 Restaurants)' },
  { key: 'interior',       chapter: 'house', src: PHOTOS.interior,       alt: 'Hansa interior — illuminated HANSA wordmark on the wall, woven rattan chairs, customers dining with the Chao Phraya through full-height open windows' },
  { key: 'wordmarkWall',   chapter: 'house', src: PHOTOS.wordmarkWall,   alt: 'The signature HANSA wordmark on textured raw concrete, flanked by red Chinese paper fans and dried red berries' },
  { key: 'architecture',   chapter: 'house', src: PHOTOS.architecture,   alt: 'Hansa architecture — weathered timber posts and beams, sea-green metal mezzanine grids, double-height void to the river-facing windows' },
  { key: 'upperFloor',     chapter: 'house', src: PHOTOS.upperFloor,     alt: 'The upper floor — a chain of red paper fans strung across the two-storey atrium, wooden refectory tables, river-facing windows' },
  { key: 'groundFloor',    chapter: 'house', src: PHOTOS.groundFloor,    alt: 'Ground floor in daylight — exposed beam ceiling, hanging red paper fan chain, wooden tables, rattan chairs, plants in pots' },
  { key: 'tableSpread',    chapter: 'table', src: PHOTOS.tableSpread,    alt: 'A full Thai table on the Hansa terrace at golden hour: pad Thai, tom yum, pad sam meun, morning glory, coconut, with the Chao Phraya behind' },
  { key: 'crabRice',       chapter: 'table', src: PHOTOS.crabRice,       alt: 'Soft, fluffy egg rice topped with sweet crab meat at Hansa — served with fresh chilli fish sauce, cucumber and tomato' },
  { key: 'padThai',        chapter: 'table', src: PHOTOS.padThai,        alt: 'Pad Thai with a smoky grilled river prawn at Hansa River House' },
  { key: 'tomYum',         chapter: 'table', src: PHOTOS.tomYum,         alt: 'Tom Yum Kung with five shrimp in a deep cobalt ceramic bowl at Hansa River House' },
  { key: 'menuCover',      chapter: 'table', src: PHOTOS.menuCover,      alt: "Hansa's menu cover — the wordmark in copper serif over a watercolour painting of the view from the terrace through the wooden windows" },
  { key: 'heritageGlass',  chapter: 'table', src: PHOTOS.heritageGlass,  alt: 'A heritage pressed-glass tumbler with iced chrysanthemum tea — vintage drinkware in service at Hansa' },
  { key: 'sunsetDrink',    chapter: 'river', src: PHOTOS.sunsetDrink,    alt: 'A passion fruit drink with the HANSA cup-sticker on the coral terrace railing at sunset, the Chao Phraya glowing behind' },
  { key: 'terraceGolden',  chapter: 'river', src: PHOTOS.terraceGolden,  alt: 'The Hansa terrace at late afternoon — women on rattan stools at the coral railing, condo towers across the river, the sky going apricot' },
  { key: 'pagodaView',     chapter: 'river', src: PHOTOS.pagodaView,     alt: 'The view from Hansa across the Chao Phraya — a Chinese pavilion and a multi-tier pagoda set against the Bangkok skyline' },
  { key: 'nightBoat',      chapter: 'river', src: PHOTOS.nightBoat,      alt: 'Sunset from Hansa — a long-tail tour boat passing under the wooden eaves, the river going pink and apricot' },
  { key: 'sunsetAlt',      chapter: 'river', src: PHOTOS.sunsetAlt,      alt: 'Sunset from the terrace, guest seated facing the Chao Phraya' },
];

/* NAV */
export const NAV_ITEMS: { href: string; label: { en: string; th: string } }[] = [
  { href: '#story',     label: { en: 'The House',  th: 'เรือนแห่งนี้' } },
  { href: '#floors',    label: { en: 'Two Floors', th: 'สองชั้น' } },
  { href: '#menu',      label: { en: 'The Table',  th: 'สำรับ' } },
  { href: '#gallery',   label: { en: 'Gallery',    th: 'ภาพ' } },
  { href: '#across',    label: { en: 'The View',   th: 'มุมมอง' } },
  { href: '#occasions', label: { en: 'Occasions',  th: 'โอกาสพิเศษ' } },
  { href: '#visit',     label: { en: 'Visit',      th: 'การเดินทาง' } },
];

/* COPY */
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
      en: 'A two-storey wooden house on Song Wat. Coral railing over the Chao Phraya. Tables set for celebrations, sundowners, slow Sundays — and the long-tail boats that drift past, all day, all night.',
      th: 'เรือนไม้สองชั้นบนทรงวาด · ระเบียงสีแสดทอดสู่เจ้าพระยา · โต๊ะที่จัดไว้สำหรับวันสำคัญ ค่ำเย็น และวันอาทิตย์ที่ไม่เร่งรีบ — กับเรือหางยาวที่ผ่านมาตลอดวันและคืน',
    },
    ctaReserve: { en: 'Reserve a table',     th: 'จองโต๊ะ' },
    ctaOccasion:{ en: 'Enquire · occasions', th: 'สอบถามงานพิเศษ' },
    scrollHint: { en: 'Drift down',          th: 'เลื่อนลงเบา ๆ' },
  },

  mark: {
    eyebrow: { en: 'Hansa · the swan, the house, the river', th: 'หงส์ · เรือน · แม่น้ำ' },
    line:    { en: 'A name lifted from the Sanskrit hamsa — the swan, the symbol of grace gliding on water — set down at 1616 Song Wat in a restored two-storey house with a coral railing over the Chao Phraya.', th: 'ชื่อ "หงส์" จากสันสกฤต hamsa — สัญลักษณ์ของความสง่าที่เคลื่อนไหวบนผืนน้ำ — ลงหลักที่ 1616 ทรงวาด ในเรือนไม้สองชั้นกับระเบียงสีแสดเหนือเจ้าพระยา' },
    seal:    { en: 'EST · 1616 · MMXXV',  th: 'EST · 1616 · MMXXV' },
  },

  story: {
    eyebrow: { en: 'The house', th: 'เรือนแห่งนี้' },
    title: {
      en: 'Two storeys, one river, room for an occasion.',
      th: 'สองชั้น · แม่น้ำหนึ่งสาย · พื้นที่สำหรับโอกาสพิเศษ',
    },
    body: {
      en: 'Hansa took its name from the Sanskrit hamsa — the swan, the symbol of grace gliding on water. The house opened in 2025 as a serene addition to Song Wat: a preserved two-storey wooden building with weathered teak posts, raw concrete plaster, sea-green steel grids, and a coral-painted railing that extends over the Chao Phraya. Classic Thai cooking sent out by a homestyle kitchen. Visitors come for the long-tail boats on a quiet afternoon and for the candles lit at dusk; couples come for birthday dinners and for the rare Bangkok evening that asks for something held back, refined, slow.',
      th: 'หงส์ (Hansa) ได้ชื่อมาจากภาษาสันสกฤต — สัญลักษณ์ของความสง่างามที่เคลื่อนไหวบนผืนน้ำ เรือนหลังนี้เปิดในปี 2025 บนทรงวาด เป็นเรือนไม้สองชั้นที่ถูกอนุรักษ์ไว้ ด้วยเสาไม้สักเก่า ผนังปูนเปลือยสีเทา ตะแกรงเหล็กสีเขียวทะเล ระเบียงสีแสดที่ทอดยาวสู่เจ้าพระยา ครัวที่ทำอาหารไทยตำรับบ้าน บางคนแวะมาในบ่ายเงียบ ๆ ดูเรือหางยาว บางคนจองโต๊ะวันเกิด สำหรับค่ำคืนที่ขอเวลาช้า ๆ และละเอียดอ่อน',
    },
    pullQuote: {
      en: 'A serene 2025 addition where you can watch long-tail boats while sipping a fresh coconut.',
      th: 'ที่ใหม่ปี 2025 อันแสนสงบ ที่คุณนั่งจิบน้ำมะพร้าวเย็น ๆ ดูเรือหางยาววิ่งผ่าน',
    },
    pullAttribution: 'Passport & Stamps · Song Wat 2026 Guide',
  },

  floors: {
    eyebrow: { en: 'Two storeys, three rooms', th: 'สองชั้น สามห้อง' },
    title: { en: 'Ground · Upper · River.', th: 'ชั้นล่าง · ชั้นบน · ริมน้ำ' },
    intro: { en: 'The house is laid out for the moment you want. Walk in to a cool wooden ground room. Climb the staircase to the timber-vaulted upper floor with its hanging chain of red paper fans. Step out to the coral railing — your legs over the Chao Phraya, a long-tail boat in the middle distance.', th: 'เรือนถูกจัดสำหรับช่วงเวลาที่คุณอยากได้ ชั้นล่างเย็นใต้เพดานไม้ บันไดขึ้นสู่ชั้นบนใต้โครงสร้างไม้กับโคมพับสีแดง ก้าวออกสู่ระเบียงสีแสด — ขาห้อยเหนือเจ้าพระยา เรือหางยาววิ่งผ่านลิบ ๆ' },
    panels: [
      { tag: 'I',  label: { en: 'Ground · the kitchen', th: 'ชั้นล่าง · ครัว' },
        text: { en: 'A cool, lived-in room — weathered teak posts, brick lower walls, woven rattan chairs, the kitchen pass at the back, the river just past the open windows.', th: 'ห้องเย็น ๆ ที่ใช้งานจริง — เสาไม้สักเก่า ผนังก่ออิฐครึ่งล่าง เก้าอี้หวาย ครัวอยู่ลึกในสุด แม่น้ำผ่านหน้าต่างเปิดโล่ง' } },
      { tag: 'II', label: { en: 'Upper · the timber', th: 'ชั้นบน · ใต้หลังคา' },
        text: { en: 'A timber-vaulted upper room with a chain of red paper fans strung the length of the ceiling — quieter, longer tables, the kind of floor you book for a party.', th: 'ใต้หลังคาไม้โล่ง โคมพับสีแดงแขวนเป็นสายตลอดเพดาน — เงียบกว่า โต๊ะยาวกว่า ชั้นที่จองสำหรับงานเลี้ยง' } },
      { tag: 'III',label: { en: 'River · the coral railing', th: 'ริมน้ำ · ระเบียงสีแสด' },
        text: { en: 'The terrace, the railing, your legs over the water. Long-tail boats, the Chinese pavilion across the river, the multi-tier pagoda behind it. The brand promise, in one frame.', th: 'ระเบียงและราวสีแสด ขาห้อยเหนือสายน้ำ เรือหางยาว ศาลาจีนฝั่งตรงข้าม เจดีย์หลายชั้นด้านหลัง — คำมั่นของแบรนด์ในเฟรมเดียว' } },
    ],
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
        photo: PHOTOS.padThai,
        treatment: 'recipe',
        name: { en: 'Pad Thai · grilled river prawn',  th: 'ผัดไทย กุ้งแม่น้ำเผา' },
        desc: {
          en: 'Stir-fried rice noodles, tamarind, tofu, bean sprouts — topped with a whole smoky river prawn.',
          th: 'เส้นจันท์ผัดมะขาม เต้าหู้ ถั่วงอก กุ้งแม่น้ำเผาทั้งตัว',
        },
        recipe: { en: ['Rice noodle · Chanthaburi','Tamarind · Sukhothai','Tofu · fresh-pressed','River prawn · Ayutthaya','Bean sprout · morning market'], th: ['เส้นจันท์','มะขามสุโขทัย','เต้าหู้สด','กุ้งแม่น้ำอยุธยา','ถั่วงอก'] },
      },
      {
        key: 'tom-yum-kung',
        photo: PHOTOS.tomYum,
        treatment: 'poem',
        name: { en: 'Tom Yum Kung · five shrimp',       th: 'ต้มยำกุ้ง 5 ตัว' },
        desc: {
          en: 'Lemongrass, galangal, kaffir lime, fresh chilli — the kind of broth you order twice.',
          th: 'ตะไคร้ ข่า ใบมะกรูด พริก น้ำซุปที่สั่งซ้ำเสมอ',
        },
        poem: { en: ['lemongrass · galangal','kaffir lime · fresh chilli','five shrimp · two orders.'], th: ['ตะไคร้ · ข่า','ใบมะกรูด · พริก','กุ้งห้าตัว · สั่งสอง'] },
      },
      {
        key: 'pad-sam-meun',
        photo: PHOTOS.padSamMeun,
        treatment: 'ledger',
        name: { en: 'Pad Sam Meun · stinky beans & prawns', th: 'ผัดสามเหม็น สะตอ-กุ้ง-กะปิ' },
        desc: {
          en: 'Petai beans, garlic chives, shrimp paste, river prawns — bold, umami, unforgettable.',
          th: 'สะตอ ใบกระเทียม กะปิ กุ้งแม่น้ำ · รสจัด อูมามิ จดจำได้',
        },
        ledger: { en: [['petai bean','100g'],['shrimp paste','1 tsp'],['garlic chive','1 bunch'],['river prawn','3 pcs']], th: [['สะตอ','100ก'],['กะปิ','1ชต'],['ใบกระเทียม','1 มัด'],['กุ้งแม่น้ำ','3 ตัว']] },
      },
    ],
    larger: [
      { name: { en: 'Crispy morning glory · spicy salad', th: 'ยำผักบุ้งทอดกรอบ' },
        desc: { en: 'Deep-fried morning glory, shrimp, herbs, lime.', th: 'ผักบุ้งทอดกรอบ กุ้ง สมุนไพร มะนาว' } },
      { name: { en: 'Crab omelette · over jasmine rice', th: 'ข้าวไข่เจียวปู' },
        desc: { en: 'Sweet crab, silky egg, fluffy rice. Every table orders it.', th: 'ปูก้อนหวาน ไข่นุ่ม ข้าวร้อน · ทุกโต๊ะสั่ง' } },
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
      { name: { en: 'Fresh coconut · whole in the husk', th: 'น้ำมะพร้าวสด · ทั้งลูก' },
        desc: { en: 'Cold, whole, served in the husk.', th: 'เย็น ลูกใหญ่ เสิร์ฟทั้งลูก' } },
      { name: { en: 'Iced butterfly pea · lime',  th: 'น้ำอัญชันมะนาว' },
        desc: { en: 'Indigo to violet — the colour shift the river is named for. Served in vintage pressed-glass.', th: 'น้ำเงินเปลี่ยนเป็นม่วงเมื่อบีบมะนาว · เสิร์ฟในแก้วโบราณ' } },
      { name: { en: 'Iced chrysanthemum · americano', th: 'อเมริกาโน่ดอกเก๊กฮวย' },
        desc: { en: 'A signature off the bar menu — Chinese chrysanthemum cold-brewed under a long pull of espresso.', th: 'ดอกเก๊กฮวยสกัดเย็น ราดด้วยช็อตเอสเปรสโซยาว' } },
      { name: { en: 'Iced coconut · matcha',  th: 'มัทฉะมะพร้าวเย็น' },
        desc: { en: 'Ceremonial matcha whisked into a fresh coconut.', th: 'มัทฉะตีในน้ำมะพร้าวสด' } },
    ],
    footnote: {
      en: 'Menu seen across press 2025 – 2026 — Tatler · Top 25 Restaurants · Passport & Stamps · Trip.com. Full menu at the table.',
      th: 'เมนูจากการรีวิวสื่อ 2025 – 2026 — Tatler · Top 25 · Passport & Stamps · Trip.com · เมนูเต็มที่ร้าน',
    },
  },

  across: {
    eyebrow: { en: 'Across the water', th: 'ฝั่งตรงข้าม' },
    title: { en: 'The view that gives Hansa its name.', th: 'มุมมองที่ตั้งชื่อให้หงส์' },
    body: { en: 'Look up from the table. The Chinese pavilion sits a few hundred metres across the river. The multi-tier pagoda rises behind it. Long-tail boats glide between them. The swan would feel at home.', th: 'มองขึ้นจากโต๊ะ — ศาลาจีนอยู่ฝั่งตรงข้ามไม่กี่ร้อยเมตร เจดีย์หลายชั้นสูงตระหง่านอยู่ด้านหลัง เรือหางยาววิ่งระหว่างทั้งสอง — หงส์น่าจะรู้สึกเป็นบ้าน' },
    markers: [
      { en: '0.4 km · the Chinese pavilion', th: '0.4 กม. · ศาลาจีน' },
      { en: '0.6 km · the multi-tier pagoda', th: '0.6 กม. · เจดีย์หลายชั้น' },
      { en: '1.1 km · Wat Mangkon Kamalawat', th: '1.1 กม. · วัดมังกรกมลาวาส' },
      { en: '3.0 km · Wat Arun', th: '3.0 กม. · วัดอรุณ' },
    ],
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
      en: 'The Chao Phraya runs slow past Song Wat in the late afternoon, faster after dark when the cargo barges turn for the gulf. Long-tail boats glide between Wat Arun and Wat Mangkon all day. The coral terrace is the best seat for it.',
      th: 'แม่น้ำเจ้าพระยาไหลเงียบ ๆ ผ่านทรงวาดในยามบ่าย · เร็วขึ้นยามค่ำเมื่อเรือบรรทุกเลี้ยวลงอ่าว · เรือหางยาวพาดผ่านระหว่างวัดอรุณกับวัดมังกร · ระเบียงสีแสดคือที่นั่งที่ดีที่สุด',
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
    ledger: {
      title: { en: "Tonight's table", th: 'โต๊ะของค่ำคืนนี้' },
      headers: { en: ['Date', 'Guests', 'Floor', 'Hour'], th: ['วันที่', 'จำนวน', 'ชั้น', 'เวลา'] },
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
    parking:   { en: 'No on-site parking · ride-hailing or river ferry recommended · paid hourly parking at Wat Pathum Khongkha behind the building', th: 'ไม่มีที่จอด · แนะนำ Grab หรือเรือด่วน · จอดรายชั่วโมงที่วัดปทุมคงคา หลังเรือน' },
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

/* SOURCES */
export const SOURCES = [
  { claim: 'Address: 1616 Song Wat Road, Samphanthawong, Bangkok 10100',
    publication: 'Trip.com Bangkok · Hansa River House',
    url: 'https://www.trip.com/moments/detail/bangkok-191-135104426/' },
  { claim: 'Phone +66 96 128 2450 · Email hansariverhouse@gmail.com',
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
  { claim: '"Celebrate the moments that matter — every meal a taste of Thailand, every view a story"',
    publication: 'Top 25 Restaurants · Hansa River House',
    url: 'https://www.top25restaurants.com/thailand/bangkok/restaurant/hansa-river-house/' },
  { claim: 'Two-storey wooden house, terrace over the Chao Phraya',
    publication: 'Trip.com Bangkok · Song Wat Road feature',
    url: 'https://us.trip.com/moments/detail/bangkok-191-133341231/' },
  { claim: 'Signature: Pad Thai with grilled river prawn',
    publication: 'Restaurantguru · Hansa River House',
    url: 'https://restaurantguru.com/Hansa-river-house-Bangkok' },
  { claim: 'Signature: Tom Yum Kung with five shrimp',
    publication: 'Restaurantguru · Hansa River House',
    url: 'https://restaurantguru.com/Hansa-river-house-Bangkok' },
  { claim: 'Soft-fluffy egg rice with crab — venue Instagram capture',
    publication: 'Tatler Asia · 12 trendy Chao Phraya-view restaurants',
    url: 'https://www.tatlerasia.com/dining/food/chao-phraya-riverside-restaurants-caf%C3%A9s-bangkok' },
  { claim: 'Pad Sam Meun · three-stinky stir-fry with petai beans',
    publication: 'Wanderlog · Hansa River House',
    url: 'https://wanderlog.com/place/details/13572675/hansa-river-house' },
  { claim: 'Pricing: ฿101 – ฿250 per dish, ฿400 minimum per person',
    publication: 'OpenRice Thailand · Hansa River House',
    url: 'https://th.openrice.com/en/bangkok/r-hansa-river-house-chakkrawat-thai-food-general-r1613612' },
  { claim: '60 seats · Thu-Tue 11:30 AM – 8 PM',
    publication: 'Top 25 Restaurants · Hansa River House',
    url: 'https://www.top25restaurants.com/thailand/bangkok/restaurant/hansa-river-house/' },
  { claim: 'Featured among the 12 trendy Chao Phraya-view restaurants & cafés',
    publication: 'Tatler Asia · Riverside restaurants',
    url: 'https://www.tatlerasia.com/dining/food/chao-phraya-riverside-restaurants-caf%C3%A9s-bangkok' },
  { claim: 'Trip.com Bangkok feature (Issabele23, Aug 2025)',
    publication: 'Trip.com Bangkok · Hansa River House',
    url: 'https://www.trip.com/moments/detail/bangkok-191-135104426/' },
  { claim: 'Trip.com Riverside Retreat feature (Chia Nicholas, Nov 2025): seven verified Hansa photographs',
    publication: 'Trip.com US · Hansa River House',
    url: 'https://us.trip.com/moments/detail/bangkok-191-137501114/' },
  { claim: 'Trip.com Riverside Cafe feature (Sunny Day Station, Feb 2026): eleven photographs of the wordmark wall, interior, two-floor structure, menu cover, drinks and pagoda view',
    publication: 'Trip.com Bangkok · Hansa River House Riverside Cafe',
    url: 'https://us.trip.com/moments/detail/bangkok-191-141925268/' },
  { claim: 'Trip.com Hansa Song Wat Road feature (Myym.Tcn, Jun 2025): six photographs of the architecture, coral terrace railing and golden-hour drink with the HANSA cup sticker',
    publication: 'Trip.com Bangkok · Hansa River House',
    url: 'https://us.trip.com/moments/detail/bangkok-191-133341231/' },
  { claim: 'Linktree — owner-supplied profile, joined January 2025',
    publication: 'Linktree · Hansa River House',
    url: 'https://linktr.ee/hansariverhouse' },
  { claim: 'Instagram bio confirms full address 1616 Soi Klang Wat Pathum Khongkha + Line ID',
    publication: 'Instagram · @hansariverhouse',
    url: 'https://www.instagram.com/hansariverhouse/' },
];

/* PRESS */
export const PRESS_LOGOS: { name: string; url: string }[] = [
  { name: 'Passport & Stamps',   url: 'https://passportandstamps.com/song-wat-road-bangkok/' },
  { name: 'Tatler Asia',         url: 'https://www.tatlerasia.com/dining/food/chao-phraya-riverside-restaurants-caf%C3%A9s-bangkok' },
  { name: 'Top 25 Restaurants',  url: 'https://www.top25restaurants.com/thailand/bangkok/restaurant/hansa-river-house/' },
  { name: 'Trip.com Moments',    url: 'https://www.trip.com/moments/detail/bangkok-191-135104426/' },
  { name: 'Wanderlog',           url: 'https://wanderlog.com/place/details/13572675/hansa-river-house' },
];

export type CopyKey = typeof COPY;
