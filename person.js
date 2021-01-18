class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// erreur de syntaxe : pas pour try/catch

const example = new Person('Michel', 'Durand');

function getLogin(person) {
  if (!person) {
    throw new Error('Person is empty or null');
  } else if (typeof person !== 'object') {
    throw new Error('Person is not an object');
  }
  if (!person.firstName) {
    throw new Error('First name is empty or null');
  } else if (typeof person.firstName !== 'string') {
    throw new Error('First name is not a string');
  }
  if (!person.lastName) {
    throw new Error('Last name is empty or null');
  } else if (typeof person.lastName !== 'string') {
    throw new Error('Last name is not a string');
  }
  return `${person.firstName.toLowerCase()}${person.lastName.toUpperCase()}`;
}
console.log('start');

try {
  console.log(getLogin(example));

  return 'OK';
} catch (error) {
  console.error(error.message);
  // envoyer un email
  // enregistrer l'erreur dans un fichier de log sur le serveur
} finally {
  console.log('end');
}
