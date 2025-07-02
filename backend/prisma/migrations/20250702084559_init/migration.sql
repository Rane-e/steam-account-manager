-- CreateTable
CREATE TABLE "EmailAccount" (
    "uuid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT,
    "phone_number" TEXT,
    "reserve_email" TEXT,
    "other_data" JSONB,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailAccount_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "SteamAccount" (
    "uuid" TEXT NOT NULL,
    "email_uuid" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT,
    "restriction_5dollar_removed" BOOLEAN NOT NULL,
    "steam_id64" TEXT,
    "r_code" TEXT,
    "maFile" JSONB,
    "isBanned" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SteamAccount_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailAccount_email_key" ON "EmailAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SteamAccount_email_uuid_key" ON "SteamAccount"("email_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "SteamAccount_login_key" ON "SteamAccount"("login");

-- AddForeignKey
ALTER TABLE "SteamAccount" ADD CONSTRAINT "SteamAccount_email_uuid_fkey" FOREIGN KEY ("email_uuid") REFERENCES "EmailAccount"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
