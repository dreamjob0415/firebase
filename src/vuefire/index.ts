export {
  rtdbPlugin,
  bind as rtdbBind,
  unbind as rtdbUnbind,
  useList,
  useObject,
} from './rtdb'
export {
  bind as firestoreBind,
  unbind as firestoreUnbind,
  useCollection,
  useDocument,
} from './firestore'

export type { UseCollectionOptions } from './firestore'

export { firestorePlugin } from './optionsApi'
export type {
  PluginOptions,
  VueFirestoreObject,
  FirestoreOption,
} from './optionsApi'