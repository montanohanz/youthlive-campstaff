import bg2020 from '../public/SVG/fw_bg.svg';
import word from '../public/SVG/word.svg';
import bgGray from '../public/SVG/defaultBg.svg';
import g1frame from '../public/SVG/g_frame1.svg';
import g2frame from '../public/SVG/g_frame2.svg';
import o1frame from '../public/SVG/o_frame1.svg';
import o2frame from '../public/SVG/o_frame2.svg';
import deetsbg from '../public/SVG/deetsbg.svg';
import cl2023 from '../public/SVG/cl2023.svg';
import faqimg from '../public/SVG/faq.svg';

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
        <div className="fluid text-center relative" >
            <img className="" src={bg2020.src} />
            <img className="absolute scale-75" style={{top: '32%'}} src={word.src} />
            <div className='absolute bottom-1/4 inset-x-0 text-2023-bondiblue xl:text-7xl md:text-5xl text-2xl'>July 6-19</div>
        </div>
    );
}

function Deets(props) {
    return (
        <div className="relative">
            <div className=''>
                <img src={deetsbg.src} />
            </div>
            <div className='flex absolute inset-0 items-center'>
                <img className="basis-1/2 grow h-48" src={cl2023.src} />
                <div className='basis-1/2 grow'>
                    <div className='rounded-lg bg-2023-ivory mb-2'>
                        img slider 
                    </div>
                    <div className='rounded-lg bg-2023-ivory text-2023-bondiblue m-2 p-2'>
                        is the annual summer camp for high school! You'll be spending four days with young people
                        from all backgrounds while you encounter Jesus through action-packed games and activities, journey with others through
                        Y-Groups, and have fellowship over God's message for the next generation.
                    </div>
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
                    <div className='absolute' style={{top: '10%', left: '2%', width: '20%'}}>
                        <Frames type="orange1" /> 
                    </div>
                    <div className='absolute' style={{top: '15%', left: '30%', width: '20%'}}>
                        <Frames type="orange2" /> 
                    </div>
                </div>
                <div className='basis-1/2'>
                    <h1>Camp Counselors</h1>
                </div>
            </div>

            <div className='flex columns-2xl'>
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
        <div>
            <div className='-z-10'>
                <BgDefault />
            </div>
            <div className='flex columns-2xl inset-0'>
                <div className='basis-1/2'>faqtext</div>
                <img className='basis-1/2 scale-25' src={faqimg.src} />
            </div>
        </div>
    );
}

function CTA(props) {
    return (
        <div className="container mx-auto text-center">
            <div className="container">
                <div className="shadow-md">
                    <p className="text-xl">call to action</p>
                    <p className="text-base">button</p>
                </div>
            </div>
        </div>
    );
}

function Footer(props) {
    return (
        <footer>
            <div className="flex flex-row bg-slate-800 text-right justify-end">
            <div className="grid gap-1 grid-cols-2 grid-rows-1 text-white justify-items-end">
                <img className="w-24" src="./assets/img/gcf-logo-white.png"/>
                <div className="mr-2 align-bottom">
                    <b>Greenhills Christian Fellowship</b>
                    <br />Ruby cor. Garnet Rds., Ortigas Center,
                    <br />Pasig City, Philippines 1605
                    <br /><br />&copy; 2023 Greenhills Christian Fellowship
                </div>
            </div>
        </div>
        {/* <script src=".\assets\js\jquery.min.js"></script> */}
        {/* <script src=".\assets\js\popper.min.js"></script> */}
        {/* <script src="https://kit.fontawesome.com/abc2906f89.js" ork="anonymous"></script> */}
        </footer>
    )
}

export { Head, Fullwidth, Deets, PersonGrid, FAQ, CTA, Footer };