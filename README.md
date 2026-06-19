
# Senate Voting Ledger (SVL)

Neutral, auditable database of U.S. Senate roll-call votes.

## Quick start (frontend MVP)

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal (typically http://localhost:5173). You should see the **Senate Voting Matrix** with sample senators as rows and roll-call votes as columns. Use search, party, and state filters above the grid.

## Repository contents

- `database/schema.sql` — PostgreSQL schema
- `api/openapi.yaml` — API sketch
- `ingestion/ingestion.py` — ingestion placeholder
- `frontend/` — React + AG Grid voting matrix (sample data)
- `docs/` — vision and governance

This starter kit is intended as an MVP foundation.
