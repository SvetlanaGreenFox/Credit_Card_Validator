import isValidCard from '../isValidCard';
import correctCards from '../__fixtures__/correctCards';
import incorrectCards from '../__fixtures__/incorrectСards';

test('should validate card', () => {
  for (const card of correctCards) {
    const { value } = card;
    for (const num of value) {
      expect(isValidCard(num)).toBeTruthy();
    }
  }

  for (const card of incorrectCards) {
    expect(isValidCard(card)).not.toBeTruthy();
  }
});
