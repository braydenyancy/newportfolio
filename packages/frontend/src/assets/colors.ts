// From colors.co
// https://coolors.co/palette/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226

export const colors = {
    // darkcyan: '#001219',
    teal: '#005F73',
    cyan: '#0A9396',
    seafoam: '#94D2BD',
    cream: '#E9D8A6',
    gold: '#EE9B00',
    orange: '#CA6702',
    burnt: '#BB3E03',
    rust: '#AE2012',
    maroon: '#9B2226',
};

const randomColor = () => {
    const colorValues = Object.values(colors);
    const randomIndex = Math.floor(Math.random() * colorValues.length);
    return colorValues[randomIndex];
}

export { randomColor };