import { useState } from "react";
import SearchBar from "./SearchBar";
import Card from "../common/Card";
import Avatar from "../common/Avatar";
import Button from "../common/Button";
import { UserPlus, Check, Clock } from "lucide-react";

export default function SearchPatient({ onSendRequest, existingPatients = [] }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  // Simulated search database
  const mockDatabase = [
    { id: "p101", name: "Aman Sharma", email: "aman@example.com", age: 24, gender: "Male" },
    { id: "p102", name: "Riya Patel", email: "riya@example.com", age: 29, gender: "Female" },
    { id: "p103", name: "John Doe", email: "john@example.com", age: 45, gender: "Male" },
    { id: "p104", name: "Jane Smith", email: "jane@example.com", age: 38, gender: "Female" },
  ];

  const handleSearch = (val) => {
    setQuery(val);
    if (!val) {
      setResult(null);
      setSearched(false);
      return;
    }

    setLoading(true);
    // Simulate API delay
    const timeout = setTimeout(() => {
      const match = mockDatabase.find(
        (p) => p.email.toLowerCase() === val.trim().toLowerCase()
      );
      setResult(match || null);
      setSearched(true);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  };

  const handleClear = () => {
    setQuery("");
    setResult(null);
    setSearched(false);
  };

  const handleSend = async (patient) => {
    if (onSendRequest) {
      await onSendRequest(patient);
      // Update result state locally to show requested status
      setResult(prev => prev ? { ...prev, requestSent: true } : null);
    }
  };

  // Check if patient is already connected or pending
  const getPatientStatus = (patient) => {
    const existing = existingPatients.find(p => p.email === patient.email);
    if (existing) return existing.status;
    if (patient.requestSent) return "pending";
    return null;
  };

  const status = result ? getPatientStatus(result) : null;

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[var(--text)]">Search Patient by Email</label>
        <SearchBar
          value={query}
          onChange={handleSearch}
          placeholder="Enter patient email (e.g. aman@example.com)..."
          onClear={handleClear}
        />
      </div>

      {loading && (
        <Card className="p-4 border-dashed animate-pulse">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--surface-strong)]" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/3 bg-[var(--surface-strong)] rounded" />
              <div className="h-3 w-1/4 bg-[var(--surface-strong)] rounded" />
            </div>
          </div>
        </Card>
      )}

      {!loading && searched && (
        result ? (
          <Card className="p-4 border-[var(--primary)]/30 bg-[var(--primary-light)]/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar name={result.name} size="md" />
                <div>
                  <h4 className="font-semibold text-sm text-[var(--text)]">{result.name}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{result.email}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {result.age} yrs • {result.gender}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 self-start sm:self-auto">
                {status === "accepted" ? (
                  <div className="flex items-center gap-1 text-xs font-medium text-[var(--success)]">
                    <Check className="h-4 w-4" /> Connected
                  </div>
                ) : status === "pending" ? (
                  <div className="flex items-center gap-1 text-xs font-medium text-[var(--warning)]">
                    <Clock className="h-4 w-4" /> Request Sent
                  </div>
                ) : (
                  <Button
                    onClick={() => handleSend(result)}
                    className="w-auto py-1.5 px-3 text-xs"
                    variant="primary"
                  >
                    <UserPlus className="h-3.5 w-3.5" /> Send Request
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ) : (
          <div className="text-center py-4 text-xs text-[var(--text-muted)] border border-dashed border-[var(--border)] rounded-lg">
            No patient found with email "{query}".
          </div>
        )
      )}
    </div>
  );
}
