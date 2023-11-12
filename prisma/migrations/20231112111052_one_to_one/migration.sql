/*
  Warnings:

  - A unique constraint covering the columns `[userUserId]` on the table `auth` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[attendanceAttendanceId]` on the table `excuse` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userUserId]` on the table `facialData` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `excuse` ADD COLUMN `details` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `auth_userUserId_key` ON `auth`(`userUserId`);

-- CreateIndex
CREATE UNIQUE INDEX `excuse_attendanceAttendanceId_key` ON `excuse`(`attendanceAttendanceId`);

-- CreateIndex
CREATE UNIQUE INDEX `facialData_userUserId_key` ON `facialData`(`userUserId`);
