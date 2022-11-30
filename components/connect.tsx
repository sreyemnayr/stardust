/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { UserIcon } from '@heroicons/react/24/solid';

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            className="border rounded-full border-transparent bg-romantic-rose text-sm font-medium text-white hover:bg-forest-fruit-red focus:outline-none focus:ring-2 focus:ring-romantic-rose focus:ring-offset-2"
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className="h-8 w-8 flex rounded-full p-0 border-none bg-romantic-rose border-0 text-hummus hover:bg-forest-fruit-red">
                    <UserIcon className="block h-10 w-10" />
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className="flex rounded-lg border border-transparent bg-romantic-rose py-2 px-4 text-sm font-medium text-white hover:bg-forest-fruit-red focus:outline-none focus:ring-2 focus:ring-romantic-rose focus:ring-offset-2">
                    Wrong network
                  </button>
                );
              }
              {/* filter: invert(32%) sepia(21%) saturate(3133%) hue-rotate(276deg) brightness(93%) contrast(89%); */}
              return (
                <img 
                  onClick={openAccountModal}
                  src={account.ensAvatar || chain.iconUrl}
                  alt="My Wallet"
                  className="flex h-10 invert-[.32] sepia-[.21] saturate-[3.133] hue-rotate-[276deg] brightness-[.93] contrast-[.89] rounded-full " />
                   
                
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};