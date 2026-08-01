import { Card } from "@/components/ui/card";

import {
  MembersHeaderSkeleton,
  MembersTableSkeleton,
  MembersToolbarSkeleton,
} from "@/components/common/skeletons";

export function MembersPageSkeleton() {
  return (
    <div className="space-y-6">
      <MembersHeaderSkeleton />

      <Card className="overflow-hidden">
        <MembersToolbarSkeleton />
        <MembersTableSkeleton />
      </Card>
    </div>
  );
}
