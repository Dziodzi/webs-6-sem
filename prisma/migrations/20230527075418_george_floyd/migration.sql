-- CreateTable
CREATE TABLE "Endpoint" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Endpoint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Endpoint_path_key" ON "Endpoint"("path");
