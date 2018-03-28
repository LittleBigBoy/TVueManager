import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
import generateIconsView from '@/views/svg-icons/generateIconsView.js'

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)

generateIconsView.generate(iconMap)