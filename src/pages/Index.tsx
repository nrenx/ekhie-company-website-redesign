
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the new home page
    navigate("/", { replace: true });
  }, [navigate]);

  return null; // This component will not render anything as it redirects
};

export default Index;
