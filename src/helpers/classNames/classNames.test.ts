import { classNames } from './classNames';

describe('className', () => {
    test('with first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass someClass_1 someClass_2';
        expect(classNames('someClass', {}, ['someClass_1', 'someClass_2'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass someClass_1 someClass_2 someClass_3 someClass_4';
        expect(classNames(
            'someClass',
            { someClass_3: true, someClass_4: true },
            ['someClass_1', 'someClass_2'],
        )).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass someClass_1 someClass_2 someClass_3';
        expect(classNames(
            'someClass',
            { someClass_3: true, someClass_4: false },
            ['someClass_1', 'someClass_2'],
        )).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass someClass_1 someClass_2 someClass_3';
        expect(classNames(
            'someClass',
            { someClass_3: true, someClass_4: undefined },
            ['someClass_1', 'someClass_2'],
        )).toBe(expected);
    });
});
