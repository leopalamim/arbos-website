import { PageNames } from '@app/modules/app/page-names'
import { Routes } from '@app/modules/app/routes'
import { FaIcon } from '@atomic/atm.font-awesome'

type SideMenuItemType = { route: string; page: string; icon: any }

export const sideMenuItems: SideMenuItemType[] = [
  {
    route: Routes.PrivateArea.Main,
    page: PageNames.PrivateArea.Main,
    icon: FaIcon.Columns
  },
  {
    route: Routes.PrivateArea.Agriculture,
    page: PageNames.PrivateArea.Agriculture,
    icon: FaIcon.Leaf
  },
  {
    route: Routes.PrivateArea.Operations,
    page: PageNames.PrivateArea.Operations,
    icon: FaIcon.Toolbox
  },
]
