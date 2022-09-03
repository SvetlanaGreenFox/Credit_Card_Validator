import isPaymentSystem from '../isPaymentSystem';
import cards from '../__fixtures__/correctCards';

test('checking the payment system', () => {
  for (const card of cards) {
    const { key, value } = card;
    for (const num of value) {
      expect(isPaymentSystem(num)).toBe(key);
    }
  }
});
