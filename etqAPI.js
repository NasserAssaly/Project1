
console.log('start js file')
alert(1);

export function test(){
     console.log('iam in onOpen 2')
}
window.onOpen = function(){  console.log('iam in onOpen') };



// function ChangeValue(newValue){
// console.log('iam in with value = ' + newValue);
//     window['IN'].zone.run(
//         function() {
//             window['IN'].compmnentFn(newValue);
//         });
// }