import R from 'ramda';

const sortNumsASC = R.sort(R.subtract);
const dropHead = R.drop(1);
const dropTail = R.dropLast(1);

const getTotalOutOf = R.pipe(
    sortNumsASC,
    dropHead,
    dropTail,
    R.sum
)

var score = [7.0, 9.0, 8.4, 8.3, 8.6, 7.8, 9.0];
console.log(getTotalOutOf(score));
