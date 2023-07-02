"use client";
import React, { useEffect, type PropsWithChildren, useCallback } from "react";
import cx from "clsx";
import {
  useAccount,
  useConnect,
  useNetwork,
  networkRefresher,
  useSwitchNetwork,
} from "@services/account";
import { GOERLI_NAME } from "@utils/constants";
import Button from "ui/components/Button";
import useInTransaction from "ui/hooks/useInTransaction";

type PropsWithOnClick = PropsWithChildren<{
  onClick?: () => void;
  className?: string;
}>;

const AuthConnectBtn: React.FC<PropsWithOnClick> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  const account = useAccount();
  const chainId = useNetwork();
  const chainMatch = chainId === GOERLI_NAME;
  const _connect = useConnect();
  const { inTransaction, execTransaction: connect } =
    useInTransaction(_connect);
  const switchNetwork = useSwitchNetwork();

  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    async (e) => {
      e.preventDefault();
      if (!account) {
        await connect();
      } else {
        await switchNetwork(5);
        await networkRefresher();
      }
    },
    [account, chainMatch, connect, switchNetwork]
  );

  if (!account || !chainMatch) {
    return (
      <Button
        color="gradient"
        className={cx(
          className,
          inTransaction && "pointer-events-none opacity-30",
          "flex flex-row justify-center items-center"
        )}
        onClick={handleClick}
        {...props}
      >
        Connect Wallet
      </Button>
    );
  } else {
    return children as React.ReactElement;
  }
};

export default AuthConnectBtn;
