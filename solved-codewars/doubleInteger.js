function double(integer) {
    return integer * 2;
}

test('double integer', () => {
    expect(double(2)).toBe(4);
    expect(double(35)).toBe(70);
    expect(double(-6)).toBe(-12);
});