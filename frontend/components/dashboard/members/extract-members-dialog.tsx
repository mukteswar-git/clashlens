"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type {
  ExportColumn,
  ExportSortField,
  ExportSortOrder,
  MemberExportOptions,
} from "@/types/member-export";

interface ExtractMembersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onExtract: (options: MemberExportOptions) => void;
}

const EXPORT_COLUMNS = [
  { id: "name", label: "Name" },
  { id: "tag", label: "Player Tag" },
  { id: "role", label: "Role" },
  { id: "townHall", label: "Town Hall" },
  { id: "league", label: "League" },
  { id: "donations", label: "Donations" },
  { id: "received", label: "Received" },
  { id: "trophies", label: "Trophies" },
] as const;

const SORT_OPTIONS = [
  { value: "name", label: "Name" },
  { value: "role", label: "Role" },
  { value: "townHall", label: "Town Hall" },
  { value: "league", label: "League" },
  { value: "donations", label: "Donations" },
  { value: "received", label: "Received" },
  { value: "trophies", label: "Trophies" },
] as const;

export function ExtractMembersDialog({ open, onOpenChange, onExtract }: ExtractMembersDialogProps) {
  const [selectedColumns, setSelectedColumns] = useState<ExportColumn[]>(
    EXPORT_COLUMNS.map((column) => column.id)
  );

  const [sortBy, setSortBy] = useState<ExportSortField>("name");

  const [sortOrder, setSortOrder] = useState<ExportSortOrder>("desc");

  const availableSortOptions = SORT_OPTIONS.filter((option) =>
    selectedColumns.includes(option.value)
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Extract Members</DialogTitle>

          <DialogDescription>
            Choose the columns and sorting order for your CSV export.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {/* Columns */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-base font-semibold">Columns</label>

              <div className="flex gap-3 text-sm">
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setSelectedColumns(EXPORT_COLUMNS.map((column) => column.id))}
                >
                  Select all
                </button>

                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    setSelectedColumns(["name"]);
                    setSortBy("name");
                  }}
                >
                  Clear all
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {EXPORT_COLUMNS.map((column) => (
                <div key={column.id} className="flex items-center gap-3">
                  <Checkbox
                    id={`export-${column.id}`}
                    checked={selectedColumns.includes(column.id)}
                    disabled={column.id === "name"}
                    onCheckedChange={(checked) => {
                      if (checked === true) {
                        setSelectedColumns((current) => [...current, column.id]);

                        return;
                      }

                      setSelectedColumns((current) => current.filter((id) => id !== column.id));

                      if (sortBy === column.id) {
                        setSortBy("name");
                      }
                    }}
                  />

                  <label htmlFor={`export-${column.id}`} className="cursor-pointer font-normal">
                    {column.label}
                  </label>
                </div>
              ))}
            </div>
          </section>

          {/* Sort */}
          <section className="space-y-3">
            <label className="text-base font-semibold">Sort by</label>

            <Select value={sortBy} onValueChange={(value) => setSortBy(value as ExportSortField)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a field" />
              </SelectTrigger>

              <SelectContent>
                {availableSortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </section>

          {/* Order */}
          <section className="space-y-3">
            <label className="text-base font-semibold">Order</label>

            <RadioGroup
              value={sortOrder}
              onValueChange={(value) => setSortOrder(value as ExportSortOrder)}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="asc" id="order-asc" />

                <label htmlFor="order-asc" className="cursor-pointer font-normal">
                  Ascending
                </label>
              </div>

              <div className="flex items-center gap-2">
                <RadioGroupItem value="desc" id="order-desc" />

                <label htmlFor="order-desc" className="cursor-pointer font-normal">
                  Descending
                </label>
              </div>
            </RadioGroup>
          </section>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            className="hidden sm:inline-flex"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={() =>
              onExtract({
                columns: selectedColumns,
                sortBy,
                sortOrder,
              })
            }
          >
            Extract CSV
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
