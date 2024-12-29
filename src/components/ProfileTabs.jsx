import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileTabs = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-row gap-5">
        <Button
          type="primary"
          onClick={() => navigate("/profile/yourFindings")}
        >
          Your Findings
        </Button>
        <Button type="primary" onClick={() => navigate("/profile/yourClaims")}>
          Your Claims
        </Button>
        <Button
          type="primary"
          onClick={() => navigate("/profile/recievedRequests")}
        >
          Recieved Requests
        </Button>
      </div>
    </div>
  );
};

export default ProfileTabs;
