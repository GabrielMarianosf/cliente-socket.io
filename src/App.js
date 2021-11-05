import React, { useState } from "react";

const { io } = require("socket.io-client");

const socket = io("http://localhost:4000", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("conectado no servidor, ID: " + socket.id);
  socket.on("disconnect", () => {
    console.log(socket.id);
  });
});

function App() {
  const [mensagem, setmensagem] = useState("");
  const [chat, setchat] = useState([]);

  socket.on("chat", (msg) => {
    // console.log("resposta recebida " + msg);
    // setchat([...chat, msg]);
  });

  function enviar() {
    if (mensagem.trim()) {
      socket.emit("mensagem", {
        id: null,
        mensagem,
      });
      setmensagem("");
    } else alert("Escreva alguma mensagem");
  }

  return (
    <div className="App">
      <center>
        <h1>Socket</h1>
        <div className="chat">
          {chat.map((msg, index) => (
            <div key={index}> {msg} </div>
          ))}
        </div>
        <form>
          <input
            type="text"
            placeholder="Escreva aqui ..."
            value={mensagem}
            onChange={(e) => setmensagem(e.target.value)}
          />
          <button onClick={enviar}>Enviar</button>
        </form>
      </center>
    </div>
  );
}

export default App;
