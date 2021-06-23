import { Style } from './styles';

export function Card({props, children}) {
  return(
    <Style {...props}>
      <div className="type">
        <div className="classification"/>
      </div>
      <div className="content">
      {children}
      </div>
    </Style>
  )
}