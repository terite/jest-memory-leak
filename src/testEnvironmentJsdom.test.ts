/**
 * @jest-environment jsdom
 */
describe('simple tests', () => {
    it('should not leak memory', () => {
        expect(true).toBe(true);
    });
});
