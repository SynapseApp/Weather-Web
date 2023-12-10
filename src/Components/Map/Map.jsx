import React from "react"

function Map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105172.32298620224!2d69.1503104!3d34.537472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1702212442936!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ borderRadius: "25px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  )
}

export default Map
