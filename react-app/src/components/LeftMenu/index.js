import CreateChannelModal from "../Channels/CreateChannelModal"
import Channels from "../Channels"
import CreateGroupModal from "../Groups/CreateGroupModal"
import Groups from "../Groups"

const LeftMenu = ({ channels, groups }) => {
    return (
        <>
            <div className="left-navigation-menu">
                <div className="left-menu-header">
                    <h1 className="left-menu-title">Chatter</h1>
                </div>
                <div className="channel-container">
                    <CreateChannelModal />
                    <Channels user={true} channels={channels} />
                </div>
                <div className="instant-message-container">
                    <CreateGroupModal />
                    <Groups all={true} groups={groups} />
                </div>
            </div>
        </>
    )
}

export default LeftMenu