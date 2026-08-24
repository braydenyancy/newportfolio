import { useNavigate, useLocation } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { Tooltip } from '@mui/material';

const MenuBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';


    return (
        <div className='menuItemsDiv' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            width: '100vw',
            marginTop: '0.5rem',
            // borderBottom: 'solid 1px white',
            // opacity: '0.75',
        }}>
            {isHomePage ? (
                <div>
                    <p style={{
                        color: 'white',
                        marginLeft: '2rem',
                    }}>Welcome to my new React x Three.js Portfolio</p>
                </div>
            ) : (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <p onClick={() => navigate('/')} style={{
                        color: 'white',
                        marginLeft: '2rem',
                        cursor: 'pointer',
                    }}>Return home</p>
                </div>
            )}

            <div className="menu-icons" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginRight: '2rem',
            }}>
                <Tooltip title="Click to browse project archives" arrow>
                    <FolderSpecialIcon onClick={() => navigate('projects')} style={{
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '2rem',
                    }} />
                </Tooltip>

                <Tooltip title="Click to see latest resume" arrow>
                    <ArticleIcon onClick={() => navigate('resume')} style={{
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '2rem',
                    }} />
                </Tooltip>
            </div>
        </div>
    )
}

export default MenuBar;
