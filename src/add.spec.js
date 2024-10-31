import {it,expect} from 'vitest'
import {add} from './add.js'

it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
})