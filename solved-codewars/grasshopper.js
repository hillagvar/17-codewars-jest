function summation(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += num - i;
    }
    return sum;
}

test('summation', () => {
    expect(summation(1)).toBe(1);
    expect(summation(8)).toBe(36);
});
