function calculate() {
    var firstGrade = document.getElementById("class1Grade").value;
    var firstHours = parseInt(document.getElementById("class1Hours").value); 
    var secondGrade = document.getElementById("class2Grade").value;
    var secondHours = parseInt(document.getElementById("class2Hours").value);
    var thirdGrade = document.getElementById("class3Grade").value;
    var thirdHours = parseInt(document.getElementById("class3Hours").value);
    var fourthGrade = document.getElementById("class4Grade").value;
    var fourthHours = parseInt(document.getElementById("class4Hours").value);
    var fifthGrade = document.getElementById("class5Grade").value;
    var fifthHours = parseInt(document.getElementById("class5Hours").value);
    var sixthGrade = document.getElementById("class6Grade").value;
    var sixthHours = parseInt(document.getElementById("class6Hours").value);
    var totalCreditHours;
    var totalPoints;
    var result;

    if (firstGrade == 'A' || firstGrade == 'a' || firstGrade == 'A+' || firstGrade == 'a+') {
        firstGrade = 4;
    } else if (firstGrade == 'A-' || firstGrade == 'a-') {
        firstGrade = 3.7;
    } else if (firstGrade == 'B+' || firstGrade == 'b+') {
        firstGrade = 3.3;
    } else if (firstGrade == 'B' || firstGrade == 'b') {
        firstGrade = 3;
    } else if (firstGrade == 'B-' || firstGrade == 'b-') {
        firstGrade = 2.7;
    } else if (firstGrade == 'C+' || firstGrade == 'c+') {
        firstGrade = 2.3;
    } else if (firstGrade == 'C' || firstGrade == 'c') {
        firstGrade = 2;
    } else if (firstGrade == 'C-' || firstGrade == 'c-') {
        firstGrade = 1.7;
    } else if (firstGrade == 'D+' || firstGrade == 'd+') {
        firstGrade = 1.3;
    } else if (firstGrade == 'D' || firstGrade == 'd') {
        firstGrade = 1;
    } else  {
        firstGrade = 0;
    }

    if (secondGrade == 'A' || secondGrade == 'a' || secondGrade == 'A+' || secondGrade == 'a+') {
        secondGrade = 4;
    } else if (secondGrade == 'A-' || secondGrade == 'a-') {
        secondGrade = 3.7;
    } else if (secondGrade == 'B+' || secondGrade == 'b+') {
        secondGrade = 3.3;
    } else if (secondGrade == 'B' || secondGrade == 'b') {
        secondGrade = 3;
    } else if (secondGrade == 'B-' || secondGrade == 'b-') {
        secondGrade = 2.7;
    } else if (secondGrade == 'C+' || secondGrade == 'c+') {
        secondGrade = 2.3;
    } else if (secondGrade == 'C' || secondGrade == 'c') {
        secondGrade = 2;
    } else if (secondGrade == 'C-' || secondGrade == 'c-') {
        secondGrade = 1.7;
    } else if (secondGrade == 'D+' || secondGrade == 'd+') {
        secondGrade = 1.3;
    } else if (secondGrade == 'D' || secondGrade == 'd') {
        secondGrade = 1;
    } else  {
        secondGrade = 0;
    }

    if (thirdGrade == 'A' || thirdGrade == 'a' || thirdGrade == 'A+' || thirdGrade == 'a+') {
        thirdGrade = 4;
    } else if (thirdGrade == 'A-' || thirdGrade == 'a-') {
        thirdGrade = 3.7;
    } else if (thirdGrade == 'B+' || thirdGrade == 'b+') {
        thirdGrade = 3.3;
    } else if (thirdGrade == 'B' || thirdGrade == 'b') {
        thirdGrade = 3;
    } else if (thirdGrade == 'B-' || thirdGrade == 'b-') {
        thirdGrade = 2.7;
    } else if (thirdGrade == 'C+' || thirdGrade == 'c+') {
        thirdGrade = 2.3;
    } else if (thirdGrade == 'C' || thirdGrade == 'c') {
        thirdGrade = 2;
    } else if (thirdGrade == 'C-' || thirdGrade == 'c-') {
        thirdGrade = 1.7;
    } else if (thirdGrade == 'D+' || thirdGrade == 'd+') {
        thirdGrade = 1.3;
    } else if (thirdGrade == 'D' || thirdGrade == 'd') {
        thirdGrade = 1;
    } else  {
        thirdGrade = 0;
    }

    if (fourthGrade == 'A' || fourthGrade == 'a' || fourthGrade == 'A+' || fourthGrade == 'a+') {
        fourthGrade = 4;
    } else if (fourthGrade == 'A-' || fourthGrade == 'a-') {
        fourthGrade = 3.7;
    } else if (fourthGrade == 'B+' || fourthGrade == 'b+') {
        fourthGrade = 3.3;
    } else if (fourthGrade == 'B' || fourthGrade == 'b') {
        fourthGrade = 3;
    } else if (fourthGrade == 'B-' || fourthGrade == 'b-') {
        fourthGrade = 2.7;
    } else if (fourthGrade == 'C+' || fourthGrade == 'c+') {
        fourthGrade = 2.3;
    } else if (fourthGrade == 'C' || fourthGrade == 'c') {
        fourthGrade = 2;
    } else if (fourthGrade == 'C-' || fourthGrade == 'c-') {
        fourthGrade = 1.7;
    } else if (fourthGrade == 'D+' || fourthGrade == 'd+') {
        fourthGrade = 1.3;
    } else if (fourthGrade == 'D' || fourthGrade == 'd') {
        fourthGrade = 1;
    } else  {
        fourthGrade = 0;
    }

    if (fifthGrade == 'A' || fifthGrade == 'a' || fifthGrade == 'A+' || fifthGrade == 'a+') {
        fifthGrade = 4;
    } else if (fifthGrade == 'A-' || fifthGrade == 'a-') {
        fifthGrade = 3.7;
    } else if (fifthGrade == 'B+' || fifthGrade == 'b+') {
        fifthGrade = 3.3;
    } else if (fifthGrade == 'B' || fifthGrade == 'b') {
        fifthGrade = 3;
    } else if (fifthGrade == 'B-' || fifthGrade == 'b-') {
        fifthGrade = 2.7;
    } else if (fifthGrade == 'C+' || fifthGrade == 'c+') {
        fifthGrade = 2.3;
    } else if (fifthGrade == 'C' || fifthGrade == 'c') {
        fifthGrade = 2;
    } else if (fifthGrade == 'C-' || fifthGrade == 'c-') {
        fifthGrade = 1.7;
    } else if (fifthGrade == 'D+' || fifthGrade == 'd+') {
        fifthGrade = 1.3;
    } else if (fifthGrade == 'D' || fifthGrade == 'd') {
        fifthGrade = 1;
    } else  {
        fifthGrade = 0;
    }

    if (sixthGrade == 'A' || sixthGrade == 'a' || sixthGrade == 'A+' || sixthGrade == 'a+') {
        sixthGrade = 4;
    } else if (sixthGrade == 'A-' || sixthGrade == 'a-') {
        sixthGrade = 3.7;
    } else if (sixthGrade == 'B+' || sixthGrade == 'b+') {
        sixthGrade = 3.3;
    } else if (sixthGrade == 'B' || sixthGrade == 'b') {
        sixthGrade = 3;
    } else if (sixthGrade == 'B-' || sixthGrade == 'b-') {
        sixthGrade = 2.7;
    } else if (sixthGrade == 'C+' || sixthGrade == 'c+') {
        sixthGrade = 2.3;
    } else if (sixthGrade == 'C' || sixthGrade == 'c') {
        sixthGrade = 2;
    } else if (sixthGrade == 'C-' || sixthGrade == 'c-') {
        sixthGrade = 1.7;
    } else if (sixthGrade == 'D+' || sixthGrade == 'd+') {
        sixthGrade = 1.3;
    } else if (sixthGrade == 'D' || sixthGrade == 'd') {
        sixthGrade = 1;
    } else  {
        sixthGrade = 0;
    }

    if (isNaN(firstHours)) {
        firstHours = 0;
    }

    if (isNaN(secondHours)) {
        secondHours = 0;
    }

    if (isNaN(thirdHours)) {
        thirdHours = 0;
    }

    if (isNaN(fourthHours)) {
        fourthHours = 0;
    }

    if (isNaN(fifthHours)) {
        fifthHours = 0;
    }

    if (isNaN(sixthHours)) {
        sixthHours = 0;
    }

    totalCreditHours = firstHours + secondHours + thirdHours + fourthHours + fifthHours + sixthHours;
    totalPoints = (firstGrade*firstHours) + (secondGrade*secondHours) + (thirdGrade*thirdHours) + (fourthGrade*fourthHours) + (fifthGrade*fifthHours) + (sixthGrade*sixthHours)
    result = totalPoints / totalCreditHours;
    var finalResult = result.toFixed(2);
    document.getElementById("result").innerHTML = finalResult;
}

function reset() {
    document.getElementById('class1Grade').value = document.getElementById('class1Grade').defaultValue;
    document.getElementById('class1Hours').value = document.getElementById('class1Hours').defaultValue;
    document.getElementById('class2Grade').value = document.getElementById('class2Grade').defaultValue;
    document.getElementById('class2Hours').value = document.getElementById('class2Hours').defaultValue;
    document.getElementById('class3Grade').value = document.getElementById('class3Grade').defaultValue;
    document.getElementById('class3Hours').value = document.getElementById('class3Hours').defaultValue;
    document.getElementById('class4Grade').value = document.getElementById('class4Grade').defaultValue;
    document.getElementById('class4Hours').value = document.getElementById('class4Hours').defaultValue;
    document.getElementById('class5Grade').value = document.getElementById('class5Grade').defaultValue;
    document.getElementById('class5Hours').value = document.getElementById('class5Hours').defaultValue;
    document.getElementById('class6Grade').value = document.getElementById('class6Grade').defaultValue;
    document.getElementById('class6Hours').value = document.getElementById('class6Hours').defaultValue;
}