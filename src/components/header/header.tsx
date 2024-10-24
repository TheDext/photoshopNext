import { FC } from 'react';
import classNames from '@/common/lib/classNames';

const Header: FC = () => {
    return <div className={classNames('header', {}, ['_container'])}></div>;
};

export default Header;
