/* eslint-disable react/display-name */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeProps, FontAwesomeStyled } from './font-awesome.component.style'
import {
  faBars,
  faCalendar,
  faCheck,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faColumns,
  faEdit,
  faExclamationCircle,
  faInfoCircle,
  faLeaf,
  faPlus,
  faPuzzlePiece,
  faSignInAlt,
  faSortDown,
  faTimes,
  faTimesCircle,
  faToolbox,
  faUser,
  faQuestionCircle,
  faStar,
  faTrash,
  faMinus
} from '@fortawesome/free-solid-svg-icons'
import { faCircle as OutlinedCircle } from '@fortawesome/free-regular-svg-icons'

export enum FaIconSize {
  small = 'xs',
  default = '1x',
  medium = '2x',
  large = '3x'
}

export const FaIcon: Record<string, (props: FontAwesomeProps) => JSX.Element> = {
  Calendar: (props) => <FontAwesomeStyled {...props} icon={faCalendar} />,
  Check: (props) => <FontAwesomeStyled {...props} icon={faCheck} />,
  ChevronLeft: (props) => <FontAwesomeStyled {...props} icon={faChevronLeft} />,
  ChevronRight: (props) => <FontAwesomeStyled {...props} icon={faChevronRight} />,
  CircleAcessory: (props) => (
    <FontAwesomeStyled {...props} icon={faCircle} size={FaIconSize.default} color={'acessory'} />
  ),
  Close: (props) => <FontAwesomeStyled {...props} icon={faTimes} />,
  Columns: (props) => <FontAwesomeStyled {...props} icon={faColumns} />,
  Delete: (props) => <FontAwesomeStyled {...props} icon={faTimes} />,
  Edit: (props) => <FontAwesomeStyled {...props} icon={faEdit} />,
  FlashAlert: (props) => <FontAwesomeIcon {...props} icon={faTimesCircle} />,
  FlashInfo: (props) => <FontAwesomeIcon {...props} icon={faInfoCircle} />,
  FlashSuccess: (props) => <FontAwesomeStyled {...props} icon={faCheckCircle} color={'success'} />,
  Plus: (props) => <FontAwesomeStyled {...props} icon={faPlus} size={props.size ?? 'xs'} />,
  FlashWarning: (props) => <FontAwesomeIcon {...props} icon={faExclamationCircle} />,
  Leaf: (props) => <FontAwesomeStyled {...props} icon={faLeaf} />,
  Login: (props) => <FontAwesomeStyled {...props} icon={faSignInAlt} />,
  Menu: (props) => <FontAwesomeStyled {...props} icon={faBars} />,
  Minus: (props) => <FontAwesomeStyled {...props} icon={faMinus} />,
  OutlinedCircle: (props) => (
    <FontAwesomeStyled {...props} icon={OutlinedCircle} size={FaIconSize.medium} color={'primary'} />
  ),
  PuzzlePiece: (props) => <FontAwesomeStyled {...props} icon={faPuzzlePiece} />,
  Question: (props) => <FontAwesomeStyled {...props} icon={faQuestionCircle} />,
  SortDown: (props) => <FontAwesomeStyled {...props} icon={faSortDown} />,
  Star: (props) => <FontAwesomeStyled {...props} icon={faStar} />,
  Toolbox: (props) => <FontAwesomeStyled {...props} icon={faToolbox} />,
  Trash: (props) => <FontAwesomeStyled {...props} icon={faTrash} />,
  User: (props) => <FontAwesomeStyled {...props} icon={faUser} />
}
