import { GreetProps } from './greet.type'

const greet = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : 'Guest'}</div>
}

export default greet
