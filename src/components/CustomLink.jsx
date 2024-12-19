import { Link } from 'react-router-dom';

export const CustomLink = ({ to, children, ...props }) => {
    const isMailto = to.startsWith('mailto:');
    if (isMailto) {
        return (
            <a href={to} {...props}>
                {children}
            </a>
        );
    }
    return (
        <Link to={to} {...props}>
            {children}
        </Link>
    );
};
