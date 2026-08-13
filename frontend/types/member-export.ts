export type ExportColumn =
  "name" | "tag" | "role" | "townHall" | "league" | "donations" | "received" | "trophies";

export type ExportSortField = Exclude<ExportColumn, "tag">;

export type ExportSortOrder = "asc" | "desc";

export interface MemberExportOptions {
  columns: ExportColumn[];
  sortBy: ExportSortField;
  sortOrder: ExportSortOrder;
}
