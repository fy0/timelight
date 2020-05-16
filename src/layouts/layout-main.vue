<template>
  <el-container class="main">
    <!-- <lf-header /> -->

    <el-container>
      <el-aside
        width="200px"
        :router="true">
        <div style="padding: 1rem;">TimeLight 宙光</div>

        <el-menu>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="1-1">我的一天</el-menu-item>
            <el-menu-item index="1-2">重要</el-menu-item>
            <el-menu-item index="1-3">日程</el-menu-item>
          </el-menu-item-group>
          <div style="border-bottom: 1px solid #e6e6e6"></div>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="2-1">清单1</el-menu-item>
            <el-menu-item index="2-2">清单2</el-menu-item>
            <el-menu-item index="2-3">清单3</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="add">新建清单</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <slot />
      </el-main>
    </el-container>
    <!-- <el-footer></el-footer> -->
  </el-container>
</template>

<script>
import config from '@/config'

export default {
  data () {
    return {
      config
    }
  },
  components: {
  },
  async created () {
    // let ret = await this.$api.users.get()
    // console.log(ret)
  }
}
</script>

<style lang="scss">
.el-dialog {
  text-align: left;
}

.el-menu-item-group__title {
  background: #f4f4f4;
}

</style>

<style lang="scss" scoped>
.el-container.main {
  height: 100%;
}

.el-aside {
  text-align: left;
  background: #f4f4f4;
  border-right: solid 1px #e6e6e6;
}

.el-menu-item {
  background: #f4f4f4;
}

.el-menu {
  border-right: 0;
}
</style>
