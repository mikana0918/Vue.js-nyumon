<template>
  <div id="app">
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" :checked="task.done" @change="toggleTaskStatus(task)">
          {{task.name}}
      </li>
    </ul>

    <form @submit.prevent="addTask">
        <input type="text" v-model="newTaskName" placeholder="新しいタスク">
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      //入力中の新しいタスク名を一時的に保存する
      newTaskName: '',
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks //ストアを読む
    }
  },
  methods: {
    //タスクを追加する
    addTask () {
      //'addTask'ミューテーションをコミット
      this.$store.commit('addTask', {
        name: this.newTaskName
      })
      this.newTaskName = ''
    },
    //タスクの完了状態を更新する
    toggleTaskStatus (task) {
      //'toggleTaskStatus'ミューテーションをコミット
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    }
  }
}
</script>

<style></style>

