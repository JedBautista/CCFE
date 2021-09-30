export const FormError = ({
  show,
  message,
  centerText
}) =>
  show ? (
    <p className={`form-error ${centerText ? '-center' : ''}`}>{message}</p>
  ) : null

