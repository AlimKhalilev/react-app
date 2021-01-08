import state from './redux/state'
import {methods} from './redux/state'
import {rerenderDOM} from './render'

rerenderDOM(state, methods);