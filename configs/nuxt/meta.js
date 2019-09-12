export default ({ title, description, homepage }) => {
  return [
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    { 'http-equiv': 'ScreenOrientation', content: 'autoRotate:disabled' },
    { name: 'apple-touch-fullscreen', content: 'yes' },
    // Twitter Card
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: `${homepage}/icon.png` },
    { name: 'twitter:image:alt', content: title }
  ];
}
