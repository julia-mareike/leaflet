import {reverseCoords} from '../client/apiClient'
import {ruru, horopito} from './streets'

test('test is testy', () => {
  expect(true).toBeTruthy()
})

test('nested arrays of length 1 can be reversed', () => {
  const actual = reverseCoords(horopito)

  const expected = [
    [
      [-36.8705444333, 174.7528078667],
      [-36.8706045167, 174.75306285],
      [-36.8708986167, 174.7544375833]
    ]
  ]

  expect(actual).toEqual(expected)
})

test('nested arrays of length 2 can be reversed', () => {
  const actual = reverseCoords(ruru)

  const expected = [
    [
      [-36.8670921833, 174.7585096333],
      [-36.8674314167, 174.75874785],
      [-36.8674576167, 174.7590423167]
    ],
    [
      [-36.866171316700004, 174.75781668330004],
      [-36.866263, 174.7579059333],
      [-36.8670921833, 174.7585096333]
    ]
  ]

  expect(actual).toEqual(expected)
})
