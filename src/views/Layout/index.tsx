import { defineComponent } from "vue";
import { RouterView } from 'vue-router'

export default defineComponent({
    setup(props, ctx) {
        const render = ()=>{
            return (
            <>
            <div>
              <RouterView/>
            </div>
            </>
            )
        }
        return render
    },
})