import { GrDocumentText } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { colors } from "../assets/colors";
import { useNavigate } from "react-router-dom";


const MenuBar = () => {

    const navigate = useNavigate();

    const menuItemStyling = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        cursor: 'pointer',
    }

    const menuTextStyling = {
        margin: 0,
        padding: 0,
    }

    return (
        <div className='menuItemsDiv' style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '100%',
        }}>
            <div className='menuItem' style={menuItemStyling} onClick={() => navigate('/')}>
                <div>
                    <FaHome size={48} style={{ color: colors.seafoam }} />
                </div>
                <h4 style={menuTextStyling}>Home</h4>
            </div>
            <div className='menuItem' style={menuItemStyling} onClick={() => navigate('/projects')}>
                <div>
                    <GrProjects size={48} style={{ color: colors.teal }} />
                </div>
                <h4 style={menuTextStyling}>Projects</h4>
            </div>
            <div className='menuItem' style={menuItemStyling} onClick={() => navigate('/resume')}>
                <div>
                    <GrDocumentText size={48} style={{ color: colors.maroon }} />
                </div>
                <h4 style={menuTextStyling}>Resume</h4>
            </div>
        </div>
    )
}

export default MenuBar;