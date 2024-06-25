-- CreateTable
CREATE TABLE "authors_table" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "number_of_books" INTEGER NOT NULL,
    "books_written" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "authors_table_pkey" PRIMARY KEY ("id")
);
