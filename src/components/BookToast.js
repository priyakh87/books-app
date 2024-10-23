import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function BookToast({ showToast, setShowToast,message,title }) {
console.log("mmm", message)
  return (
    <>
      <ToastContainer className="p-3"
          position="middle-end"
          style={{ zIndex: 1000 }} >
      <Toast show={showToast} className="bg-success" delay={3000} autohide onClose={() => setShowToast(false)}  >
        <Toast.Header closeButton={() => setShowToast(!showToast)}>
          <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
          <strong className='me-auto'>{title}</strong>
        </Toast.Header>
        <Toast.Body className="color-white">{message}</Toast.Body>
        </Toast>
        </ToastContainer>
    </>
  );
}
export default BookToast