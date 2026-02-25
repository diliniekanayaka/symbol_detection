-- Initial Electriquote MVP schema
CREATE TYPE "Role" AS ENUM ('OWNER','ADMIN','ESTIMATOR','PM','MEMBER','CLIENT');
CREATE TYPE "TaskStatus" AS ENUM ('TODO','IN_PROGRESS','DONE');
CREATE TYPE "TaskPriority" AS ENUM ('LOW','MEDIUM','HIGH','CRITICAL');
CREATE TYPE "BoQState" AS ENUM ('DRAFT','SUBMITTED','APPROVED');

CREATE TABLE "User" (
  "id" TEXT PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "passwordHash" TEXT,
  "fullName" TEXT NOT NULL,
  "emailVerifiedAt" TIMESTAMP,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE "Organization" (
  "id" TEXT PRIMARY KEY,
  "slug" TEXT NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "brandingPrimary" TEXT NOT NULL DEFAULT '#f8c536',
  "brandingSecondary" TEXT NOT NULL DEFAULT '#0a0a0a',
  "timeZone" TEXT NOT NULL DEFAULT 'UTC',
  "currency" TEXT NOT NULL DEFAULT 'USD',
  "seatLimit" INTEGER NOT NULL DEFAULT 5,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE "Membership" (
  "id" TEXT PRIMARY KEY,
  "organizationId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "role" "Role" NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("organizationId", "userId")
);

CREATE TABLE "Project" (
  "id" TEXT PRIMARY KEY,
  "organizationId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "clientName" TEXT NOT NULL,
  "contractValue" DECIMAL(18,2) NOT NULL DEFAULT 0,
  "budgetBaseline" DECIMAL(18,2) NOT NULL DEFAULT 0,
  "progressAuto" INTEGER NOT NULL DEFAULT 0,
  "progressManual" INTEGER,
  "isArchived" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE "Task" (
  "id" TEXT PRIMARY KEY,
  "projectId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "status" "TaskStatus" NOT NULL DEFAULT 'TODO',
  "priority" "TaskPriority" NOT NULL DEFAULT 'MEDIUM',
  "estimateHours" DOUBLE PRECISION,
  "actualHours" DOUBLE PRECISION NOT NULL DEFAULT 0,
  "dueDate" TIMESTAMP,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE "TaskComment" (
  "id" TEXT PRIMARY KEY,
  "taskId" TEXT NOT NULL,
  "authorId" TEXT NOT NULL,
  "body" TEXT NOT NULL,
  "isPrivate" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "BoQVersion" (
  "id" TEXT PRIMARY KEY,
  "projectId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "versionLabel" TEXT NOT NULL,
  "state" "BoQState" NOT NULL DEFAULT 'DRAFT',
  "overheadPct" DECIMAL(6,2) NOT NULL DEFAULT 0,
  "marginPct" DECIMAL(6,2) NOT NULL DEFAULT 0,
  "taxPct" DECIMAL(6,2) NOT NULL DEFAULT 0,
  "discountPct" DECIMAL(6,2) NOT NULL DEFAULT 0,
  "revisionNotes" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL,
  UNIQUE("projectId", "versionLabel")
);

CREATE TABLE "BoQLineItem" (
  "id" TEXT PRIMARY KEY,
  "boQVersionId" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "unit" TEXT NOT NULL,
  "quantity" DOUBLE PRECISION NOT NULL,
  "rate" DECIMAL(18,2) NOT NULL,
  "total" DECIMAL(18,2) NOT NULL,
  "laborCost" DECIMAL(18,2) NOT NULL DEFAULT 0,
  "equipmentCost" DECIMAL(18,2) NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE "Subscription" (
  "id" TEXT PRIMARY KEY,
  "organizationId" TEXT NOT NULL,
  "planCode" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "stripeCustomer" TEXT,
  "stripeSubId" TEXT,
  "seatsPurchased" INTEGER NOT NULL DEFAULT 1,
  "currentPeriodEnd" TIMESTAMP,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE "AuditLog" (
  "id" TEXT PRIMARY KEY,
  "organizationId" TEXT NOT NULL,
  "actorUserId" TEXT,
  "entityType" TEXT NOT NULL,
  "entityId" TEXT NOT NULL,
  "action" TEXT NOT NULL,
  "metadataJson" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE "Membership" ADD CONSTRAINT "Membership_organization_fk" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE;
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_user_fk" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE;
ALTER TABLE "Project" ADD CONSTRAINT "Project_organization_fk" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE;
ALTER TABLE "Task" ADD CONSTRAINT "Task_project_fk" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE;
ALTER TABLE "TaskComment" ADD CONSTRAINT "TaskComment_task_fk" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE;
ALTER TABLE "TaskComment" ADD CONSTRAINT "TaskComment_author_fk" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE;
ALTER TABLE "BoQVersion" ADD CONSTRAINT "BoQVersion_project_fk" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE;
ALTER TABLE "BoQLineItem" ADD CONSTRAINT "BoQLineItem_boq_fk" FOREIGN KEY ("boQVersionId") REFERENCES "BoQVersion"("id") ON DELETE CASCADE;
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_organization_fk" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE;
