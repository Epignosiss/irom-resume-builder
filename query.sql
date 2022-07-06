-- DROP DATABASE IF EXISTS resumebuilder;
-- CREATE DATABASE resumebuilder;

-- \c resumebuilder;

DROP TABLE IF EXISTS  userResume;


CREATE TABLE userResume (
    id BIGSERIAL PRIMARY KEY,
    fullname VARCHAR(200),
    email VARCHAR(200),
    designation TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL,
    experience JSONB,
    Skills TEXT [],
    education JSONB,
    created_at TIMESTAMPTZ DEFAULT Now()
);


--  Company VARCHAR(200)
--     role VARCHAR(200) 
--     designation

--\i /Users/user/Desktop/resume-build/query.sql
--    Institution 
--     degree
-- yearofpassing