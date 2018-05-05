import {reverseCoords} from '../client/apiClient'
import {nikau} from '../client/streets'

test('test is testy', () => {
  expect(true).toBeTruthy()
})

test('nested arrays can be reversed', () => {
  const actual = reverseCoords(nikau)

  const expected = []

  expect(actual).toBe(expected)
})
