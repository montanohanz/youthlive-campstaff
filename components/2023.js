import Image from 'next/image'


import fwLogo from '../public/PNG/fw_logo.png';
import bgGray from '../public/PNG/defaultBg.png';
import g1frame from '../public/PNG/g_frame1.png';
import g2frame from '../public/PNG/g_frame2.png';
import o1frame from '../public/PNG/o_frame1.png';
import o2frame from '../public/PNG/o_frame2.png';
import cl2023 from '../public/PNG/cl2023.png';
import faqimg from '../public/PNG/faq.png';
import bannerfb from '../public/meta/banner.png';

function Head(props) {
    return (
    <head>
        <title>Camp LIVE 2023 - Greenhills Christian Fellowship</title>
        <meta name="description" content="" />

        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
        <meta property="og:url" content="https://camplive.gcf.org.ph" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Greenhills Christian Fellowship - CampLIVE 2023" />
        <meta property="og:image" content={bannerfb.src} />
        <meta property="og:description" 
            content="CampLIVE is the annual summer camp for high school students! 
            You'll be spending four days with young people from all backgrounds while you encounter Jesus through action-packed games and activities, 
            journey with others through Y-Groups, and have fellowship over God's message for the next generation." />
    </head>
    );
}

function BgDefault(props) {
    return (
        <div className="">
            <img className="" src={bgGray.src} />
        </div>
    );
}

function Frames(props) {
    if (props.type == "green1") {
        return (<img className="" src={g1frame.src} />)
    }
    if (props.type == "green2") {
        return (<img className="" src={g2frame.src} />)
    }
    if (props.type == "orange1") {
        return (<img className="" src={o1frame.src} />)
    }
    if (props.type == "orange2") {
        return (<img className="" src={o2frame.src} />)
    }
}

function ImgSlider(props) {

}

function Fullwidth(props) {
    return (
        <div className="flex min-h-screen bg-[url('/PNG/fw_bg.png')] bg-2023-ivory bg-cover">
            {/* <img className="" src={bg2020.src} /> */}
            <img className="p-10 drop-shadow-xl scale-75 bg-2023-ivory m-auto" src={fwLogo.src} />
            {/* <div className='text-2023-bondiblue xl:text-7xl md:text-5xl text-2xl'>July 6-19</div> */}
        </div>
    );
}

function Deets(props) {
    const slides = [
        // first.src
        // {url: '', title: ''},
        // {url: '', title: ''},
        // {url: '', title: ''}
    ]
    return (
        <div className="flex flex-auto flex-col md:flex-row">
            <div className='basis-1/2 bg-2023-moonstone bg-cover py-52'>
                <img className="p-4 max-w-lg mx-auto" src={cl2023.src} />
            </div>
            <div className='basis-1/2 bg-2023-sbyellow py-24'>
                <div className='rounded-lg bg-2023-ivory m-2 p-2 max-w-lg mx-auto'>
                    <img className='' src="/PNG/img1.png" />
                </div>
                <div className='rounded-lg bg-2023-ivory m-4 p-2 text-2023-bondiblue max-w-lg mx-auto'>
                    is the annual summer camp for high school! You'll be spending four days with young people
                    from all backgrounds while you encounter Jesus through action-packed games and activities, journey with others through
                    Y-Groups, and have fellowship over God's message for the next generation.
                </div>
            </div>
        </div>
    );
}

function PersonGrid(props) {
    return (
        <div className=''>
            <div className='-z-10'>
                <BgDefault />
            </div>
            <div className='flex columns-2xl'>
                <div className='basis-1/2 relative'>
                    {/* <div className='absolute' style={{top: '10%', left: '2%', width: '20%'}}> */}
                    <div className='absolute' style={{top: '30%', left: '2%', width: '20%'}}> 
                        <Frames type="orange1" /> 
                    </div>
                    <div className='absolute' style={{top: '15%', left: '30%', width: '20%'}}>
                        <Frames type="orange2" /> 
                    </div>
                </div>
                <div className='basis-1/2'>
                    <div className='text-xl text-2023-safetyorange'>Camp</div>
                    <div className='text-xl text-2023-safetyorange'>Counselors</div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='flex columns-2xl'>
                <div className='basis-1/2'>
                    <div className='text-xl text-2023-pear'>Pastoral Team</div>
                    <div className='text-xl text-2023-pear'>Team</div>
                </div>
                <div className='basis-1/2 relative'>
                    <div className='absolute' style={{bottom: '10%', right: '30%', width: '20%'}}>
                        <Frames type="green1" /> 
                    </div>
                    <div className='absolute' style={{bottom: '15%', right: '2%', width: '20%'}}>
                        <Frames type="green2" /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

function FAQ(props) {
    return (
        <div className='flex flex-col md:flex-row bg-2023-ivory'>
            <div className='basis-1/2'>
                <img className='order-last scale-25 p-10' src={faqimg.src} />
            </div>
            <div className='order-1 basis-1/2 p-10'>
                <ul>
                    <li>What school level should I be in to attend Camp LIVE: WORD?
                        <ul><li>
                            Anyone incoming Grade 7 to Grade 12 can come to camp!    
                        </li></ul>
                    </li>
                </ul>
                <br />
                <ul>
                    <li>Where can I sign-up for Camp LIVE: WORD?
                        <ul><li>
                        You can sign up any time online through our Registration Page or visit our booth at Greenhills Christian Fellowship Ortigas on Weekends. <br />
                        We’re present on Saturdays at the Audi A, after Youth LIVE Stream, and Sundays at the Lobby during and after our Sunday Services
                        </li></ul>
                    </li>
                </ul>
                <br />
                <ul>
                    <li>What happens after I sign-up?
                        <ul><li>
                        You will receive an email from us confirming your registration with important steps to secure your slot for camp.    
                        </li></ul>
                    </li>
                </ul>
                <br />
                <ul>
                    <li>How do I pay for the camp fee? What are the payment options available?
                        <ul><li>
                        Included in the confirmation email are the different payment details available and the next steps to confirm your payment with us. 
                        We accept GCash, Maya, Bank transfer.  
                        </li></ul>
                    </li>
                </ul>
                <br />
                <ul>
                    <li>How do I stay updated regarding camp-related reminders? (e.g. Important Dates, Things to Bring, Rules, Tips)
                        <ul><li>
                        Keep an eye out on our Youth LIVE Facebook Page for Camp Live: WORD updates!    
                        </li></ul>
                    </li>
                </ul>
                <br />
                <ul>
                    <li>Got any more questions?
                        <ul><li>
                        You can contact us via email at youthlive@gcf.org.ph or approach any Camp LIVE Representative at our booth.   
                        </li></ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function CTA(props) {
    return (
        <div className="container mx-auto text-center h-52">
            <a href='https://gcf-ortigas-410918.churchcenter.com/registrations/events/1727844'>
                <button className="text-5xl bg-2023-moonstone text-white p-5 m-5 drop-shadow-xl rounded-lg transition duration-500 ease-in-out hover:scale-110 hover:bg-2023-bondiblue">
                    Register Now
                </button>
            </a>
        </div>
    );
}

function Footer(props) {
    return (
        <footer className="flex flex-row bg-slate-800 text-right justify-end">
            <div className="text-white justify-items-end mr-2">
                {/* <img className="w-24" src="./assets/img/gcf-logo-white.png"/> */}
                <div className="align-bottom">
                    <b>Greenhills Christian Fellowship</b>
                    <br />Ruby cor. Garnet Rds., Ortigas Center,
                    <br />Pasig City, Philippines 1605
                    <br /><br />&copy; 2023 Greenhills Christian Fellowship
                </div>
            </div>
        {/* <script src=".\assets\js\jquery.min.js"></script> */}
        {/* <script src=".\assets\js\popper.min.js"></script> */}
        {/* <script src="https://kit.fontawesome.com/abc2906f89.js" ork="anonymous"></script> */}
        </footer>
    )
}

export { Head, Fullwidth, Deets, PersonGrid, FAQ, CTA, Footer };