import {it, expect, describe} from 'vitest'
import formatMoney from './money.js'

describe('formatMoney', () => {
it('formats 1999 cents as $19.99', () => {
  expect(formatMoney(1999)).toBe('$19.99')
})

it('shows two decimals', () => {
  expect(formatMoney(1090)).toBe('$10.90')
})

})