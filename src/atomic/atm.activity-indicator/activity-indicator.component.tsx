import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { ActivityIndicatorStyled } from './activity-indicator.component.style'

export type ActivityIndicatorType = 'spinner'
export interface ActivityIndicatorProps {
  type: ActivityIndicatorType
  size?: SizeProp
  light?: boolean
}

const typeIconMap: Record<ActivityIndicatorType, IconDefinition> = {
  spinner: faSpinner
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = (props) => {
  const { type, size, light } = props
  const icon = typeIconMap[type]
  return <ActivityIndicatorStyled icon={icon} size={size} light={light} spin />
}
