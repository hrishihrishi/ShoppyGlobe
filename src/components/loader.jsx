export default function Loader() {
    return (
        // Full-screen overlay with blur and slight tint
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-md">
            <img 
                src="src/assets/loading.png" 
                alt="loading..." 
                className="w-[20vw] rounded-full"
            />
        </div>
    )
}