import R from 'ramda';

// const getBits = R.match(/[^.*\\!?\s_-]/gi); // This also work
const getBits = R.match(/[^\W_]/g);


const reversable = R.converge(R.equals, [R.reverse, R.identity]);

const palindrome = R.pipe(
    R.toLower,
    getBits,
    reversable
);

console.log(`Is palindrome: 'abc? Cba '`, palindrome('abc? Cba '));
console.log(`Is palindrome: 'abc? Cb.'`, palindrome('abc? Cb.'));
console.log(`Is palindrome: `, palindrome('A man, a plan, a canal, panama'));
console.log(`Is palindrome: `, palindrome('Code nine, DoC!'));
console.log(`Is palindrome: code niCe, DoC!`, palindrome('Code niCe, DoC!'));
