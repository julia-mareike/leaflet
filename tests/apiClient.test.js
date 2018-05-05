import {reverseCoords, concatCoords} from '../client/apiClient'
import {ruru, horopito, vectorData} from './streets'

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

test('vector results can be compiled', () => {
  const actual = concatCoords(vectorData)

  const expected = [
    [
      [[174.7585096333, -36.8670921833], [174.75874785, -36.8674314167], [174.7590423167, -36.8674576167]],
      [[174.75781668330004, -36.866171316700004], [174.7579059333, -36.866263], [174.7585096333, -36.8670921833]]
    ],
    [
      [[174.75924545, -36.8667732333], [174.7585096333, -36.8670921833]],
      [[174.76113725, -36.8656960333], [174.7607787568334, -36.86593800472117]],
      [[174.7599972667, -36.86644745], [174.75924545, -36.8667732333]],
      [[174.7607787568334, -36.86593800472117], [174.7600718167, -36.8664151667], [174.7599972667, -36.86644745]]
    ],
    [
      [[174.7612340667, -36.8666494167], [174.76042485, -36.86702206670001]],
      [[174.7593728333, -36.8674875833], [174.7590423167, -36.8674576167]],
      [[174.76042485, -36.86702206670001], [174.7593728333, -36.8674875833]]
    ],
    [
      [[174.7586905167, -36.8659519833], [174.7587825, -36.8661008], [174.75924545, -36.8667732333]]
    ],
    [
      [[174.7571173833, -36.8672852833], [174.75742935, -36.8677294]],
      [[174.7568166667, -36.8668776], [174.7568804833, -36.8669480167], [174.7571173833, -36.8672852833]]
    ]
  ]

  expect(actual).toEqual(expected)
})
