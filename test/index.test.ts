import { geradorSexo } from '../source'
import { SEXO } from '../source/types/sexo.enum'

test('random sexo', () => {
  const random = geradorSexo

  let current: SEXO
  let previous: SEXO | undefined
  let i = 100

  while (i--) {
    current = random()
    expect(current).not.toBe(previous)
    previous = current
  }
})
