// import '../styles/skills.css';

export const Card = ({ logoSrcFront, logoSrcBack, title, description }) => {

    const hasBackImage = logoSrcBack !== null;

    return (
        <>
            <div className="card">
                <div className={ `flip-logo ${ hasBackImage ? 'flip-logo-hover' : '' }` }>
                    <div className="flip-logo-inner">
                        <div className="flip-logo-front">
                            <img src={ logoSrcFront } alt={`${ title } Logo Front` } className="logo" />
                        </div>
                        {
                            hasBackImage && (
                                <div className="flip-logo-back">
                                    <img src={ logoSrcBack } alt={ `${ title } Logo Back` } className="logo" />
                                </div>
                            )
                        }
                    </div>
                </div>
                <span>{ title }</span>
                <p>{ description }</p>
            </div>
        </>
    );
};
