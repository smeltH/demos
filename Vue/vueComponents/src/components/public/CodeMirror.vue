<template>
    <div class="markdown-editor">
        <section class="editor__title">
            <input type="text" :placeholder="title" name="title" class="content-title">
        </section>
        <section class="editor__content">
            <div class="editor__codemirror">
                <div class="editor__codemirror--top">
                    <!-- bidirectional data binding（双向数据绑定） -->
                    <!--<codemirror v-model="code" :options="cmOptions"></codemirror>-->

                    <!-- or to manually control the datasynchronization（或者手动控制数据流，需要像这样手动监听changed事件） -->
                    <codemirror v-model="code"
                                ref="myCm"
                                :value="code"
                                :options="cmOptions"
                                @ready="onCmReady"
                                @focus="onCmFocus"
                                @input="onCmCodeChange">
                    </codemirror>
                </div>
                <div class="editor__codemirror--bottom">

                </div>
            </div>
            <div class="editor__showdown">
                <div class="editor__showdown--bottom">
                    <VueShowdown :markdown="code"
                                 flavor="original"
                                 :options="{ emoji: true }">

                    </VueShowdown>
                </div>
                <div class="editor__showdown--bottom">

                </div>
            </div>
        </section>
    </div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror'
import { VueShowdown } from 'vue-showdown'

// require styles
import 'codemirror/lib/codemirror.css'
// language js
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/eclipse.css'
// more codemirror resources
// import 'codemirror/some-resource...'
export default {
    name: 'CodeMirror',
    data () {
        return {
            // 内容代码
            code: 'const a = 5;',
            cmOptions: {
                // codemirror options
                tabSize: 4,
                mode: 'text/javascript',
                theme: 'base16-dark',
                lineNumbers: true,
                line: true
                // more codemirror options, 更多 codemirror 的高级配置...
            },
            // 文章的标题holder
            titlePlaceholder: '请输入标题',
            // 文章的标题
            title: ''
        }
    },
    methods: {
        onCmReady (cm) {
            // eslint-disable-next-line no-console
            console.log('the editor is readied!', cm)
        },
        onCmFocus (cm) {
            // eslint-disable-next-line no-console
            console.log('the editor is focus!', cm)
        },
        onCmCodeChange (newCode) {
            // eslint-disable-next-line no-console
            console.log('this is new code', newCode)
            this.code = newCode
        }
    },
    computed: {
        codemirror () {
            return this.$refs.myCm.codemirror
        }
    },
    mounted () {
        // eslint-disable-next-line no-console
        console.log('this is current codemirror object', this.codemirror)
        // you can use this.codemirror to do something...
    },
    components: {
        codemirror,
        VueShowdown
    }
}
</script>

<style scoped lang="stylus">
.markdown-editor
    width 100%
    height 100%
    overflow hidden
    .editor__title
        width 100%
        height 50px
        .content-title
            width 100%
            height 40px
            padding 5px 0
            color: #cbcbcb
            font-weight bolder
            text-indent 30px
            border none
            outline none
            &::-webkit-input-placeholder
                color #cbcbcb
                font-weight bolder
                font-size 20px
    .editor__content
        display flex
        justify-content space-between
        width 100%
        height 100%
        border-top 1px solid #eee
        .editor__codemirror
            width 50%
            height 100%
            border-right 1px solid #eee
            box-sizing border-box
        .editor__showdown
            width 50%
            height 100%
</style>
