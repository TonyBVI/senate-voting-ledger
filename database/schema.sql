
CREATE TABLE senators (
    senator_id VARCHAR(20) PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    full_name VARCHAR(200),
    state CHAR(2),
    party VARCHAR(20),
    start_date DATE,
    end_date DATE,
    active BOOLEAN DEFAULT TRUE
);

CREATE TABLE votes (
    vote_id SERIAL PRIMARY KEY,
    congress INTEGER NOT NULL,
    session INTEGER NOT NULL,
    vote_number INTEGER NOT NULL,
    vote_date DATE NOT NULL,
    vote_time TIME,
    vote_type VARCHAR(100),
    measure VARCHAR(200),
    question TEXT,
    result TEXT,
    senate_url TEXT,
    source_hash TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE vote_positions (
    vote_position_id SERIAL PRIMARY KEY,
    vote_id INTEGER REFERENCES votes(vote_id),
    senator_id VARCHAR(20) REFERENCES senators(senator_id),
    vote_value VARCHAR(20),
    UNIQUE(vote_id, senator_id)
);
