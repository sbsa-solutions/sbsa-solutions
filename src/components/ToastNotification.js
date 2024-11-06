import React from "react";
import { Alert, Button } from "react-bootstrap";

const ToastNotification = ({ message, show, onClose, type = "success" }) => {
  return (
    <div className="mt-2">
      <Alert show={show} variant={type}>
        <p>{message}</p>
      </Alert>
    </div>
  );
};

export default ToastNotification;
