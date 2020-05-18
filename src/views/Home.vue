<template>
  <layout-main>
    <h2>无标题清单</h2>
    <div class="task-add-bar">
      <input class="input-task-add" type="text" v-model="taskText"/>
      <span class="btn-box" v-if="taskText !== ''">
        <i class="el-icon-edit" style="color: white;" @click="clickTaskAdd"></i>
      </span>
    </div>
  </layout-main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LayoutMain from '@/layouts/layout-main.vue'
import { getModule } from 'vuex-module-decorators'
import task from '@/store/modules/app'

@Component({
  components: {
    LayoutMain
  }
})
export default class HomePage extends Vue {
  loading = false
  taskText = ''

  clickTaskAdd () {
    this.taskText = ''
    console.log(1111)
    // const task = getModule(AppStoreModule, this.$store)
    task.increment(1)
  }
}
</script>

<style lang="scss" scoped>
.task-add-bar {
  max-width: 15rem;
  position: relative;
  display: flex;
}

.btn-box {
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;

  > i {
    padding: 0 .3rem;
  }
}

.input-task-add {
  padding: .5rem .7rem;
  border-radius: 5px;
  border: none;
  background: #827b7b;
  outline: none;
  color: #fff;
  font-size: 1.2rem;
  opacity: .7;
  width: 100%;
  height: 100%;
}
</style>
