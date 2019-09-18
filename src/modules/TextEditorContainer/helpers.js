export function convertTextIntoArray(text) {
  return text.split(' ')
    .map((wordWithNoSpace, index) => {

      return {
        id: wordWithNoSpace.toLowerCase().concat(`-${index}`),
        word: {
          value: wordWithNoSpace,
          format: {
            bold: false,
            underline: false,
            italic: false,
            color: 'rgba(0, 0, 0, 0.65)',
          }
        },
      };
    });
  }

  export function extractPunctuation(word) {
    const puntuaction = word.match(/,|\.|!|\?|\(|\)|:|\s/g)

    if (puntuaction) {
      return [puntuaction];
    } else {
      return null;
    }
  }

  export function removePunctuation(word) {
    const wordWithNoPunctuation = word.split(/\W+/);
    if (wordWithNoPunctuation) {
      return [wordWithNoPunctuation]
    }
  }

  export function changeSelectedWordFormat(selectedWord, checked, selectedFormat) {
    return {
      id: selectedWord.id,
      word: {
        value: selectedWord.word.value,
        format: {
          bold: selectedFormat === 'bold' ? checked : selectedWord.word.format.bold,
          underline: selectedFormat === 'underline' ? checked : selectedWord.word.format.underline,
          italic: selectedFormat === 'italic' ? checked : selectedWord.word.format.italic,
          color: selectedFormat === 'color' ? checked : selectedWord.word.format.color,
        }
      },
    }
  }

  export function changeWordFormat(currentText, selectedWord, checked, selectedFormat) {
    return currentText.map(word => {
      if (word.id === selectedWord.id) {
        return changeSelectedWordFormat(selectedWord, checked, selectedFormat);
      }
      return word;
    })
  }

  export function changeSelectedWordValue(selectedWord, synonym) {
    return {
      id: selectedWord.id,
      word: {
        value: synonym.word,
        format: {
          ...selectedWord.word.format
        }
      },
    }
  }

  export function replaceWordWithSynonym(currentText, selectedWord, synonym) {
    return currentText.map(word => {
      if (word.id === selectedWord.id) {
        return changeSelectedWordValue(selectedWord, synonym);
      }
      return word;
    })
  }