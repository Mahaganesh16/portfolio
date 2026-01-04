import Resumeimg from '../portfolioimg/resume.jpg'

export default function Resume(){
    const config = {
        link: 'https://drive.google.com/file/d/1oOwQllv78z6ecY4zMcfmeO0EYys8aPN_/view?usp=drivesdk'
    }

    return <section id='Resume' className="flex flex-col md:flex-row bg-secondary px-5 justify-center">
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={Resumeimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>you can view my resume  <a className='btn' href={config.link}> Download  </a></p>
            </div>
        </div>
    </section>
}