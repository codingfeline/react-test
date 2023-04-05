type StatusProps = {
  status: 'loading' | 'successful' | 'error'
}
export const BasicProps = (props: StatusProps) => {
  let message
  return <h2>Status - {props.status}</h2>
}
