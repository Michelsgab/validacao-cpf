const isValidCpf = (value) => {
  let cleanValue = removeSpecialCharacter(value);

  let invalidValues = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  if (cleanValue?.length != 11 || invalidValues?.includes(cleanValue)) {
    return messageException();
  }

  let valueWithoutLastNumbers = cleanValue?.slice(0, -2);
  const firstDigit = handleDigit(valueWithoutLastNumbers, 10);

  let valueLastNumber = valueWithoutLastNumbers + firstDigit;
  const secondDigit = handleDigit(valueLastNumber, 11);

  let finalNumber = valueLastNumber + secondDigit;

  if (finalNumber != cleanValue) {
    return messageException();
  }

  console.log("CPF válido.");
};

const handleDigit = (value, product) => {
  let arrValue = Array.from(value);
  let totalValue = 0;

  for (let i = 0; i < value?.length; i++) {
    totalValue += arrValue[i] * product--;
  }

  let validateTotalValue = 11 - (totalValue % 11);

  return validateTotalValue > 9 ? 0 : validateTotalValue;
};

const removeSpecialCharacter = (value) => {
  return value?.replace(/\D+/g, "");
};

const messageException = () => {
  console.log("CPF inválido.");
};

isValidCpf("398.309.068-09");
