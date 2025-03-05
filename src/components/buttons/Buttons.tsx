import './Buttons.css'

const Button = ({ children, onClick, variant='primary', disabled, className, icon }) => {

  return (
    <button
    onClick={onClick}
    disabled={disabled} 
    className={`button ${variant} ${className}`}
    aria-label={icon ? 'Icon Button' : undefined}
    >
     {icon && <span className='icon'>{icon}</span>} 
    {children}
      </button>
  )
}

export default Button;