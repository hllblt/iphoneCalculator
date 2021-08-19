// let zero = document.getElementById("zero");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");
// let ac = document.getElementById("ac");
// let plusminus = document.getElementById("plusminus");
// let back = document.getElementById("back");
// let divide = document.getElementById("divide");
// let multiply = document.getElementById("multiply");
// let minus = document.getElementById("minus");
// let plus = document.getElementById("plus");
// let equal = document.getElementById("equal");
// let point = document.getElementById("point");
let oldCalc = document.getElementById("oldcalc");
let calc = document.getElementById("calc");

let total = 0;
let temp = "0";
let replacer = "";
//topla çıkarma çarpma bölme işlemlerinde kullanılacak değişkenler
let plus = 0;
let minus = 0;
let divide = 1;
let multiply = 1;
let process;
let before;
let after;

const reply_click = (click) => {
  if (click === "one") {
    temp += "1";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "two") {
    temp += "2";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "three") {
    temp += "3";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "four") {
    temp += "4";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "five") {
    temp += "5";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "six") {
    temp += "6";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "seven") {
    temp += "7";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "eight") {
    temp += "8";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "nine") {
    temp += "9";
    replacer = temp;
    for (let i = 0; i < replacer.length; i++) {
      if (temp[0] === "0") {
        temp = temp.replace("0", "");
      } else {
        continue;
      }
    }
    calc.innerHTML = temp;
  } else if (click === "zero") {
    temp += "0";
    calc.innerHTML = temp;
  } else if (click === "ac") {
    temp = "0";
    calc.innerHTML = temp;
  } else if (click === "plusminus") {
    if (temp !== "0") {
      if (temp[0] !== "-") {
        temp = "-" + temp;
        calc.innerHTML = temp;
      } else {
        temp = temp.slice(1);
        calc.innerHTML = temp;
      }
    }
  } else if (click === "back") {
    temp = temp.slice(0, -1);
    if (temp === "") {
      temp = "0";
    }
    calc.innerHTML = temp;
  } else if (click === "plus") {
    process = "plus";
  } else if (click === "minus") {
    process = "minus";
  } else if (click === "multiply") {
    process = "multiply";
  } else if (click === "divide") {
    process = "divide";
  } else if (click === "equal") {
    process = "equal";
  } else if (click === "point") {
    //birşeyler yapılacak
  }

  // ekrana yazdırılan sayıların boyutlarıyla ilgili kısım
  if (temp.length > 9) {
    calc.style.fontSize = "25px";
  } else {
    calc.style.fontSize = "50px";
  }
};
