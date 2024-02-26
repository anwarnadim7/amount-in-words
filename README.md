# inr-amount-in-words

The `amountInWords` function is a JavaScript function that converts a given numerical amount into words representing the amount in Indian currency format (rupees and paise).

```markdown
## Installation

You can install `inr-amount-in-words` via npm. Simply run:

```bash
npm install inr-amount-in-words
```

Then, you can use it in your project as follows:

```javascript
import { amountInWords } from "inr-amount-in-words";

const amount = 1533.25;
console.log(amountInWords(amount)); // Output: "one thousand five hundred thirty three rupees and twenty five paise"
```
## Parameters

- `amount`: The numerical amount to be converted into words.

## Return Value

- If the provided `amount` is not a number or is NaN, the function returns `"Invalid input"`.
- If the `amount` is less than 0 or if the decimal part (paise) is less than 0, the function returns `"Amount cannot be negative"`.
- If both the integer part (rupees) and the decimal part (paise) are 0, the function returns `"zero rupees"`.
- Otherwise, the function returns a string representing the `amount` in words, following the Indian currency format.


