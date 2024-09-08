import logoImage from '../assets/quiz-logo.png';

const Header = () => {
    return <header>
        <img src={logoImage} alt='Header Quiz Logo'/>
        <h1>ReactQuiz</h1>
    </header>
}

export default Header;