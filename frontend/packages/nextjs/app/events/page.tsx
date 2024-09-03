"use client";

import type { NextPage } from "next";
import { formatEther } from "viem";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const Events: NextPage = () => {
  // Vote Events
  const { data: voteEvent, isLoading: isVoteEventLoading } = useScaffoldEventHistory({
    contractName: "TokenizedBallot",
    eventName: "Vote",
    fromBlock: 0n,
  });

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      {/* Vote Events */}
      <div>
        <div className="text-center mb-4">
          <span className="block text-2xl font-bold">Vote Events</span>
        </div>
        {isVoteEventLoading ? (
          <div className="flex justify-center items-center mt-8">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-lg">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="bg-primary">Voter</th>
                  <th className="bg-primary">Proposal ID</th>
                  <th className="bg-primary">Amount of vote</th>
                </tr>
              </thead>
              <tbody>
                {!voteEvent || voteEvent.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center">
                      No events found
                    </td>
                  </tr>
                ) : (
                    voteEvent?.map((event, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center">
                          <Address address={event.args._voter} />
                        </td>
                        <td>{event.args?._proposal?.toString() || 0n.toString()}</td>
                        <td>{formatEther(event.args?._amount || 0n)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
