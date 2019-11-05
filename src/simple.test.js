describe('simple tests', () => {
    it('should not leak memory', () => {
        expect(true).toBe(true);
    });

    afterAll(() => {
        global.gc()
    });
});
