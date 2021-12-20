import R from 'ramda';

const avg = R.converge(R.divide, [R.sum, R.length])

const avg3Scores = R.pipe(
    R.prop('quizScores'),
    R.sum,
    R.divide(R.__, 3)
);

const curriedRound = R.curry(Math.round)

const RoundTo2 = R.pipe(
    R.multiply(100),
    curriedRound,
    R.divide(R.__, 100)
)

const classAvgScores = R.pipe(
    R.map(avg3Scores),
    avg,
    RoundTo2
)


const students = [
    { name: 'Nix Dorgu', quizScores: [90, 88, 100] },
    { name: 'Bruno Mars', quizScores: [27, 44, 5] },
    { name: 'Tyler Blu Gunderson', quizScores: [80, 45, 21] },
    { name: 'Tulio Monteiro', quizScores: [100, 99] }, // missed one quiz
    { name: 'Linda Gunderson', quizScores: [70, 50, 88] },
]


console.log(classAvgScores(students))