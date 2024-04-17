<script setup lang="ts">
import { AtSymbolIcon, UserCircleIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'
import { SolarSmileSquareBold, SvgSpinnersBlocksWave } from '@/assets/icons'
import { Button, MessageSpan } from '@/components'
import { ref, type Ref } from 'vue'
import axios from 'axios'

interface Message {
    name: string
    email: string
    message: string
}

const defaultMessage = (): Message => {
    return {
        name: '',
        email: '',
        message: ''
    }
}
const message = ref<Message>(defaultMessage()) as Ref<Message>
const isLoading = ref<boolean>() as Ref<boolean>
const isSuccess = ref<boolean>() as Ref<boolean>
const isFieldEmpty = ref<boolean>() as Ref<boolean>
const headers = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
}

const validateMessage = () => {
    const values = Object.values(message.value)
    isFieldEmpty.value = values.some((value) => value.trim() === '')
}

/**
 * Api definitions
 */
const submitMessage = async () => {
    validateMessage()
    if (isFieldEmpty.value) return

    isLoading.value = true
    await axios
        .post('https://submit-form.com/7sGEJ34Kk', message.value, headers)
        .then((res) => {
            isLoading.value = false
            if (res.status === 201 || res.status === 200) isSuccess.value = true
        })
        .catch((er) => {
            console.error(er)
            isLoading.value = false
        })
}
</script>

<template>
    <main class="h-screen px-10 lg:px-36 overflow-y-auto mb-10">
        <div class="flex flex-col h-full gap-6 lg:gap-8 justify-center items-center my-auto">
            <EnvelopeIcon
                class="animate-in slide-in-from-top-20 duration-500 h-24 w-24 text-black dark:text-white"
            />
            <div
                class="animate-in slide-in-from-bottom-10 duration-500 self-center text-black dark:text-white text-2xl lg:text-4xl"
            >
                <div class="flex flex-row gap-2">
                    <span
                        v-if="!isSuccess"
                        class="dark:text-white text-black text-2xl lg:text-4xl font-semibold"
                    >
                        CONTACT ME
                    </span>
                    <span
                        v-else
                        class="dark:text-white text-black text-2xl lg:text-4xl font-semibold"
                    >
                        MESSAGE SENT
                    </span>
                    <SvgSpinnersBlocksWave
                        v-if="isLoading && !isSuccess"
                        class="animate-spin duration-300 self-center h-7 w-7"
                    />
                    <SolarSmileSquareBold
                        v-else-if="!isLoading && isSuccess"
                        class="self-center h-7 w-7"
                    />
                </div>
            </div>

            <form @submit.prevent="submitMessage" class="max-w-lg">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-row gap-4">
                        <div
                            class="animate-in slide-in-from-left-10 duration-500 flex flex-col gap-2 w-[100%]"
                        >
                            <label
                                for="email-address-icon"
                                class="block text-sm font-medium text-gray-900 dark:text-white"
                                >Your Name</label
                            >
                            <div class="relative shadow-sm rounded-lg">
                                <div
                                    class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                                >
                                    <UserCircleIcon class="h-5 w-5 shrink-0" />
                                </div>
                                <input
                                    type="text"
                                    id="email-address-icon"
                                    v-model="message.name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-800 block w-full ps-10 p-2.5 dark:bg-[#202020] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-gray-800"
                                    placeholder="Your name"
                                />
                            </div>
                        </div>
                        <div
                            class="animate-in slide-in-from-right-10 duration-500 flex flex-col gap-2 w-[100%]"
                        >
                            <label
                                for="email-address-icon"
                                class="block text-sm font-medium text-gray-900 dark:text-white"
                                >Your Email</label
                            >
                            <div class="relative shadow-sm rounded-lg">
                                <div
                                    class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                                >
                                    <AtSymbolIcon class="h-5 w-5 shrink-0" />
                                </div>
                                <input
                                    type="email"
                                    id="email-address-icon"
                                    v-model="message.email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-800 block w-full ps-10 p-2.5 dark:bg-[#202020] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-gray-800"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        class="animate-in slide-in-from-bottom-10 duration-500 relative rounded-lg shadow-sm"
                    >
                        <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Your message</label
                        >
                        <textarea
                            id="message"
                            rows="4"
                            v-model="message.message"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-[#202020] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-gray-800"
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <div
                        class="animate-in slide-in-from-bottom-10 duration-500 relative flex flex-col"
                    >
                        <span v-if="isFieldEmpty" class="italic text-red-500"
                            >Some fields are empty!!</span
                        >
                        <span class="italic text-ellipsis"
                            >The data entered into this form are completely secure, private, and not
                            shared with anyone.</span
                        >
                    </div>
                    <Button class="shadow-sm" type="submit" variant="Primary">Send Message</Button>
                </div>
            </form>
        </div>
    </main>
</template>
