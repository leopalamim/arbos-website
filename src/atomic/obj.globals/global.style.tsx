import { createGlobalStyle } from 'styled-components'
import { Breakpoint, Color } from 'atomic/obj.constants/constants'

export const GlobalStyle = createGlobalStyle<{ hideOverflow?: boolean }>`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body{ 
      background-color: ${Color.Background};
      ${({ hideOverflow }) => hideOverflow && 'overflow: hidden;'}
    }

    a {
      text-decoration: none;
      color: ${Color.Primary};
    }

@media (min-width: 0px){
  html{
    font-size: 12px;
  }
}

@media (min-width: ${Breakpoint.Desktop}){
  html{
    font-size: 14px;
  }
}
`
