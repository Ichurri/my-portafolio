import './Footer.css';

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="social-links animate__animated animate__backInDown">
                    <a 
                        href="https://www.instagram.com/iturri_santiago/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/006ddd/instagram-new--v1.png" alt="instagram-new--v1"/>    
                    </a>

                    <a 
                        href="https://github.com/Ichurri" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/006ddd/github.png" alt="github"/>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/santiago-iturri-969003320/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/006ddd/linkedin.png" alt="linkedin"/>
                    </a>
                    
                    <a 
                        href="mailto:santiagoiturrivargas04@gmail.com"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/006ddd/apple-mail.png" alt="apple-mail"/>
                    </a>
                </div>
            </footer>
        </>
    )
}