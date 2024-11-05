import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import ToastNotification from "../components/ToastNotification";

export function Contact() {
  // toast fields
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  // form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { t } = useTranslation("translation", {
    keyPrefix: "contact",
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });

      // If successful, set success message and type
      setToastMessage("Message sent successfully!");
      setToastType("success");

      //alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
      // alert("Error sending message, please try again.");
      setToastMessage("Failed to send message. Please try again.");
      setToastType("danger");
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">{t("title")}</span>
                <h1 className="text-capitalize mb-4 text-lg">
                  {t("get-touch")}
                </h1>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="/" className="text-white">
                      {t("home")}
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-white">/</span>
                  </li>
                  <li className="list-inline-item text-white-50">
                    {t("contact-us")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <form
                id="contact-form"
                className="contact__form"
                onSubmit={handleSubmit}
              >
                <h3 className="text-md mb-4">{t("contact-form")}</h3>
                <div className="form-group">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder={t("your-name")}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder={t("email")}
                    required
                  />
                </div>
                <div className="form-group-2 mb-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control"
                    rows="4"
                    placeholder={t("your-message")}
                    required
                  ></textarea>
                </div>
                <button className="btn btn-main" type="submit">
                  {t("send-message")}
                </button>
              </form>
              <ToastNotification
                message={toastMessage}
                show={showToast}
                onClose={() => setShowToast(false)}
                type={toastType}
              />
            </div>

            <div className="col-lg-5 col-sm-12">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                <span className="text-muted">{t("professionals-title")}</span>
                <h2 className="mb-5 mt-2">{t("professionals-description")}</h2>

                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-direction mr-3"></i>
                    {t("location")}
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>
                    sbsa.business.solutions@gmail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>
                    +216 22 605 020
                  </li>
                </ul>

                <ul className="social-icons list-inline mt-5">
                  <li className="list-inline-item">
                    <Link
                      to="https://www.facebook.com/profile.php?id=61567465980932"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="https://www.instagram.com/sbsa.solutions/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="https://www.youtube.com/@sbsa.solutions"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <iframe
        title="Map "
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d353915.59848317626!2d9.382086100861715!3d36.80628515204911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m1!3e6!5e0!3m2!1sen!2stn!4v1729507432844!5m2!1sen!2stn"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
