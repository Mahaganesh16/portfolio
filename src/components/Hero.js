import heroImg from '../portfolioimg/hero.png'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

export default function Hero(){
    const config = {
        subtitle: 'Im a Web-developer',
        social: {
            Linkedin: 'https://www.linkedin.com/in/maha-ganesh-84a972272',
            Github: 'https://github.com/Mahaganesh16/project',
            Instagram: ''
        }
    }

return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex-col'>
            <h1 className='text-white text-6xl font-hero-font'>Hi,<br/> Im <span className='text-black'>Maha Ganesh </span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.Linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.Github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.Instagram} className='hover:text-white' ><AiOutlineInstagram size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={heroImg}/>
</section>
}   