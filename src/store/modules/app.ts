import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

@Module({ namespaced: true, dynamic: true, store, name: 'app' })
export class AppStoreModule extends VuexModule {
  checklists = []
  count = 0

  @Mutation
  increment (delta: number) {
    this.count += delta
  }

  @Mutation
  decrement (delta: number) {
    this.count -= delta
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  incr () {
    return 5
  }

  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr () {
    return 5
  }
}

export default getModule(AppStoreModule)
