import * as controlActions from './controlActions'
import * as calidadActions from './calidadActions'
import * as toActions from './toActions'

const combinaActions = Object.assign({}, controlActions, calidadActions, toActions);

export default combinaActions;