type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

const Greet2 = (props: GreetProps) => {
  const { messageCount = 0 } = props // optional based on messageCount?
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : 'Welcome Guest'}
      </h2>
    </div>
  )
}

export default Greet2
