function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled);
}

test('probability of blue', () => {
    expect(guessBlue(5, 5, 2, 3)).toBe(0.6);
    expect(guessBlue(5, 7, 4, 3)).toBe(0.2);
    expect(guessBlue(12, 18, 4, 6)).toBe(0.4);
});