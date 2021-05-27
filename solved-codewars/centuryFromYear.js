function century(year) {
    if (year <= 100) {
        return 1;
    };
    if (year % 100 !== 0) {
        return Math.floor(year / 100) + 1;
    };
    return Math.floor(year / 100);
}


test('century from year', () => {
    expect(century(1705)).toBe(18);
    expect(century(1900)).toBe(19);
    expect(century(1601)).toBe(17);
    expect(century(2000)).toBe(20);
    expect(century(89)).toBe(1);
});