import CreateChannelModal from "../Channels/CreateChannelModal"
import Channels from "../Channels"
import CreateGroupModal from "../Groups/CreateGroupModal"
import Groups from "../Groups"
import { NavLink } from "react-router-dom"
import "./LeftMenu.css"
import { useState, useEffect } from "react"
<<<<<<< HEAD
import { DarkModal } from '../../context/Modal'
=======
import { Modal } from '../../context/Modal'
>>>>>>> 77ae731 (added dropdowns for left menu)
import ChannelForm from "../Channels/ChannelForm";


const LeftMenu = () => {
    const [showChannels, setShowChannels] = useState(true)
    const [showGroups, setShowGroups] = useState(true)
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        return () => setShowModal(false);
    }, []);

    return (
        <>
            <div className="left-navigation-menu">
                <div className="left-menu-header">
                    <NavLink className="unset" to={`/`}>
                        <h1 className="left-menu-title">Chatter</h1>
                    </NavLink>
                </div>
                <div className="channel-container">
                    <div className="left-menu-label">
                        <button className='left-menu-button unset' onClick={e => showChannels ? setShowChannels(false) : setShowChannels(true)}>
<<<<<<< HEAD
                            <i className="fa-solid fa-caret-down" style={showChannels ? null : {transform: "rotate(270deg)"}}></i>Channels
                        </button>
                        <i className="fas fa-plus" onClick={() => setShowModal(true)}></i>
                        {showModal && (
                            <DarkModal onClose={() => setShowModal(false)}>
                                <ChannelForm setShowModal={setShowModal} />
                            </DarkModal>
=======
                            <i class="fa-solid fa-caret-down" style={showChannels ? null : {transform: "rotate(270deg)"}}></i>Channels
                        </button>
                        <i className="fas fa-plus" onClick={() => setShowModal(true)}></i>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <ChannelForm setShowModal={setShowModal} />
                            </Modal>
>>>>>>> 77ae731 (added dropdowns for left menu)
                        )}
                    </div>
                    {showChannels && <Channels user={true} />}
                </div>
                <div className="instant-message-container">
                    {/* <CreateGroupModal /> */}
                    <div className="left-menu-label">
                        <button className='left-menu-button unset' onClick={e => showGroups ? setShowGroups(false) : setShowGroups(true)}>
<<<<<<< HEAD
                            <i className="fa-solid fa-caret-down" style={showGroups ? null : {transform: "rotate(270deg)"}}></i>Direct Messages
=======
                            <i class="fa-solid fa-caret-down" style={showGroups ? null : {transform: "rotate(270deg)"}}></i>Direct Messages
>>>>>>> 77ae731 (added dropdowns for left menu)
                        </button>
                        <NavLink className='unset' to={`/groups/new`}><i className="fas fa-plus"></i></NavLink>
                    </div>
                    {showGroups && <Groups all={true} />}
                </div>
            </div>
        </>
    )
}



export default LeftMenu
