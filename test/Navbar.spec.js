import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Navbar, {
      stubs: [
        'b-nav-item',
        'b-navbar-nav',
        'b-icon',
        'b-collapse',
        'b-navbar-toggle',
        'b-navbar-brand',
        'b-navbar',
        'b-img'
      ]
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

