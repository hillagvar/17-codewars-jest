function getDrinkByProfession(profession) {
    const professionLowerCase = profession.toLowerCase();
    switch (professionLowerCase) {
        case 'jabroni':
            drink = 'Patron Tequila';
            break;
        case 'school counselor':
            drink = 'Anything with Alcohol';
            break;
        case 'programmer':
            drink = 'Hipster Craft Beer';
            break;
        case 'bike gang member':
            drink = 'Moonshine';
            break;
        case 'politician':
            drink = 'Your tax dollars';
            break;
        case 'rapper':
            drink = 'Cristal';
            break;

        default:
            drink = 'Beer';
            break;
    }
    return drink;
}


test('Profession equals drink name', () => {
    expect(getDrinkByProfession('Jabroni')).toBe('Patron Tequila');
    expect(getDrinkByProfession('School Counselor')).toBe('Anything with Alcohol');
    expect(getDrinkByProfession('Programmer')).toBe('Hipster Craft Beer');
    expect(getDrinkByProfession('Anything')).toBe('Beer');
    expect(getDrinkByProfession('Dancer')).toBe('Beer');
    expect(getDrinkByProfession('PROGRAMMER')).toBe('Hipster Craft Beer');
    expect(getDrinkByProfession('poLItiCian')).toBe('Your tax dollars');
});