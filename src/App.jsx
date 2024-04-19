import { useState } from "react";

const data = [
  {
    title: "Extra Connection at just ₹200",
    details: "with amazon prime at no extra cost",
    photo:
      "https://assets.airtel.in/static-assets/cms/dth-images/amazon-prime-mobile-banner1.png",
    btnText: "Explore Pack",
    url: "https://www.google.com/",
  },
  {
    title: "WI-FI + DTH + OTT Services",
    details: "With free router & android box",
    photo:
      "https://assets.airtel.in/teams/simplycms/web/images/xstream-box-banner-desktop-new-22122022.png",
    btnText: "Only at ₹699",
    url: "https://www.google.com/",
  },
  {
    title: "Get Free Xstream Box worth ₹6000",
    details: "Just add DTH to your postpaid plan",
    photo:
      "https://m.media-amazon.com/images/I/41252rx04PL._AC_UF1000,1000_QL80_.jpg",
    btnText: "Add Now",
    url: "https://www.google.com/",
  },
  {
    title: "Get Loan of upto ₹9 Lakh",
    details: "Instant disbursal & low interest rates",
    photo:
      "https://media.istockphoto.com/id/1413481802/vector/approved-credit-bill-good-credit-score-receiving-loan-approval-from-bank-personal-finance.jpg?s=612x612&w=0&k=20&c=Nkcl92YeB6pcgo6MUo5YESYtUSoY0nyAo3YSi8FtiNs=",
    btnText: "Apply Now",
    url: "https://www.google.com/",
  },
  {
    title: "Yearly savings of upto Rs 18000",
    details: "Get upto Rs 5 Lakh credit limit",
    photo:
      "https://assets.airtel.in/teams/simplycms/ADTECH/images/credit_card_img_new.png",
    btnText: "Apply Now",
    url: "https://www.google.com/",
  },
];

export default function App() {
  return (
    <div className="steps-box">
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(0);
  const { title, details, photo, btnText, url } = data[step];

  function handlePrev() {
    setStep((s) => s - 1);
  }

  function handleNext() {
    setStep((s) => s + 1);
  }

  return (
    <>
      <div className="steps">
        <div className="detail">
          <h2>{title}</h2>
          <p>{details}</p>
          <a href={url}>{btnText}</a>
        </div>
        <div className="photos">
          <img src={photo} alt={title} />
        </div>
      </div>
      <div className="button-control">
        <button
          className={`left-btn ${step === 0 ? "disable" : ""}`}
          onClick={handlePrev}
        >
          ←
        </button>
        <span>
          {step + 1}/{data.length}
        </span>
        <button
          className={`right-btn ${step === data.length - 1 ? "disable" : ""}`}
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </>
  );
}
