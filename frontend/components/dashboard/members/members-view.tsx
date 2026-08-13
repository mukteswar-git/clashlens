"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

import { MemberToolbar } from "./member-toolbar";
import { MobileMemberToolbar } from "./mobile-member-toolbar";
import { DesktopMemberTable } from "./desktop-member-table";
import { MobileMemberTable } from "./mobile-member-table";
import { ExtractMembersDialog } from "./extract-members-dialog";
import { generateMembersCsv } from "@/lib/export/members-csv";
import { downloadCsv } from "@/lib/export/download";

import { CompareMetric, MemberComparison, MobileColumn, SortMetric } from "@/types/member";

interface MembersViewProps {
  members: MemberComparison[];
}

export function MembersView({ members }: MembersViewProps) {
  const [compareMetric, setCompareMetric] = useState<CompareMetric>("heroes");

  const [sortMetric, setSortMetric] = useState<SortMetric>("role");

  const [isExtractOpen, setIsExtractOpen] = useState(false);

  const sortColumn: MobileColumn = sortMetric;
  const compareColumn: MobileColumn = compareMetric;

  return (
    <>
      <Card>
        {/* Desktop Toolbar */}
        <div className="hidden lg:block">
          <MemberToolbar
            memberCount={members.length}
            compareMetric={compareMetric}
            sortMetric={sortMetric}
            onCompareChange={setCompareMetric}
            onSortChange={setSortMetric}
            onExtract={() => setIsExtractOpen(true)}
          />
        </div>

        {/* Mobile + Tablet Toolbar */}
        <div className="lg:hidden">
          <MobileMemberToolbar
            memberCount={members.length}
            compareMetric={compareMetric}
            sortMetric={sortMetric}
            onCompareChange={setCompareMetric}
            onSortChange={setSortMetric}
            onExtract={() => setIsExtractOpen(true)}
          />
        </div>

        <CardContent className="px-0 py-4 md:p-4">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <DesktopMemberTable
              members={members}
              compareMetric={compareMetric}
              sortMetric={sortMetric}
            />
          </div>

          {/* Mobile + Tablet Table */}
          <div className="lg:hidden">
            <MobileMemberTable members={members} sortBy={sortColumn} compareBy={compareColumn} />
          </div>
        </CardContent>
      </Card>

      <ExtractMembersDialog
        open={isExtractOpen}
        onOpenChange={setIsExtractOpen}
        onExtract={(options) => {
          const csv = generateMembersCsv(members, options);

          downloadCsv(csv, "members.csv");

          setIsExtractOpen(false);
        }}
      />
    </>
  );
}
