import React from "react";

function Click() {
    console.log("");
}

function DeleteButton() {
    return <button onClick={Click}>Delete Video</button>
};
export default DeleteButton;