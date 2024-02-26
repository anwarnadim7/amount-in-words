export function amountInWords(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "Invalid input";
  }

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function convertLessThanOneThousand(number) {
    let result = "";
    if (number % 100 < 10) {
      result = ones[number % 100];
      number = Math.floor(number / 100);
    } else if (number % 100 < 20) {
      result = teens[number % 10];
      number = Math.floor(number / 100);
    } else {
      result = ones[number % 10];
      number = Math.floor(number / 10);
      result = tens[number % 10] + (result ? " " + result : "");
      number = Math.floor(number / 10);
    }
    if (number === 0) return result;
    return ones[number] + " hundred" + (result ? " " + result : "");
  }

  let result = "";
  let integerPart = Math.floor(amount);
  const decimalPart = Math.round((amount - integerPart) * 100);

  if (integerPart === 0 && decimalPart === 0) {
    return "zero rupees";
  }

  if (integerPart < 0 || decimalPart < 0) {
    return "Amount cannot be negative";
  }

  if (integerPart >= 1000) {
    result +=
      convertLessThanOneThousand(Math.floor(integerPart / 1000)) + " thousand";
    integerPart %= 1000;
    if (integerPart > 0) {
      result += " ";
    }
  }

  if (integerPart > 0) {
    result += convertLessThanOneThousand(integerPart);
  }

  result += " rupees";

  if (decimalPart > 0) {
    result += " and ";
    if (decimalPart < 10) {
      result += ones[decimalPart] + " paise";
    } else {
      result += convertLessThanOneThousand(decimalPart) + " paise";
    }
  }

  return result;
}
