function past(h, m, s) {
    if (h < 0 || h > 23) {
        return 'Invalid hours';
    };
    if (m < 0 || m > 59) {
        return 'Invalid minutes';
    };
    if (s < 0 || s > 59) {
        return 'Invalid seconds';
    };
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}

test('count miliseconds', () => {
    expect(past(0, 1, 1)).toBe(61000);
    expect(past(1, 1, 1)).toBe(3661000);
    expect(past(0, 0, 0)).toBe(0);
    expect(past(1, 0, 1)).toBe(3601000);
    expect(past(1, 0, 0)).toBe(3600000);
    expect(past(-2, 0, 0)).toBe('Invalid hours');
    expect(past(0, 0, 70)).toBe('Invalid seconds');
    expect(past(25, 10, 12)).toBe('Invalid hours');
    expect(past(12, 60, 45)).toBe('Invalid minutes');
});

