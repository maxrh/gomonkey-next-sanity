export default function VideoComponent() {
    const src = 'https://www.youtube.com/embed/cZ52UlA_58E?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=cZ52UlA_58E&modestbranding=1&disablekb=1&iv_load_policy=3';
   
    return (
        <div className="absolute top-0 left-0 overflow-hidden flex items-center justify-center h-[700px] w-full z-0">
            <iframe 
                src={src} 
                referrerPolicy="strict-origin-when-cross-origin" 
                title="GoMonkey Gladsaxe"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    transform: 'translate(-50%, -50%)',
                    aspectRatio: '16 / 9'
                }}
                allowFullScreen 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                className="pointer-events-none"
            />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(var(--background-rgb), .1) 0%, rgba(var(--background-rgb), 0.95) 70%, rgba(var(--background-rgb), 1) 95%)',
                pointerEvents: 'none'
            }}></div>
        </div>
    );
}