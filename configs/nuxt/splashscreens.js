const splashscreens = [
  {
    f: '1136x640',
    w: 320,
    h: 568,
    r: 2,
    o: 'landscape'
  },
  {
    f: '2436x1125',
    w: 375,
    h: 812,
    r: 3,
    o: 'landscape'
  },
  {
    f: '1792x828',
    w: 414,
    h: 896,
    r: 2,
    o: 'landscape'
  },
  {
    f: '828x1792',
    w: 414,
    h: 896,
    r: 2,
    o: 'portrait'
  },
  {
    f: '1334x750',
    w: 375,
    h: 667,
    r: 2,
    o: 'landscape'
  },
  {
    f: '1242x2688',
    w: 414,
    h: 896,
    r: 3,
    o: 'portrait'
  },
  {
    f: '2208x1242',
    w: 414,
    h: 736,
    r: 3,
    o: 'landscape'
  },
  {
    f: '1125x2436',
    w: 375,
    h: 812,
    r: 3,
    o: 'portrait'
  },
  {
    f: '1242x2208',
    w: 414,
    h: 736,
    r: 3,
    o: 'portrait'
  },
  {
    f: '2732x2048',
    w: 1024,
    h: 1366,
    r: 2,
    o: 'landscape'
  },
  {
    f: '2688x1242',
    w: 414,
    h: 896,
    r: 3,
    o: 'landscape'
  },
  {
    f: '2224x1668',
    w: 834,
    h: 1112,
    r: 2,
    o: 'landscape'
  },
  {
    f: '750x1334',
    w: 375,
    h: 667,
    r: 2,
    o: 'portrait'
  },
  {
    f: '2048x2732',
    w: 1024,
    h: 1366,
    r: 2,
    o: 'portrait'
  },
  {
    f: '2388x1668',
    w: 834,
    h: 1194,
    r: 2,
    o: 'landscape'
  },
  {
    f: '1668x2224',
    w: 834,
    h: 1112,
    r: 2,
    o: 'portrait'
  },
  {
    f: '640x1136',
    w: 320,
    h: 568,
    r: 2,
    o: 'portrait'
  },
  {
    f: '1668x2388',
    w: 834,
    h: 1194,
    r: 2,
    o: 'portrait'
  },
  {
    f: '2048x1536',
    w: 768,
    h: 1024,
    r: 2,
    o: 'landscape'
  },
  {
    f: '1536x2048',
    w: 768,
    h: 1024,
    r: 2,
    o: 'portrait'
  }
];

export default splashscreens.map(({ f, w, h, r, o }) => ({
  rel: 'apple-touch-startup-image',
  media: `screen and (device-width: ${w}px) and (device-height: ${h}px) and (-webkit-device-pixel-ratio: ${r}) and (orientation: ${o})`,
  href: `/splashscreens/${f}.png`
}));
