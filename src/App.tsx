import { defineComponent } from 'vue'
import MonacoEditor from './components/MonacoEditor'

export default defineComponent({
  name: 'App',
  render: () => <MonacoEditor />
})