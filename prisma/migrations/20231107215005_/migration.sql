/*
  Warnings:

  - You are about to drop the column `organizationOrganizationId` on the `based` table. All the data in the column will be lost.
  - You are about to drop the column `organizationOrganizationId` on the `user` table. All the data in the column will be lost.
  - Added the required column `organizationId` to the `Based` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `based` DROP FOREIGN KEY `Based_organizationOrganizationId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_organizationOrganizationId_fkey`;

-- AlterTable
ALTER TABLE `based` DROP COLUMN `organizationOrganizationId`,
    ADD COLUMN `organizationId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `organizationOrganizationId`,
    ADD COLUMN `organizationId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `Organization`(`organizationId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Based` ADD CONSTRAINT `Based_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `Organization`(`organizationId`) ON DELETE RESTRICT ON UPDATE CASCADE;
