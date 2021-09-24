import React, { useState } from "react";
import MultiStep from "react-multistep";

function HowToModule(props) {
  const [searchValue, setSearchValue] = useState();
  const steps = [
    {
      name: "StepOne",
      component: (
        <div>
          Download form ... from <button className="btn btn-link">link</button>
        </div>
      ),
    },
    { name: "StepTwo", component: <div>Step Two</div> },
    { name: "StepThree", component: <div>Step Three</div> },
    { name: "StepFour", component: <div>Step Four</div> },
  ];

  const prevStyle = { background: "#33c3f0", border: "none", color: "white" };
  const nextStyle = { background: "#33c3f0", border: "none", color: "white" };

  return (
    <div>
      <h3>How To</h3>
      <input
        placeholder="Search"
        datalis
        list="compliance-how-tos"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <datalist id="compliance-how-tos">
        <option value="Submitting a ..." />
        <option value="Compliance with ..." />
        <option value="Form ..." />
        <option value="Valuation Compliance" />
        <option value="Fraud Compliance" />
      </datalist>
      <div className="p-3">
        {searchValue && (
          <>
            <h5>Submitting a ... form</h5>
            <MultiStep
              showNavigation={true}
              steps={steps}
              prevStyle={prevStyle}
              nextStyle={nextStyle}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default HowToModule;
