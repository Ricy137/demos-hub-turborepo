import { PropsWithChildren, useCallback } from "react";
import { useAccountAddress, useAccountConnect } from "@services/account";

const ConnectBtn: React.FC<PropsWithChildren> = ({ children }) => {
  const accountAddress = useAccountAddress();
  const accountConnect = useAccountConnect();

  const connect = useCallback(async () => {
    try {
      await accountConnect();
    } catch (err) {
      alert("failed to connect");
    }
  }, []);

  if (accountAddress) {
    return <>{children}</>;
  }
  return <button onClick={connect}>Connect</button>;
};

export default ConnectBtn;
