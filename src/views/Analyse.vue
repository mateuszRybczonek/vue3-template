<template>
  <div class="relative sm:pb-0 mt-12 ml-4 mr-4 lg:ml-20 lg:mr-10">
    <div class="relative pb-5 border-b border-gray-200">
      <div class="md:flex md:items-center md:justify-between">
        <h3 class="text-2xl leading-6 font-medium text-gray-900">
          Analyse
        </h3>
      </div>

      <div class="mt-6">
        <div class="sm:hidden">
          <label
              for="current-filter"
              class="sr-only"
          >
            Select a filter
          </label>
          <select
              id="current-filter"
              name="current-filter"
              class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option
                v-for="filter in filters"
                :key="filter.name"
                :selected="filter.current"
            >
              {{ filter.name }}
            </option>
          </select>
        </div>

        <div class="flex justify-between">
          <div class="hidden sm:block flex">
            <nav class="-mb-px flex space-x-8 cursor-pointer">
          <span
              v-for="filter in filters"
              :key="filter.name"
              :class="[filter.name === activeFilter ? 'border-yellow-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-base']"
              @click="onTabClicked(filter)"
          >
            {{ filter.name }}
          </span>
            </nav>
          </div>

          <button
              type="button"
              class="absolute right-0 bottom-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
          >
            <PlusIcon class="w-4 h-4" />
            <span class="ml-3">View</span>
          </button>
        </div>
      </div>
    </div>

    <!--  Recent Views  -->
    <div class="mt-20">
      <h2 class="text-gray-500 text-base font-medium uppercase tracking-wide">Recent</h2>
      <ul class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
        <li
          v-for="view in recentViews"
          :key="view.name"
          class="h-16 relative col-span-1 flex shadow-sm rounded-md"
        >
          <div :class="[view.backgroundColorClass, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-base font-medium rounded-l-md']">
            {{ view.initials }}
          </div>
          <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div class="flex-1 px-4 py-2 text-base truncate">
              <a
                href="#"
                class="text-gray-900 font-medium hover:text-gray-600"
              >
                {{ view.name }}
              </a>
            </div>
            <Menu
              as="div"
              class="flex-shrink-0 pr-2"
            >
              <MenuButton class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <span class="sr-only">Open options</span>
                <DotsVerticalIcon
                  class="w-5 h-5"
                  aria-hidden="true"
                />
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="z-10 mx-3 origin-top-right absolute -right-40 top-12 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                      >
                        Open
                      </a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                          href="#"
                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                      >
                        Edit
                      </a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                          href="#"
                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                      >
                        Favourite
                      </a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                          href="#"
                          :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                      >
                        Set as homepage
                      </a>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                      >
                        Delete
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </li>
      </ul>
    </div>

    <!-- My Views -->
    <div class="mt-20">
      <h2 class="text-gray-500 text-base font-medium uppercase tracking-wide">My views</h2>
      <div class="flex flex-col mt-4">
        <div class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg border-gray-500 border-px">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th class="hidden px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider md:block" />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="view in views"
                :key="view.id"
                class="bg-white"
              >
                <td class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-base text-gray-900">
                  <div class="flex">
                    <a
                      :href="view.href"
                      class="group inline-flex space-x-2 truncate text-base"
                    >
                      <p class="text-gray-900 truncate group-hover:text-gray-500 font-semibold">
                        {{ view.name }}
                      </p>
                    </a>
                  </div>
                </td>
                <td class="hidden px-6 py-4 whitespace-nowrap text-base text-gray-500 md:block">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-base capitalize bg-gray-100 text-gray-800">
                    {{ view.category }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right whitespace-nowrap text-base text-gray-500">
                  <Menu
                    as="div"
                    class="relative inline-block text-left"
                  >
                    <div>
                      <MenuButton class="rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        <span class="sr-only">Open options</span>
                        <DotsVerticalIcon
                          class="h-5 w-5"
                          aria-hidden="true"
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
                      <MenuItems class="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div class="py-1">
                          <MenuItem v-slot="{ active }">
                            <a
                              href="#"
                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                            >
                              Open
                            </a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a
                              href="#"
                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                            >
                              Edit
                            </a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a
                              href="#"
                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                            >
                              Favourite
                            </a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a
                              href="#"
                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                            >
                              Set as homepage
                            </a>
                          </MenuItem>
                        </div>
                        <div class="py-1">
                          <MenuItem v-slot="{ active }">
                            <a
                              href="#"
                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base']"
                            >
                              Delete
                            </a>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Pagination -->
          <nav
            class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
            aria-label="Pagination"
          >
            <div class="hidden sm:block">
              <p class="text-sm text-gray-700">
                Showing
                {{ ' ' }}
                <span class="font-medium">1</span>
                {{ ' ' }}
                to
                {{ ' ' }}
                <span class="font-medium">10</span>
                {{ ' ' }}
                of
                {{ ' ' }}
                <span class="font-medium">20</span>
                {{ ' ' }}
                results
              </p>
            </div>
            <div class="flex-1 flex justify-between sm:justify-end">
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Actions panel -->
    <section
      class='mt-20'
      aria-labelledby="quick-links-title"
    >
      <h2 class="text-gray-500 text-base font-medium uppercase tracking-wide">Advanced</h2>
      <h2 class="mt-2 text-gray-400 text-xl tracking-wide">A short description of this tier and it's benefits.</h2>
      <div class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div
            v-for="(action, actionIdx) in actions"
            :key="action.name"
            class="mt-4 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:gap-px">
          <div
              :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500']"
          >
            <div>
            <span :class="[action.iconBackground, action.iconForeground, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
              <component
                  :is="action.icon"
                  class="h-10 w-10"
                  aria-hidden="true"
              />
            </span>
            </div>
            <div class="mt-8">
              <h3 class="text-2xl font-medium">
                <a
                  :href="action.href"
                  class="focus:outline-none"
                >
                  <!-- Extend touch target to entire panel -->
                  <span
                    class="absolute inset-0"
                    aria-hidden="true"
                  />
                  {{ action.name }}
                </a>
              </h3>
              <p class="mt-2 text-lg text-gray-400">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </div>
            <span
                class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
            >
            <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
          </div>
        </div>
      </div>
    </section>

    <section
        class='mt-20'
        aria-labelledby="quick-links-title"
    >
      <h2 class="text-gray-500 text-base font-medium uppercase tracking-wide">Premium</h2>
      <h2 class="mt-2 text-gray-400 text-xl tracking-wide">A short description of this tier and it's benefits.</h2>
      <div class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div
            v-for="(action, actionIdx) in actions"
            :key="action.name"
            class="mt-4 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:gap-px">
          <div
              :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500']"
          >
            <div>
            <span :class="[action.iconBackground, action.iconForeground, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
              <component
                  :is="action.icon"
                  class="h-10 w-10"
                  aria-hidden="true"
              />
            </span>
            </div>
            <div class="mt-8">
              <h3 class="text-2xl font-medium">
                <a
                    :href="action.href"
                    class="focus:outline-none"
                >
                  <!-- Extend touch target to entire panel -->
                  <span
                      class="absolute inset-0"
                      aria-hidden="true"
                  />
                  {{ action.name }}
                </a>
              </h3>
              <p class="mt-2 text-lg text-gray-400">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </div>
            <span
                class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
            >
            <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { PlusIcon, DotsVerticalIcon, BadgeCheckIcon } from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const filters = [
  { name: 'All' },
  { name: 'Compliance' },
  { name: 'Monitor' },
  { name: 'Safety and Security' },
  { name: 'Custom' }
]

const recentViews = [
  { name: 'View A', initials: 'VA', href: '#', backgroundColorClass: 'bg-pink-600' },
  { name: 'View B', initials: 'VB', href: '#', backgroundColorClass: 'bg-purple-600' },
  { name: 'View C', initials: 'VC', href: '#', backgroundColorClass: 'bg-yellow-500' },
  { name: 'View D', initials: 'VD', href: '#', backgroundColorClass: 'bg-green-500' }
]

const views = [
  {
    id: 1,
    name: 'View A',
    href: '#',
    category: 'Compliance'
  },
  {
    id: 2,
    name: 'View B',
    href: '#',
    category: 'Monitor'
  },
  {
    id: 3,
    name: 'View C',
    href: '#',
    category: 'Safety and Security'
  },
  {
    id: 4,
    name: 'View D',
    href: '#',
    category: 'Custom'
  },
  {
    id: 5,
    name: 'View E',
    href: '#',
    category: 'Custom'
  },
  {
    id: 6,
    name: 'View F',
    href: '#',
    category: 'Custom'
  }
]

const actions = [
  {
    icon: BadgeCheckIcon,
    name: 'View name',
    href: '#',
    iconForeground: 'text-yellow-500',
    iconBackground: 'bg-yellow-50'
  },
  {
    icon: BadgeCheckIcon,
    name: 'View name',
    href: '#',
    iconForeground: 'text-yellow-500',
    iconBackground: 'bg-yellow-50'
  },
  {
    icon: BadgeCheckIcon,
    name: 'View name',
    href: '#',
    iconForeground: 'text-yellow-500',
    iconBackground: 'bg-yellow-50'
  },
  {
    icon: BadgeCheckIcon,
    name: 'View name',
    href: '#',
    iconForeground: 'text-yellow-500',
    iconBackground: 'bg-yellow-50'
  }
]

export default {
  name: 'AnalyseView',

  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    PlusIcon,
    DotsVerticalIcon,
    BadgeCheckIcon
  },

  setup() {
    const activeFilter = ref('All')

    function onTabClicked(filter) {
      activeFilter.value = filter.name
    }

    return {
      activeFilter,
      filters,
      onTabClicked,
      recentViews,
      views,
      actions
    }
  }
}
</script>
