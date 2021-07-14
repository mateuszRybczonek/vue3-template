<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="bg-white shadow z-50"
  >
    <div class="px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
        </div>
        <div class="flex px-2 lg:px-0 divide-x">
          <div class="hidden lg:flex lg:space-x-8">
            <NavigationItem
              :item="{ label: 'Analyse', destination: '/'}"
              :is-active="currentRouteName === 'analyse'"
            />
          </div>

          <div class="hidden lg:ml-6 lg:flex lg:space-x-12">
            <NavigationItem
                class="ml-6"
                :item="{ label: 'Fleet', destination: '/fleet'}"
                :is-active="currentRouteName === 'fleet'"
            />

            <NavigationItem
                :item="{ label: 'Connect', destination: '/connect'}"
                :is-active="currentRouteName === 'connect'"
            />

            <div class="hidden lg:ml-4 lg:flex lg:items-center">
              <Menu
                  as="div"
                  class="mr-6 relative flex-shrink-0 z-50"
              >
                <div>
                  <MenuButton class="text-gray-500 text-base group bg-white rounded-md inline-flex items-center hover:text-gray-900 focus:outline-none">
                    <span>Configure</span>
                    <ChevronDownIcon
                      class="text-gray-500 w-5 h-5 mt-px"
                    />
                  </MenuButton>
                </div>
                <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div
                        v-for="(options, index) in configureOptions"
                        :key="index"
                        class="divide-y"
                    >
                      <MenuItem
                          v-for="option in options"
                          :key="option.name"
                          v-slot="{ active }">
                        <a
                          :href="option.href"
                          :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                        >
                          {{ option.name }}
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>

          <div class="hidden lg:flex lg:space-x-8">
            <NavigationItem
                class="ml-6"
                :item="{ label: 'Alerts', destination: '/alerts'}"
                :is-active="currentRouteName === 'alerts'"
            />
          </div>
        </div>

        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <div class="flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label
                  for="search"
                  class="sr-only"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                  />
                </div>
                <input
                    id="search"
                    name="search"
                    class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                />
              </div>
            </div>
          </div>

          <Menu
            as="div"
            class="ml-4 relative flex-shrink-0 z-50"
          >
            <div>
              <MenuButton class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>

        <!-- Mobile view -->
        <div class="flex items-center lg:hidden">
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <MenuIcon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
            />
            <XIcon
                v-else
                class="block h-6 w-6"
                aria-hidden="true"
            />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a
          href="#"
          class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
          Dashboard
        </a>
        <a
          href="#"
          class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
          Team
        </a>
        <a
          href="#"
          class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
          Projects
        </a>
        <a
          href="#"
          class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
          Calendar
        </a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Tom Cook</div>
            <div class="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            Your Profile
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            Settings
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            Sign out
          </a>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { ChevronDownIcon, SearchIcon, XIcon } from '@heroicons/vue/solid'
import { MenuIcon } from '@heroicons/vue/outline'
import NavigationItem from '@components/Navigation/NavigationItem'

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
  components: {
    NavigationItem,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
    MenuIcon,
    SearchIcon,
    XIcon
  },

  setup() {
    const open = ref(false)
    const router = useRouter()

    const currentRouteName = computed(() => {
      return router.currentRoute.value.name
    })

    return {
      open,
      configureOptions,
      currentRouteName,
      userSettings
    }
  }
}
</script>
