import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
      projectId="75b8f1cf-0fa8-44b6-9c9a-16be236884cf"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
  );
};

export default ChatsPage;
