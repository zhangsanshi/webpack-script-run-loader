import run1 from './run1';
import { run2 } from './run2';

console.log(require('./common')());

console.log(run1);
console.log(require('./run1'));

console.log(run2);
console.log(require('./run2').run2);