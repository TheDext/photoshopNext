import Logo from '../../assets/img/logo.svg';
import Search from '@/src/components/search/search';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar__container">
            <div className="sidebar__logo">
                <Logo />
                <Search />
            </div>
        </div>
    </div>
);
export default Sidebar;
