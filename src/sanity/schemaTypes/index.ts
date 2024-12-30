import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import header from './header'
import blogs from './blogs'
import about from './about'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,header,blogs,about],
}
