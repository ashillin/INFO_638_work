drop database if exists prgm_assign_db;

create database prgm_assign_db;

\c prgm_assign_db

CREATE TABLE "sites" (
  "id" serial,
  "site_name" text UNIQUE NOT NULL,
  "location" text,
  "created_at" timestamp DEFAULT CURRENT_DATE,
  "days" timestamp,
  "hours" time,
  "assign_roles" boolean,
  PRIMARY KEY ("id")
);

CREATE TABLE "volunteers" (
  "id" serial,
  "name" text,
  "volunteer_status" text NOT NULL,
  "email" text UNIQUE NOT NULL,
  "password" text NOT NULL,
  "salt" text,
  PRIMARY KEY ("id")
);

CREATE TABLE "roles" (
  "id" serial,
  "name" text,
  PRIMARY KEY ("id")
);

CREATE TABLE "assignments" (
  "id" serial,
  "volunteer_id" serial,
  "site_id" serial,
  "role_id" serial,
  "time_started" timestamp DEFAULT CURRENT_DATE,
  "time_ended" timestamp DEFAULT CURRENT_DATE,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_assignments_volunteer_id"
    FOREIGN KEY ("volunteer_id")
      REFERENCES "volunteers"("id"),
  CONSTRAINT "FK_assignments_site_id"
    FOREIGN KEY ("site_id")
      REFERENCES "sites"("id"),
  CONSTRAINT "FK_assignments_role_id"
    FOREIGN KEY ("role_id")
      REFERENCES "roles"("id")

);

CREATE TABLE "notices" (
  "id" serial,
  "site_id" serial,
  "volunteer_id" serial,
  "notice" text,
  "created_at" timestamp DEFAULT CURRENT_DATE,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_notices_volunteer_id"
    FOREIGN KEY ("volunteer_id")
      REFERENCES "volunteers"("id"),
  CONSTRAINT "FK_notices_site_id"
    FOREIGN KEY ("site_id")
      REFERENCES "sites"("id")
);