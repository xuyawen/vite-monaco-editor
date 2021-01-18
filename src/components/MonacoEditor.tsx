import { defineComponent } from 'vue'
import * as Monaco from 'monaco-editor'

const CODE = `console.log('hellw Monaco');`;

const defaultOpt = {
  width: "100%",
  height: "100%",
  value: CODE,
  language: "javascript",
  theme: "vs-dark",
};

export default defineComponent({
  name: 'MonacoEditor',
  mounted() {
    const DOM = this.$refs['monaco-editor'] as HTMLElement
    Monaco.editor.create(DOM, defaultOpt)
  },
  setup() {
    return () => {
      return <div ref="monaco-editor" id="monaco-editor"></div>
    }
  }
})