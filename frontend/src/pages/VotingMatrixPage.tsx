import { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import {
  buildMatrixRows,
  getUniqueParties,
  getUniqueStates,
  getVoteColumnHeader,
  getVoteTooltip,
  votes,
  type MatrixRow,
} from '../data/sampleData';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const partyLabels: Record<string, string> = {
  D: 'Democrat',
  R: 'Republican',
  I: 'Independent',
};

function voteCellClass(value: string | undefined): string {
  switch (value) {
    case 'Yea':
      return 'vote-yea';
    case 'Nay':
      return 'vote-nay';
    case 'Present':
      return 'vote-present';
    default:
      return 'vote-absent';
  }
}

export default function VotingMatrixPage() {
  const [search, setSearch] = useState('');
  const [partyFilter, setPartyFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  const allRows = useMemo(() => buildMatrixRows(), []);
  const states = useMemo(() => getUniqueStates(), []);
  const parties = useMemo(() => getUniqueParties(), []);

  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase();
    return allRows.filter((row) => {
      if (partyFilter && row.party !== partyFilter) return false;
      if (stateFilter && row.state !== stateFilter) return false;
      if (query && !row.fullName.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [allRows, search, partyFilter, stateFilter]);

  const columnDefs = useMemo<ColDef<MatrixRow>[]>(() => {
    const senatorColumns: ColDef<MatrixRow>[] = [
      {
        field: 'fullName',
        headerName: 'Senator',
        pinned: 'left',
        minWidth: 180,
        filter: false,
      },
      {
        field: 'state',
        headerName: 'State',
        pinned: 'left',
        width: 80,
        filter: false,
      },
      {
        field: 'party',
        headerName: 'Party',
        pinned: 'left',
        width: 80,
        filter: false,
        valueFormatter: (params) => partyLabels[params.value as string] ?? params.value,
      },
    ];

    const voteColumns: ColDef<MatrixRow>[] = votes.map((vote) => ({
      field: vote.voteId,
      headerName: getVoteColumnHeader(vote),
      headerTooltip: getVoteTooltip(vote),
      width: 130,
      filter: false,
      cellClass: (params) => voteCellClass(params.value as string | undefined),
    }));

    return [...senatorColumns, ...voteColumns];
  }, []);

  const defaultColDef = useMemo<ColDef>(
    () => ({
      sortable: true,
      resizable: true,
    }),
    [],
  );

  return (
    <div className="page">
      <header className="page-header">
        <h1>Senate Voting Matrix</h1>
        <p className="subtitle">Sample data — 118th Congress, 2nd Session</p>
      </header>

      <div className="filters">
        <label>
          Search senator
          <input
            type="search"
            placeholder="Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <label>
          Party
          <select value={partyFilter} onChange={(e) => setPartyFilter(e.target.value)}>
            <option value="">All parties</option>
            {parties.map((party) => (
              <option key={party} value={party}>
                {partyLabels[party] ?? party}
              </option>
            ))}
          </select>
        </label>

        <label>
          State
          <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}>
            <option value="">All states</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>

        <span className="result-count">
          {filteredRows.length} of {allRows.length} senators
        </span>
      </div>

      <div className="ag-theme-quartz grid-container">
        <AgGridReact<MatrixRow>
          rowData={filteredRows}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          getRowId={(params) => params.data.senatorId}
          suppressCellFocus
        />
      </div>
    </div>
  );
}
