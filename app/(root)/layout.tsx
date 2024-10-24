import { FC, ReactNode } from 'react';

interface HomeLayoutProps {
    children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
    return children;
};

export default HomeLayout;
