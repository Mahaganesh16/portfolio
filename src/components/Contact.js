export default function Contact(){

    const config = {
        Email: 'mmahaganesh16@gmail.com',
        Phone: '8838608103'
    }
    return <section className="flex flex-col bg-primary px-5 justify-center py-32 text-white" id='Contact'>

        <div className=' flex flex-col items-center'>
            <h1 className='text-4xl  border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span>{config.Email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span>{config.Phone}</p>
        </div>
    </section>
}