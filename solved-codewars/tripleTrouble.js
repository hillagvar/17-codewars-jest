function tripleTrouble(one, two, three) {
    let string = '';
    for (let i = 0; i < one.length; i++) {
        string += one[i];
        string += two[i];
        string += three[i];
    }
    return string;
}

test('triple', () => {
    expect(tripleTrouble("this", "test", "lock")).toBe("ttlheoiscstk");
    expect(tripleTrouble("aa", "bb", "cc")).toBe("abcabc");
    expect(tripleTrouble("Bm", "aa", "tn")).toBe("Batman");
    expect(tripleTrouble("LLh", "euo", "xtr")).toBe("LexLuthor");
});
