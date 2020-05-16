<template>
  <layout-main>
    <h2>无标题清单</h2>
    <div>
      <input class="input-task-add" type="text" />
    </div>
  </layout-main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LayoutMain from '@/layouts/layout-main.vue'

@Component({
  components: {
    LayoutMain
  }
})
export default class HomePage extends Vue {
  loading = false
}
</script>

<style lang="scss" scoped>
.input-task-add {
  padding: .5rem .7rem;
  border-radius: 5px;
  border: none;
  background: #827b7b;
  outline: none;
  color: #fff;
  font-size: 1.2rem;
}
</style>
