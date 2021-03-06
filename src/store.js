import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//ストアの定義
const store = new Vuex.Store({
    state: {
        //タスクの初期ステートto
        tasks: [
            {
                id: 1,
                name: '牛乳を買う',
                done: false
            },
            {
                id: 2,
                name: 'Vue.jsの本を買う',
                done: true
            }
        ],

        //次に追加するタスクのID
        //実際のアプリではサーバーで生成したり、UUIDを使ったりするがここでは決め打ちkimeuti
        nextTaskId: 3,
    },
    mutations: {
        //タスクを追加する
        addTask (state, {name}) {
            state.tasks.push({
                id: state.nextTaskId,
                name,
                done: false
            })
            //次に追加されるタスクに付与するIDを更新するsuru
            state.nextTaskId++
        },
        //タスクの完了状態を更新する
        toggleTaskStatus (state, {id}) {
            const filtered = state.tasks.filter(task => {
                return task.id === id
            })

            filtered.forEach(task => {
                task.done = !task.done
            })
        }
    }

})

//ストアをエクスポート
export default store

