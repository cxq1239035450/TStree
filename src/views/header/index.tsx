import { defineComponent } from "vue";

export default defineComponent({
    name:'layoutHeader',
    setup(props, ctx) {
        const render = ()=>{
            return (
            <>
              <div>
                
                <slot name="main"></slot>
              </div>
            </>
            )
        }
        return render
    },
})