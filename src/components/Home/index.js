import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-r.png';
import LogoTitle2 from '../../assets/images/logo-l.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Logo2 from './Logo2';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = ['y', 'l', 'a', 'n', ' ']
    const lastNameArray = [ 'o', 'u', 'k', 'u', 's', 'a']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e','r','.']

    

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return ()=> clearTimeout(idTimeOut);
    },[])
    return (
        <div>
                <span className="tags-home top-tags-home">
                    <span className="top-tag-html-home">&lt;html&gt;</span>
                    <br />
                    &lt;body&gt;
                </span>
            <div className="containter home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer-first" />
                    <AnimatedLetters letterClass={letterClass} strArray={firstNameArray} idx={15}/>
                    <img className="last-logo" src={LogoTitle2} alt="developer-last" />
                    <AnimatedLetters letterClass={letterClass} strArray={lastNameArray} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                    </h1>
                <h2> Student / Intern </h2>
                <div className='button-container'>
                    <a href="https://www.resume.lol/share/w003sib" className='flat-button' target="_blank" rel="noopener noreferrer">RESUME</a>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Logo />
            <Logo2 />
            </div>
            <span className="tags-home bottom-tags-home">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html-home">&lt;/html&gt;</span>
                </span>
        </div>
    )
}

export default Home;