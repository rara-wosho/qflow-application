import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";
import { useRouter } from "expo-router";

const useLogout = () => {
  const router = useRouter();
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  const handleLogout = () => {
    setIsLogoutLoading(true);
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          console.log("log out successfully");
          router.back();
          setTimeout(() => {
            router.replace("/sign-in");
          }, 100);
        })
        .catch((error) => {
          console.error("Error during logout: ", error.message);
          alert("Failed to log out : " + error.message);
        })
        .finally(() => {
          setIsLogoutLoading(false);
        });
    }, 2000);
  };

  return { handleLogout, isLogoutLoading };
};

export default useLogout;
