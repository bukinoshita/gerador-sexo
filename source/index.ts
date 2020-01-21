import uniqueRandomArray from 'unique-random-array'

import { SEXO_LISTA } from './utils/constants'
import { SEXO } from './types/sexo.enum'

export const geradorSexo: () => SEXO = uniqueRandomArray(SEXO_LISTA)
