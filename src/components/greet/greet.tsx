type GreetProps = {
  name?: string
}

const greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>
}

export default greet
