-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL,
    "producttitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" INTEGER NOT NULL,
    "unitsLeft" INTEGER NOT NULL,
    "hasDiscount" BOOLEAN NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
