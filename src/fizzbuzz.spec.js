import assert from 'power-assert'
import { say } from './fizzbuzz'

describe('Fizzbuzz', () => {
  it('should say fizz if number can be divided by 3', () => {
    assert(say(3) === 'fizz')
    assert(say(6) === 'fizz')
  })

  it('should say buzz if number can be divided by 5', () => {
    assert(say(5) === 'buzz')
    assert(say(10) === 'buzz')
  })

  it('should say fizzbuzz if number can be divided by 3 and 5', () => {
    assert(say(15) === 'fizzbuzz')
    assert(say(30) === 'fizzbuzz')
  })

  it('should say number if number can not be divided by 3 and 5', () => {
    assert(say(1) === 1)
    assert(say(2) === 2)
  })
})
