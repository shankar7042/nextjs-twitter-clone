import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 cursor-pointer transition">
        <FaFeather color="white" size={24} />
      </div>
      <div className="hidden lg:block mt-6 px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
        <p className="hidden lg:block text-center text-2xl font-semibold text-white">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
