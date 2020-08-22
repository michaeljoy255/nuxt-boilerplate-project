import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import HeaderNavLayout from './header-nav'

const localVue = createLocalVue()

let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(HeaderNavLayout, {
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Layout > header-nav', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
