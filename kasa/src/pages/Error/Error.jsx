import './error.scss'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__text'>Oups! la page que vous demandez n&apos;existe pas.</p>
        <Link to="/" className='error__link'>
            Retourner sur la page d&apos;acceuil
        </Link>
        </div>

    )
}

export default Error