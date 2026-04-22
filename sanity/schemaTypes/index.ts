import { type SchemaTypeDefinition } from 'sanity'

import {startUp} from './startUp'
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType,startUp],
}
