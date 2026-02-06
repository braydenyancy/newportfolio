import { useNavigate, useLocation } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import { Tooltip } from '@mui/material';

const MenuBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isResumePage = location.pathname === '/resume';


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
            {isResumePage ? (
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
            ) : (
                <div>
                    <p style={{
                        color: 'white',
                        marginLeft: '2rem',
                    }}>Welcome to my new React x Three.js Portfolio</p>
                </div>
            )}

            <Tooltip title="Click to see latest resume" arrow>
                <ArticleIcon onClick={() => navigate('resume')} style={{
                    color: 'white',
                    marginRight: '2rem',
                    cursor: 'pointer',
                    fontSize: '2rem',
                }} />
            </Tooltip>
        </div>
    )
}

export default MenuBar;