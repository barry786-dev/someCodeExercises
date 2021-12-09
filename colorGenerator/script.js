function colorGenertor() {
  return `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.random().toFixed(2)})`;
  
  function HexacolorGenertor() {
  function maketwodigit() {
    const hexacolorsnumbers = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let twodigits = `${hexacolorsnumbers[Math.floor(Math.random() * 16)]}${
      hexacolorsnumbers[Math.floor(Math.random() * 16)]
    }`;
    return twodigits;
  }
  return `#${maketwodigit()}${maketwodigit()}${maketwodigit()}${maketwodigit()}`;
}
  
