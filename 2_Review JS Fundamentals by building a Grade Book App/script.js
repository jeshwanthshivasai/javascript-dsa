function getAverage(scores) {
    let sum = 0;
    //for (const score of scores) //better approach
    for(let i=0; i<scores.length; i++) { //kind stuck !!
      sum = sum + scores[i]; 
    }
    return sum/scores.length;
}

function getGrade(score) { //i got this !!
    if(score === 100) {
      return "A++";
    } else if (score <= 99 && score >= 90) {
      return "A";
    } else if (score <= 89 && score >= 80) {
      return "B";
    } else if (score <= 79 && score >= 70) {
      return "C";
    } else if (score <= 69 && score >= 60) {
      return "D";
    } else if (score <= 59 && score >= 0) {
      return "F";
    }
}
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function studentMsg(totalScores, studentScore) {
    let classAverage = getAverage(totalScores);//stuck here !!
    let studentGrade = getGrade(studentScore);//stuck here !!
  
    if(studentGrade !== "F") { //i got this
        return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You passed the course.";
    } else {
        return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You failed the course.";
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

function hasPassingGrade(score) { //stuck at this point
    let grade = getGrade(score);
    return grade !== "F";
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));