/* eslint linebreak-style: ["error", "windows"] */

const isCard = (setValue) => {
  const firstNumbers = setValue.substring(0, 2);

  // eslint-disable-next-line default-case
  switch (firstNumbers[0]) {
    case '4':
      return 'visa';

    case '2':
      return 'mir';
  }

  switch (firstNumbers) {
    case '60':
      return 'discover';

    case '30':
      return 'diners_Club';

    case '35':
      return 'jcb';

    case '37':
      return 'amex';

    case '34':
      return 'amex';

    default:
      return 'Карта не зарегистрирована в системе';
  }
};

export default isCard;
