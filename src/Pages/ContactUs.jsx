import image from "../assets/contact_US.webp";

const ContactUs = () => {
  const MapsLink =
    "https://www.google.com/maps?ll=23.487425,72.915241&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=773832210334374469";

  return (
    <>
      <div className="mx-14 ">
        <img src={image} alt="contactus" className="max-h-96" width="100%" />
      </div>

      <div className="w-[95%] mx-auto my-20 h-96 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.199067083914!2d72.91266637521297!3d23.48742500094756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dc66cd0000001%3A0xabd344b9cbc5a45!2sDas%20Foodtech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718014727601!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Das Foodtech Location"
      ></iframe>
    </div>
    </>
  );
};

export default ContactUs;
