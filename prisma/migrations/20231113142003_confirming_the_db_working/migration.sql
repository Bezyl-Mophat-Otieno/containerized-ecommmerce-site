-- CreateTable
CREATE TABLE "_orderToproduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_orderToproduct_AB_unique" ON "_orderToproduct"("A", "B");

-- CreateIndex
CREATE INDEX "_orderToproduct_B_index" ON "_orderToproduct"("B");

-- AddForeignKey
ALTER TABLE "_orderToproduct" ADD CONSTRAINT "_orderToproduct_A_fkey" FOREIGN KEY ("A") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_orderToproduct" ADD CONSTRAINT "_orderToproduct_B_fkey" FOREIGN KEY ("B") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
