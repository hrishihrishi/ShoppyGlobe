import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Better than window.location
import { toast } from "react-toastify";
import { useRouteError } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
    const err = useRouteError();
    console.log(err);
    const [showError, setShowError] = useState(false);

    useEffect(() => {

        document.title = "ShoppyGlobe - 404 Not Found";
        

        const errorTimer = setTimeout(() => {
            setShowError(true);
        }, 10);

        const errorTimer2 = setTimeout(() => {
            setShowError(false);
            toast.info("Taking you back home",{
                duration: 5000,
            })
        }, 6000);

        const navigateTimer = setTimeout(() => {
            navigate("/"); 
        }, 12000);

        return () => {
            clearTimeout(navigateTimer);
            clearTimeout(errorTimer);
            clearTimeout(errorTimer2);
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
                className="fixed top-0 left-0 w-full h-full object-cover -z-10 "
            />

            {showError && (
                <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-20 animate-in ease-in-out fade-in zoom-in duration-3000">
                    <div className="bg-black/60 border border-white/20 p-8 rounded-3xl shadow-2xl text-center max-w-lg">
                        <h1 className="text-8xl font-black text-red-500 mb-2 leading-none">
                            {err?.status || "404"}
                        </h1>
                        <p className="text-white text-xl font-bold mb-4 uppercase tracking-widest">
                            {err?.statusText || "Something went wrong"}
                        </p>
                        <div className="bg-white/10 p-4 rounded-xl text-left border border-white/5">
                             <p className="text-blue-300 font-mono text-sm break-all">
                                {err?.error?.message || "The page you are looking for does not exist."}
                                <br />
                                {err?.error?.stack}
                             </p>
                        </div>
                        <p className="mt-6 text-red-500 italic text-xl font-bold">
                            Teleporting you home in a few seconds...
                        </p>
                    </div>
                </div>
            )}


            {/* Added a fallback text in case video fails */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold z-10 pointer-events-none">
                404
            </h1>
        </div>
    );
}
