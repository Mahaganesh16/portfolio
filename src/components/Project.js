import WebsiteImg1 from '../portfolioimg/crud-app.png'
import WebsiteImg2 from '../portfolioimg/todo-list.png'
import WebsiteImg3 from '../portfolioimg/amazon-clone.png'

export default function Project() {
    const config = {
        projects : [
            {
                images: WebsiteImg1,
                description: 'An online sales Dash board project done by me with html,css and javascript ',
                link: 'https://mahaganesh16.github.io/dashboard-app/'
            },
            {
                images: WebsiteImg2,
                description: 'An todo-list app done my me with html,css and javascript coding action',
                link: 'https://mahaganesh16.github.io/todolist/'
            },
            {
                images: WebsiteImg3,
                description: 'An amazon clone done for the impression my web developer interest',
                link: 'https://mahaganesh16.github.io/test/'
            }
        ]
    }


    return <section className="flex flex-col px-5 py-20 justify-center bg-primary text-white" id='Projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
                <p>These are some of my best projects. I have built these with React/ Mern and venilla Css. check them out.</p>
            </div>
        </div>

        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                    <a href = {project.link}>
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.images}/>
                            <div className='Project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>

    </section>
}
