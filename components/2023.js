import Image from 'next/image'

import bg2020 from '../public/SVG/fw_bg.svg';
import word from '../public/SVG/word.svg';
import fwLogo from '../public/SVG/fw_logo.svg';
import bgGray from '../public/SVG/defaultBg.svg';
import g1frame from '../public/SVG/g_frame1.svg';
import g2frame from '../public/SVG/g_frame2.svg';
import o1frame from '../public/SVG/o_frame1.svg';
import o2frame from '../public/SVG/o_frame2.svg';
import deetsbg from '../public/SVG/deetsbg.svg';
import cl2023 from '../public/SVG/cl2023.svg';
import faqimg from '../public/SVG/faq.svg';
import regBtn from '../public/SVG/regbtn.svg';

function Head(props) {
    return (
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Camp LIVE 2023 - Greenhills Christian Fellowship</title>
        <meta name="description" content="" />
        <link rel="stylesheet" href="./assets/styles.css"/>

        {/* <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
        <meta property="og:url" content="https://youthlive.gcf.org.ph/camplive2023" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Greenhills Christian Fellowship - CampLIVE 2023" />
        <meta property="og:image" content="https://youthlive.gcf.org.ph/camplive2023/assets/banner-fb.jpg?v=5" />
        <meta property="og:description" content="CampLIVE is the annual summer camp for high school students! You'll be spending four days with young people from all backgrounds while you encounter Jesus through action-packed games and activities, journey with others through Y-Groups, and have fellowship over God's message for the next generation." />
        <meta property="twitter:card" content="summary_large_image">
        <meta proper="twitter:site" content="@gcfyouthlive">
        <meta name="twitter:creator" content="@gcfyouthlive">
        <meta name="twitter:title" content="Greenhills Christian Fellowship - CampLIVE 202">
        <meta name="twitter:description" content="CampLIVE is the annual summer camp for high schoolstudents! You'll be spending four days with young people from all backgrounds while you encounter Jesus through action-packed games and activities, journey with others through Y-Groups, and have fellowship over God's message for the next generation.">
        <meta name="twitter:image" content="https://youthlive.gcf.org.ph/camplive2023/img/banner-fb.jpg"> */}
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
        <div className="flex text-center items-center min-h-screen bg-[url('/SVG/fw_bg.svg')] bg-2023-ivory bg-cover ">
            {/* <img className="" src={bg2020.src} /> */}
            <img className="p-10 drop-shadow-xl scale-75 bg-2023-ivory" src={fwLogo.src} />
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
        <div className="flex flex-col md:flex-row items-stretch">
            <div className='basis-1/2 bg-2023-moonstone bg-cover py-24 justify-center'>
                <img className="h-48" src={cl2023.src} />
            </div>
            <div className='basis-1/2 bg-2023-sbyellow py-24'>
                <div className='rounded-lg bg-2023-ivory m-2 p-2'>
                    <img src="/PNG/img1.png" />
                </div>
                <div className='rounded-lg bg-2023-ivory text-2023-bondiblue m-2 p-2'>
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
            <button className="text-5xl bg-2023-moonstone text-white p-5 m-5 drop-shadow-xl rounded-lg transition duration-500 ease-in-out hover:scale-110 hover:bg-2023-bondiblue" >
                Register Now
            </button>
        </div>
    );
}

function Footer(props) {
    return (
        <footer className="flex flex-row bg-slate-800 text-right justify-end">
            <div className="grid gap-1 grid-cols-2 grid-rows-1 text-white justify-items-end">
                {/* <img className="w-24" src="./assets/img/gcf-logo-white.png"/> */}
                <div className="mr-2 align-bottom">
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