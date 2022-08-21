import { ComponentType, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export interface WithRouterProps<T = ReturnType<typeof useParams>> {
    history: {
        back: () => void;
        goBack: () => void;
        location: ReturnType<typeof useLocation>;
        push: (url: string, state?: any) => void;
    };
    location: ReturnType<typeof useLocation>;
    match: {
        params: T;
    };
    navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <P extends object>(Component: ComponentType<P>) => {
    return (props: Omit<P, keyof WithRouterProps>) => {
        const location = useLocation();
        const match = { params: useParams() };
        const navigate = useNavigate();

        const history = {
            back: () => navigate(-1),
            goBack: () => navigate(-1),
            location,
            push: (url: string, state?: any) => navigate(url, { state }),
            replace: (url: string, state?: any) =>
                navigate(url, {
                    replace: true,
                    state,
                }),
        };

        return (
            <Component
                history={history}
                location={location}
                match={match}
                navigate={navigate}
                {...(props as P)}
            />
        );
    };
};

interface ScrollToTop {
    children: JSX.Element;
    location: {
        pathname: string;
    };
}

const ScrollToTop = ({ children, location: { pathname } }: ScrollToTop) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return children || null;
};

export default withRouter(ScrollToTop);
