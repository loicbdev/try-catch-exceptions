class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
  }
}

function divide(a, b) {
  if (isNaN(a)) {
    throw new TypeError('a is not a number');
  }
  if (isNaN(b)) {
    throw new TypeError('b is not a number');
  }
  if (b === 0) {
    throw new DivideByZeroError('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(divide(1, 'a'));
} catch (error) {
  if (error instanceof DivideByZeroError) {
    console.error('Merci de ne pas diviser par zéro');
  } else if (error instanceof TypeError) {
    console.error('Les paramètres ne sont pas corrects');
  } else {
    console.error(error.message);
  }
}

console.log('finish');