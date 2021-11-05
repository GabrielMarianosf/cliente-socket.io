import React from "react";

function Chat(mensagem) {
  console.log(mensagem);
  return (
    <div className="chat">
      <div>
        {mensagem.map((msg, index) => {
          <p>{msg}</p>;
        })}
      </div>
    </div>
  );
}

export default Chat;
