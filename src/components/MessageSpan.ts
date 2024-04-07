import { SvgSpinnersBlocksWave } from '@/assets/icons'
import { h, defineComponent, type Slots } from 'vue'

export const MessageSpan = defineComponent({
  setup({ slots }: { slots: Slots }) {
    const render = () => {
      return h(
        'div',
        { class: 'flex flex-row gap-2' },
        h(
          'span',
          { class: 'text-sm p-2 font-semibold' },
          (slots.default && slots.default()) || 'Set value'
        )
      )
    }

    return render
  }
})
