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
        <meta property="og:description" content="CampLIVE is the annual summer camp for high school and college students! You'll be spending four days with young people from all backgrounds while you encounter Jesus through action-packed games and activities, journey with others through Y-Groups, and have fellowship over God's message for the next generation." />
        <meta property="twitter:card" content="summary_large_image">
        <meta proper="twitter:site" content="@gcfyouthlive">
        <meta name="twitter:creator" content="@gcfyouthlive">
        <meta name="twitter:title" content="Greenhills Christian Fellowship - CampLIVE 202">
        <meta name="twitter:description" content="CampLIVE is the annual summer camp for high school and college students! You'll be spending four days with young people from all backgrounds while you encounter Jesus through action-packed games and activities, journey with others through Y-Groups, and have fellowship over God's message for the next generation.">
        <meta name="twitter:image" content="https://youthlive.gcf.org.ph/camplive2023/img/banner-fb.jpg"> */}
    </head>
    );
}

function Fullwidth(props) {
    return (
        <div className="container mx-auto text-center md:aspect-video" >
            <h1 className="align-middle">full width camp logo & picture</h1>
        </div>
    );
}

// function Navbar(props) {
//     return (
//         <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//             <div className="container flex flex-wrap items-center justify-between mx-auto">
//             <a href="https://flowbite.com/" className="flex items-center">
//                 <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
//                 <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//             </a>
//             <div className="flex md:order-2">
//                 <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
//                 <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
//                 <span className="sr-only">Open main menu</span>
//                 <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//             </button>
//             </div>
//             <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
//             <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                 <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Item 1</a>
//                 </li>
//                 <li>
//                 <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Item 2</a>
//                 </li>
//             </ul>
//             </div>
//         </nav>
//     );
// }

function bgDefault(props) {
    return (
        <div className="">
            <img src="">
        </div>
    )
}

function h1Green(props) {
    return (
        <div className="">

        </div>
    )
}

function h1Orange(props) {
    return (
        <div className="">

        </div>
    )
}

function Deets(props) {
    return (
        <div className="flex flex-row">
            <div className="basis-1/2 bg-black"></div>
            <div className="basis-1/2 px-1">
                <p className="text-xl">Location:</p>
                <p className="font-bold text-lg">CCT Tagaytay Retreat & Training Center</p><br />
                <p className="text-xl">Date:</p>
                <p className="font-bold text-lg">July 6-9, 2023</p>
            </div>
        </div>
    );
}

function PersonGrid(props) {
    return (
        <div>
            <div className="flex flex-row justify-end">
                <p className="font-serif text-6xl text-right">Speakers & Counselors</p>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 mx-auto text-center">
                <div className="flex rounded-full shadow-md">speaker 1 picture</div>
                <div className="columns-1 shadow-md">
                    <p className="text-xl font-bold">Ptr. Rollyvic Tira</p>
                    <p className="text-sm">Speaker</p>
                    <p className="text-base">speaker 1 description</p>
                </div>
            </div>
        </div>
    );
}
{/* TODO: Make this a Dynamic Component */}

function FAQ(props) {
    return (
        <div />
    );
}

function CTA(props) {
    return (
        <div className="container mx-auto text-center">
            <div className="container" name="banner">
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
        <script src=".\assets\js\jquery.min.js"></script>
        <script src=".\assets\js\popper.min.js"></script>
        {/* <script>
            $(document).ready(function(){
              var $root = $('html, body');
          
              $('a[href^="#"]').click(function () {
                $root.animate({
                  scrollTop: $( $.attr(this, 'href') ).offset().top
                }, 500);
                return false;
              });
          
              $('.answer').on('show.bs.collapse', function() {
                $(this).parents('.question').siblings('.fa-caret-right fa-solid').css({'transform':'rotate(90deg)','color':'#F06B4B'});
                $(this).siblings('a').css('color', '#F06B4B');
              });
              $('.answer').on('hide.bs.collapse', function() {
                $(this).parents('.question').siblings('.fa-caret-right fa-solid').css({'transform':'none','color':'#000000'});
                $(this).siblings('a').css('color', '#1a1a1a');
              });
            });
            </script> */}
            <script src="https://kit.fontawesome.com/abc2906f89.js" ork="anonymous"></script>
        <script src="" async defer></script>
        </footer>
    )
}

export { Head, Fullwidth, Deets, PersonGrid, FAQ, CTA, Footer };