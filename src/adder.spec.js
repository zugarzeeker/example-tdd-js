import { adder } from './adder'
import assert from 'power-assert'

describe('Adder', () => {
  it('should add two number', () => {
    assert(adder(2, 3) === 5)
  })
})
