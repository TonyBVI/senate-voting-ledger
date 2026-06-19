export type VoteValue = 'Yea' | 'Nay' | 'Not Voting' | 'Present';

export interface Senator {
  senatorId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  state: string;
  party: 'D' | 'R' | 'I';
}

export interface Vote {
  voteId: string;
  congress: number;
  session: number;
  voteNumber: number;
  voteDate: string;
  measure: string;
  question: string;
  result: string;
}

export interface VotePosition {
  voteId: string;
  senatorId: string;
  voteValue: VoteValue;
}

export interface MatrixRow {
  senatorId: string;
  fullName: string;
  state: string;
  party: string;
  [voteId: string]: string;
}

export const senators: Senator[] = [
  { senatorId: 'S001', firstName: 'Tammy', lastName: 'Baldwin', fullName: 'Tammy Baldwin', state: 'WI', party: 'D' },
  { senatorId: 'S002', firstName: 'John', lastName: 'Barrasso', fullName: 'John Barrasso', state: 'WY', party: 'R' },
  { senatorId: 'S003', firstName: 'Michael', lastName: 'Bennet', fullName: 'Michael Bennet', state: 'CO', party: 'D' },
  { senatorId: 'S004', firstName: 'Richard', lastName: 'Blumenthal', fullName: 'Richard Blumenthal', state: 'CT', party: 'D' },
  { senatorId: 'S005', firstName: 'John', lastName: 'Boozman', fullName: 'John Boozman', state: 'AR', party: 'R' },
  { senatorId: 'S006', firstName: 'Sherrod', lastName: 'Brown', fullName: 'Sherrod Brown', state: 'OH', party: 'D' },
  { senatorId: 'S007', firstName: 'Bill', lastName: 'Cassidy', fullName: 'Bill Cassidy', state: 'LA', party: 'R' },
  { senatorId: 'S008', firstName: 'Susan', lastName: 'Collins', fullName: 'Susan Collins', state: 'ME', party: 'R' },
  { senatorId: 'S009', firstName: 'Chris', lastName: 'Coons', fullName: 'Chris Coons', state: 'DE', party: 'D' },
  { senatorId: 'S010', firstName: 'Ted', lastName: 'Cruz', fullName: 'Ted Cruz', state: 'TX', party: 'R' },
  { senatorId: 'S011', firstName: 'Tammy', lastName: 'Duckworth', fullName: 'Tammy Duckworth', state: 'IL', party: 'D' },
  { senatorId: 'S012', firstName: 'Dick', lastName: 'Durbin', fullName: 'Dick Durbin', state: 'IL', party: 'D' },
  { senatorId: 'S013', firstName: 'Joni', lastName: 'Ernst', fullName: 'Joni Ernst', state: 'IA', party: 'R' },
  { senatorId: 'S014', firstName: 'Dianne', lastName: 'Feinstein', fullName: 'Dianne Feinstein', state: 'CA', party: 'D' },
  { senatorId: 'S015', firstName: 'Chuck', lastName: 'Grassley', fullName: 'Chuck Grassley', state: 'IA', party: 'R' },
  { senatorId: 'S016', firstName: 'Maggie', lastName: 'Hassan', fullName: 'Maggie Hassan', state: 'NH', party: 'D' },
  { senatorId: 'S017', firstName: 'Martin', lastName: 'Heinrich', fullName: 'Martin Heinrich', state: 'NM', party: 'D' },
  { senatorId: 'S018', firstName: 'John', lastName: 'Hoeven', fullName: 'John Hoeven', state: 'ND', party: 'R' },
  { senatorId: 'S019', firstName: 'Tim', lastName: 'Kaine', fullName: 'Tim Kaine', state: 'VA', party: 'D' },
  { senatorId: 'S020', firstName: 'Angus', lastName: 'King', fullName: 'Angus King', state: 'ME', party: 'I' },
];

export const votes: Vote[] = [
  {
    voteId: 'V001',
    congress: 118,
    session: 2,
    voteNumber: 101,
    voteDate: '2024-02-08',
    measure: 'S. 4367',
    question: 'On the Cloture Motion',
    result: 'Cloture Motion Agreed to (62-36)',
  },
  {
    voteId: 'V002',
    congress: 118,
    session: 2,
    voteNumber: 102,
    voteDate: '2024-02-13',
    measure: 'S. 4367',
    question: 'On Passage of the Bill',
    result: 'Bill Passed (67-32)',
  },
  {
    voteId: 'V003',
    congress: 118,
    session: 2,
    voteNumber: 103,
    voteDate: '2024-03-05',
    measure: 'H.R. 815',
    question: 'On the Motion to Proceed',
    result: 'Motion Agreed to (60-38)',
  },
  {
    voteId: 'V004',
    congress: 118,
    session: 2,
    voteNumber: 104,
    voteDate: '2024-03-12',
    measure: 'H.R. 815',
    question: 'On Passage of the Bill',
    result: 'Bill Passed (74-24)',
  },
  {
    voteId: 'V005',
    congress: 118,
    session: 2,
    voteNumber: 105,
    voteDate: '2024-04-10',
    measure: 'PN 1234',
    question: 'On the Nomination',
    result: 'Nomination Confirmed (52-48)',
  },
  {
    voteId: 'V006',
    congress: 118,
    session: 2,
    voteNumber: 106,
    voteDate: '2024-05-02',
    measure: 'S. Res. 512',
    question: 'On the Resolution',
    result: 'Resolution Agreed to (55-45)',
  },
  {
    voteId: 'V007',
    congress: 118,
    session: 2,
    voteNumber: 107,
    voteDate: '2024-06-18',
    measure: 'H.R. 8997',
    question: 'On the Cloture Motion',
    result: 'Cloture Motion Rejected (48-50)',
  },
  {
    voteId: 'V008',
    congress: 118,
    session: 2,
    voteNumber: 108,
    voteDate: '2024-07-22',
    measure: 'S. 3373',
    question: 'On Passage of the Bill',
    result: 'Bill Passed (61-37)',
  },
];

const positions: VotePosition[] = [
  // V001 - cloture, mostly bipartisan support
  ...['S001', 'S003', 'S004', 'S009', 'S011', 'S012', 'S014', 'S016', 'S017', 'S019', 'S008', 'S020'].map((id) => ({
    voteId: 'V001', senatorId: id, voteValue: 'Yea' as VoteValue,
  })),
  ...['S002', 'S005', 'S007', 'S010', 'S013', 'S015', 'S018'].map((id) => ({
    voteId: 'V001', senatorId: id, voteValue: 'Nay' as VoteValue,
  })),
  { voteId: 'V001', senatorId: 'S006', voteValue: 'Not Voting' },

  // V002 - passage
  ...['S001', 'S003', 'S004', 'S009', 'S011', 'S012', 'S014', 'S016', 'S017', 'S019', 'S008', 'S020', 'S018'].map((id) => ({
    voteId: 'V002', senatorId: id, voteValue: 'Yea' as VoteValue,
  })),
  ...['S002', 'S005', 'S007', 'S010', 'S013', 'S015'].map((id) => ({
    voteId: 'V002', senatorId: id, voteValue: 'Nay' as VoteValue,
  })),
  { voteId: 'V002', senatorId: 'S006', voteValue: 'Yea' },

  // V003 - motion to proceed, party-line lean
  ...['S001', 'S003', 'S004', 'S006', 'S009', 'S011', 'S012', 'S014', 'S016', 'S017', 'S019', 'S020'].map((id) => ({
    voteId: 'V003', senatorId: id, voteValue: 'Yea' as VoteValue,
  })),
  ...['S002', 'S005', 'S007', 'S008', 'S010', 'S013', 'S015', 'S018'].map((id) => ({
    voteId: 'V003', senatorId: id, voteValue: 'Nay' as VoteValue,
  })),

  // V004 - passage, broader support
  ...senators.map((s) => ({
    voteId: 'V004',
    senatorId: s.senatorId,
    voteValue: (['S002', 'S005', 'S010', 'S013'].includes(s.senatorId) ? 'Nay' : 'Yea') as VoteValue,
  })),

  // V005 - nomination, narrow
  ...['S002', 'S005', 'S007', 'S008', 'S010', 'S013', 'S015', 'S018'].map((id) => ({
    voteId: 'V005', senatorId: id, voteValue: 'Yea' as VoteValue,
  })),
  ...['S001', 'S003', 'S004', 'S006', 'S009', 'S011', 'S012', 'S014', 'S016', 'S017', 'S019'].map((id) => ({
    voteId: 'V005', senatorId: id, voteValue: 'Nay' as VoteValue,
  })),
  { voteId: 'V005', senatorId: 'S020', voteValue: 'Present' },

  // V006 - resolution
  ...['S001', 'S003', 'S004', 'S006', 'S009', 'S011', 'S012', 'S014', 'S016', 'S017', 'S019'].map((id) => ({
    voteId: 'V006', senatorId: id, voteValue: 'Yea' as VoteValue,
  })),
  ...['S002', 'S005', 'S007', 'S010', 'S013', 'S015', 'S018'].map((id) => ({
    voteId: 'V006', senatorId: id, voteValue: 'Nay' as VoteValue,
  })),
  { voteId: 'V006', senatorId: 'S008', voteValue: 'Yea' },
  { voteId: 'V006', senatorId: 'S020', voteValue: 'Yea' },

  // V007 - cloture rejected
  ...['S001', 'S003', 'S004', 'S006', 'S009', 'S011', 'S012', 'S014', 'S016', 'S017', 'S019'].map((id) => ({
    voteId: 'V007', senatorId: id, voteValue: 'Yea' as VoteValue,
  })),
  ...['S002', 'S005', 'S007', 'S008', 'S010', 'S013', 'S015', 'S018', 'S020'].map((id) => ({
    voteId: 'V007', senatorId: id, voteValue: 'Nay' as VoteValue,
  })),

  // V008 - bill passage
  ...['S001', 'S003', 'S004', 'S006', 'S008', 'S009', 'S011', 'S012', 'S014', 'S016', 'S017', 'S019', 'S020'].map((id) => ({
    voteId: 'V008', senatorId: id, voteValue: 'Yea' as VoteValue,
  })),
  ...['S002', 'S005', 'S007', 'S010', 'S013', 'S015', 'S018'].map((id) => ({
    voteId: 'V008', senatorId: id, voteValue: 'Nay' as VoteValue,
  })),
];

// Deduplicate positions (last wins) in case of overlaps in sample data
const positionMap = new Map<string, VoteValue>();
for (const p of positions) {
  positionMap.set(`${p.senatorId}:${p.voteId}`, p.voteValue);
}

export function buildMatrixRows(): MatrixRow[] {
  return senators.map((senator) => {
    const row: MatrixRow = {
      senatorId: senator.senatorId,
      fullName: senator.fullName,
      state: senator.state,
      party: senator.party,
    };

    for (const vote of votes) {
      row[vote.voteId] = positionMap.get(`${senator.senatorId}:${vote.voteId}`) ?? 'Not Voting';
    }

    return row;
  });
}

export function getUniqueStates(): string[] {
  return [...new Set(senators.map((s) => s.state))].sort();
}

export function getUniqueParties(): string[] {
  return [...new Set(senators.map((s) => s.party))].sort();
}

export function getVoteColumnHeader(vote: Vote): string {
  return `${vote.voteId} (${vote.measure})`;
}

export function getVoteTooltip(vote: Vote): string {
  return `${vote.question} — ${vote.result} (${vote.voteDate})`;
}
