import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { Todo, CheckList } from '@/types/todo'

@Module({ namespaced: true, dynamic: true, store, name: 'app' })
export class AppStoreModule extends VuexModule {
  todos: Array<Todo> = []
  checklists: Array<CheckList> = []
  count = 0

  @Mutation
  todoAdd (name: string) {
    let todo: Todo = {
      id: '111',
      name,
      createTime: 11,
      updateTime: 22,
      note: null
    }
    this.todos.push(todo)
  }

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
