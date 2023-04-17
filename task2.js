const firstInput = document.querySelector('#str-arr1');
const secondInput = document.querySelector('#str-arr2');
const formToSubmit = document.querySelector('form');
const divToEdit = document.querySelector('.to-edit');
const newP = document.createElement('p');

const showOnScreen = (firstValue, secondValue) => {
  const minStr = minWindowSubstring(firstValue, secondValue);
  newP.innerHTML = `El texto a procesar fue el siguiente: <b>${firstValue}</b><br>
  Y el subtexto fue: <b>${secondValue}</b><br>
  Este es el menor subtexto obtenido del texto original: <b>${minStr}</b>`;
  divToEdit.append(newP);
  setTimeout(() => {
    location.reload();
  }, 5000);
}

const validateValue = (str) => {
  if (str == '') {
    return false;
  } else {
    return str;
  }
}

formToSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  formToSubmit.classList.add('hidden');
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  if (!firstValue || !secondValue) {
    return false;
  }
  showOnScreen(firstValue, secondValue);
})


const minWindowSubstring = (str, substr) => {
  let foundSubstrings = [];
  let currentSubstring = [];
  for (let j = 0; j <= str.length; j++) {
    let newSubStr = [...substr];
    let k = j;
    if (newSubStr.includes(str[j])) {
      while (newSubStr.length > 0) {
        if (newSubStr.includes(str[k])) {
          let currentIndex = newSubStr.indexOf(str[k]);
          currentSubstring.push(newSubStr[currentIndex]);
          newSubStr.splice(currentIndex, 1);
        } else {
          if (k > str.length) {
            break;
          } else {
            currentSubstring.push(str[k]);
          }
        }
        k++;
      }
      if (newSubStr.length == 0) {
        foundSubstrings.push(currentSubstring.join(""));
      }
      currentSubstring = [];
    } else {
      continue;
    }
  }
  const shortestSubString = foundSubstrings.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  })
  return shortestSubString;
}

minWindowSubstring('aaffhkksemckelloe', 'fhea');