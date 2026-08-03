import { ErrorState } from "@/components/common/error-state";
import { MembersView } from "@/components/dashboard/members/members-view";
import { getMembers } from "@/lib/backend";
import type { Metadata } from "next";
import { normalizeClanTag } from "@/lib/coc/normalize-tag";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Analyze clan members, compare progression, donations, and activity using live Clash of Clans data.",
};

type MembersPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export default async function MembersPage({ params }: MembersPageProps) {
  const { tag } = await params;

  let members;

  try {
    members = await getMembers(normalizeClanTag(tag));
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }

    switch (error.message) {
      case "NOT_FOUND":
        return (
          <ErrorState
            title="Clan not found"
            description="We couldn't find a clan with this tag. Please check the tag and try again."
          />
        );

      case "UNAUTHORIZED":
        return (
          <ErrorState
            title="Authentication failed"
            description="Unable to authenticate with the Clash of Clans API. Please try again later."
          />
        );

      case "FORBIDDEN":
        return (
          <ErrorState
            title="Access denied"
            description="Unable to access the Clash of Clans API at the moment. Please try again later."
          />
        );

      case "RATE_LIMITED":
        return (
          <ErrorState
            title="Too many requests"
            description="The Clash of Clans API rate limit has been reached. Please wait a moment and try again."
          />
        );

      case "SERVER_ERROR":
        return (
          <ErrorState
            title="Service unavailable"
            description="The Clash of Clans API is currently unavailable. Please try again later."
          />
        );

      case "NETWORK_ERROR":
        return (
          <ErrorState
            title="Network error"
            description="Unable to connect to the Clash of Clans API. Please check your internet connection and try again."
          />
        );

      default:
        return (
          <ErrorState
            title="Something went wrong"
            description="An unexpected error occurred. Please try again."
          />
        );
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Members</h1>
        <p className="text-muted-foreground">
          Compare the progression and performance of every clan member.
        </p>
      </div>

      <MembersView members={members} />
    </div>
  );
}
