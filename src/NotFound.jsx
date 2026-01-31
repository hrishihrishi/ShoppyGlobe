import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Better than window.location
import { toast } from "react-toastify";

export function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        
        document.title = "ShoppyGlobe - 404 Not Found";

        // Store the timer ID to clean it up
        const timer = setTimeout(() => {
            alert("You seen to be lost! I'll take you back to home...");
            navigate("/"); // Smooth transition to home
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [navigate]);


    return (
        <div className="relative">
            <video 
                src="https://freefrontend.com/video//old/sassy-404-ui-study.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="fixed w-full h-screen object-cover -z-10"
            />
            {/* Added a fallback text in case video fails */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold z-10 pointer-events-none">
                404
            </h1>
        </div>
    );
}



// import { useEffect } from "react";
// import { toast } from "react-toastify";

// export function NotFound() {

//     useEffect(() => {
//         toast("You are lost taking you back to home", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//         });
//         document.title = "ShoppyGlobe - 404 Not Found";

//         setTimeout(() => {
//             window.location.href = "/";
//         }, 5000);

//         return () => {
//             clearTimeout();
//         }
//     }, []);


//     return (
//         <div>
// <video 
//     src="https://freefrontend.com/video//old/sassy-404-ui-study.mp4" 
//     autoPlay 
//     loop 
//     muted 
//     playsInline 
//     className="w-full h-screen object-cover z-10"
// />
//     </div>
//     )
// }