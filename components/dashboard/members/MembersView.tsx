"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { MemberToolbar } from "./MemberToolbar";
import { MemberTable } from "./MemberTable";

import { CompareMetric, MemberComparison, SortMetric } from "@/types/member";

interface MembersViewProps {
  members: MemberComparison[];
}

export function MembersView({ members }: MembersViewProps) {
  const [compareMetric, setCompareMetric] = useState<CompareMetric>("heroes");

  const [sortMetric, setSortMetric] = useState<SortMetric>("role");

  return (
    <Card>
      <MemberToolbar
        memberCount={members.length}
        compareMetric={compareMetric}
        sortMetric={sortMetric}
        onCompareChange={setCompareMetric}
        onSortChange={setSortMetric}
      />

      <CardContent className="p-4">
        <MemberTable
          members={members}
          compareMetric={compareMetric}
          sortMetric={sortMetric}
        />
      </CardContent>
    </Card>
  );
}
