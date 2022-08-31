import isValidCard from '../isValidCard';

test('should validate card', () => {
  expect(isValidCard('4916503920759477')).toBeTruthy();
  expect(isValidCard('5296671740583265')).toBeTruthy();
  expect(isValidCard('3537010632807793')).toBeTruthy();
  expect(isValidCard('6387341345303612')).toBeTruthy();
  expect(isValidCard('4913288533693460')).toBeTruthy();
  expect(isValidCard('372898370024520')).toBeTruthy();

  expect(isValidCard(6387341345303)).not.toBeTruthy();
  expect(isValidCard('')).not.toBeTruthy();
  expect(isValidCard(null)).not.toBeTruthy();
});
