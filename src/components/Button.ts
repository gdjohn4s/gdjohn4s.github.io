import { h, computed, defineComponent, type PropType, type Slots } from 'vue'

enum ButtonVariant {
    Primary = 'bg-[#202020] text-white hover:bg-[#373737] border border-gray-600',
    Secondary = 'bg-white text-black border border-slate-700',
    Danger = 'bg-red-400 text-white border border-red-700'
}

const defaultStyle: String = 'rounded-lg p-2 transition-all ease-in-out duration-75'
export const Button = defineComponent({
    props: {
        variant: {
            type: String as PropType<keyof typeof ButtonVariant>,
            default: 'Primary'
        },
        callback: {
            type: Function,
            default: () => {
                console.log(
                    'Clicked! Call the callback prop in this component to set a custom function! :)'
                )
            }
        }
    },
    setup(props, { slots }: { slots: Slots }) {
        const classVariant = computed(() => ButtonVariant[props.variant])

        const render = () => {
            return h(
                'button',
                { class: [classVariant.value, defaultStyle], onClick: () => props.callback() },
                h('span', { class: 'text-sm p-2 font-semibold' }, slots.default?.() || 'Set value')
            )
        }

        return render
    }
})
