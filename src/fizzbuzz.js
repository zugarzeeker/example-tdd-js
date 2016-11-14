export const say = (n) => {
  let result = ''
  if (n % 3 == 0) result += 'fizz'
  if (n % 5 == 0) result += 'buzz'
  return result === '' ? n : result
}
