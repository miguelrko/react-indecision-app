//test file for exports
console.log('utils file was loaded');

const square = ((x) => x * x);

// export const add = (a, b) => a + b;
const add = (a ,b) => a + b;

//named exports
export { square, add };

//default exports
//los default te permiten llamarlos con el nombre que desees al importarlos
//export { square, add as default};
//export default add;