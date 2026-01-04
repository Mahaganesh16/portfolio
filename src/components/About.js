import Aboutimg from '../portfolioimg/About.png'

export default function About(){
    const config = {
        line1: 'Collaboratedwith senior developers to debug and fix 30+ issues, enhancing site stability. Improved website load times by 25% through optimized code and asset compression. ',
        line2: 'Developed and maintained 5+ responsive websites using HTML, CSS, Bootstrap,Developed and maintained 5+ responsive websites using HTML, CSS, Bootstrap,JavaScript, and PHP.',
        line3: 'Developed and maintained responsive websites using HTML, CSS, Bootstrap,JavaScript, and PHP.Assisted in integrating MySQL databases and implementing front-end to back-end data flow.Collaborated with senior developers to test, debug,and optimize website components.'
    };
    


    return <section className="flex flex-col md:flex-row bg-secondary px-5 justify-center" id='About'>
        <div className='py-5 md:w-1/2'>
            <img src={Aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}