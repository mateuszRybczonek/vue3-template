<template>
  <Popover
      open="true"
      class="relative bg-white"
  >
    <div class="flex justify-between items-center px-4 py-2 sm:px-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
          />
        </a>
      </div>

      <div class="flex divide-x">
        <PopoverGroup
            as="nav"
            class="px-8 py-4 hidden md:flex space-x-10"
        >
          <a
              href="/"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              :class="{ 'border-b-2 border-yellow-500': $route.name === 'analyse' }"
          >
            Analyse
          </a>
        </PopoverGroup>

        <PopoverGroup
            as="nav"
            class="px-8 py-4 hidden md:flex space-x-10"
        >
          <a
              href="/fleet"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              :class="{ 'border-b-2 border-yellow-500': $route.name === 'fleet' }"

          >
            Fleet
          </a>
          <a
              href="/connect"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              :class="{ 'border-b-2 border-yellow-500': $route.name === 'connect' }"
          >
            Connect
          </a>

          <Popover
              v-slot="{ open }"
              class="relative"
          >
            <PopoverButton
                :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']"
            >
              <span>Configure</span>
              <ChevronDownIcon
                  :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                  aria-hidden="true"
              />
            </PopoverButton>

            <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden divide-y">
                  <div
                      v-for="(optionsSection, index) in configureOptions"
                      :key="index"
                      class="relative grid gap-6 bg-white px-2 py-3 sm:gap-8 sm:p-4"
                  >
                    <div>
                      <a
                          v-for="option in optionsSection"
                          :key="option.name"
                          :href="option.href"
                          class="-m-3 p-3 block rounded-md hover:bg-gray-50"
                      >
                        <p class="text-base font-medium text-gray-900">
                          {{ option.name }}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <a
            href="#"
            class="px-8 py-4 text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Alerts
        </a>
      </div>

      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Popover
            v-slot="{ open }"
            class="relative"
        >
          <PopoverButton
              :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']"
          >
            <img
                class="inline-block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
          </PopoverButton>

          <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden divide-y">
                <div
                    v-for="(optionsSection, index) in userSettings"
                    :key="index"
                    class="relative grid gap-6 bg-white px-2 py-3 sm:gap-8 sm:p-4"
                >
                  <div>
                    <a
                        v-for="option in optionsSection"
                        :key="option.name"
                        :href="option.href"
                        class="-m-3 p-3 block rounded-md hover:bg-gray-50"
                    >
                      <p class="text-base font-medium text-gray-900">
                        {{ option.name }}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
    </div>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const configureOptions = [
  [
    {
      name: 'Vessel rules',
      href: '/vessel-rules'
    },
    {
      name: 'SSAS',
      href: '/ssas'
    }
  ],
  [
    {
      name: 'Routes',
      href: '/routes'
    },
    {
      name: 'Voyages',
      href: '/voyages'
    },
    {
      name: 'Geo zones',
      href: '/geo-zones'
    }
  ]
]

const userSettings = [
  [
    {
      name: 'User settings',
      href: '/user-settings'
    },
    {
      name: 'Organisation settings',
      href: '/organisation-settings'
    }
  ],
  [
    {
      name: 'Support',
      href: '/support'
    }
  ],
  [
    {
      name: 'Logout',
      href: '/'
    }
  ]
]

export default {
  name: 'Navigation',

  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon
  },

  setup() {
    return {
      configureOptions,
      userSettings
    }
  }
}
</script>
